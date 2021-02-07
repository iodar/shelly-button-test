import express, { Request, Response } from "express"
import chalk from "chalk";
import env from "./env"
import { requestButtonStatus } from "./button-request";

// Erzeugt eine Express Server Applikation (Web Server)
const server = express()

// Server starten, hört auf Port 3000 und erzeugt Lognachricht, wenn der Server gestartet ist
server.listen(env.server.port, () => console.log(`Server started and listening to port ${env.server.port}`))
// disable default headers
server.disable('x-powered-by')

//
// --- WEB HANDLER handling Requests to this server ----
//

// Verarbeitet GET Anfragen an den REST-Endpunkt `/button/short/1`
server.get("/button/short/1", (req: Request, res: Response) => {
    handleRequestSendMessageAndLog(req, res, "short url 1")
})

// Verarbeitet GET Anfragen an den REST-Endpunkt `/button/short/2`
server.get("/button/short/2", (req: Request, res: Response) => {
    handleRequestSendMessageAndLog(req, res, "short url 2")
})

// Verarbeitet GET Anfragen an den REST-Endpunkt `/button/short/3`
server.get("/button/short/3", (req: Request, res: Response) => {
    handleRequestSendMessageAndLog(req, res, "short url 3")
})

// Verarbeitet GET Anfragen an den REST-Endpunkt `/button/long/1`
server.get("/button/long/1", (req: Request, res: Response) => {
    handleRequestSendMessageAndLog(req, res, "long url 1")
})

/**
 * Erzeugt eine Nachricht mit Hilfe des Express Antwort-Objekts und
 * sendet diese zurück an den Aufrufer. 
 * @param res Antwort Objekt des Express Webserver
 * @param urlName Name der URL, die in der Antwort angezeigt wird
 */
function handleRequestSendMessageAndLog(req: Request, res: Response, urlName: string) {
    const message = `'${urlName}' was called`
    if (isLogEnabled()) {
        logRequestToStdOut(req, message);
    }
    res.status(200).json({ message })
}

/**
 * Loggt eine farbige Nachricht nach `STDOUT`.
 * @param req Express Anfrageobjekt
 * @param message Nachricht, die in der Lognachricht angezeigt werden soll
 */
async function logRequestToStdOut(req: Request, message: string) {
    const shellyButtonIp = extractIpFrom(req)
    const currentTimeAsIso = new Date().toISOString();
    console.log(`${chalk.yellow(currentTimeAsIso)} ${chalk.blue("SERVER:")} ${chalk.green(message)} from ${chalk.magenta(shellyButtonIp)}`);
    const batteryStatus = await requestButtonBattery(shellyButtonIp)
    console.log(`${chalk.yellow(currentTimeAsIso)} ${chalk.blue("SERVER:")} ${chalk.green("Shelly status (")}${chalk.yellowBright(shellyButtonIp)}${chalk.green(")")} => ${chalk.blueBright(`Battery ${batteryStatus.bat.value}% and ${batteryStatus.bat.voltage} Volts`)}`);
}

async function requestButtonBattery(url: string) {
    return requestButtonStatus(url)
}

function extractIpFrom(req: Request) {
    return req.ip.replace(/^::ffff:/, "")
}

/**
 * Prüft, ob die Anwendung loggen soll.
 */
function isLogEnabled() {
    return env.enableLog === "true"
}