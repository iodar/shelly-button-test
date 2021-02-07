import fetch from "node-fetch";

/**
 * Ausschnitt aus Antwort des Shelly Button1 des Endpunkts
 * `/status` die nur den Status der Batterie enthält.
 */
interface ButtonBatteryStatus {
    bat: {
        value: number
        voltage: number
    }
}

/**
 * Sendet eine Anfragen an `/status` des Shelly Button1 dessen IP übergeben
 * wurde.
 * @param ipAddress Ip Adresse des Shelly Button an den die Anfrage geschickt werden soll
 */
export async function requestButtonsBatteryStatus(ipAddress: string): Promise<ButtonBatteryStatus> {
    const statusPath = "/status"
    const response = await request({ipAddress, path: statusPath}) 
    return response.json()
}

interface RequestParams {
    ipAddress: string,
    path: string
}

/**
 * Sends an request to a resource and return the response
 * object.
 * @param RequestOptions request parameters
 */
function request({ipAddress, path}: RequestParams) {
    const fullUrl = `http://${ipAddress}${path}`
    return fetch(fullUrl)
}