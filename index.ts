import express, { Request, Response } from "express"
import env from "./env"

// Erzeugt eine Express Server Applikation (Web Server)
const server = express()

// Server starten, hört auf Port 3000 und erzeugt Lognachricht, wenn der Server gestartet ist
server.listen(env.server.port, () => console.log(`Server started and listening to port ${env.server.port}`))


//
// --- WEB HANDLER handling Requests to this server ----
//

// Verarbeitet GET Anfragen an den REST-Endpunkt `/button/short/1`
server.get("/button/short/1", (_: Request, res: Response) => {
    handleRequestSendMessageAndLog(res, "short url 1")
})

// Verarbeitet GET Anfragen an den REST-Endpunkt `/button/short/2`
server.get("/button/short/2", (_: Request, res: Response) => {
    handleRequestSendMessageAndLog(res, "short url 2")
})

// Verarbeitet GET Anfragen an den REST-Endpunkt `/button/short/3`
server.get("/button/short/3", (_: Request, res: Response) => {
    handleRequestSendMessageAndLog(res, "short url 3")
})

// Verarbeitet GET Anfragen an den REST-Endpunkt `/button/long/1`
server.get("/button/long/1", (_: Request, res: Response) => {
    handleRequestSendMessageAndLog(res, "long url 1")
})

/**
 * Erzeugt eine Nachricht mit Hilfe des Express Antwort-Objekts und
 * sendet diese zurück an den Aufrufer. 
 * @param res Antwort Objekt des Express Webserver
 * @param urlName Name der URL, die in der Antwort angezeigt wird
 */
function handleRequestSendMessageAndLog(res: Response, urlName: string) {
    const message = `'${urlName}' was called`
    if (isLogEnabled()) {
        console.log(`SERVER: ${message}`)
    }
    res.status(200).json({ message })
}

function isLogEnabled() {
    return env.enableLog === "true"
}