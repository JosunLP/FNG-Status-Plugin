import { APIHealth } from './types/APIHealth'
import { APIResponse } from './types/APIResponse'

class App {

    static host = "https://corsify.de/API.php?apiMode=feed&feedMode=api&dataUrl=https://status.fearnixx.de"
    static path_health = "/health"
    static path_data = "/api/services"
    static container = document.getElementById("content")
    private isOnline: boolean = true;

    constructor() {
        this.uptimeCheck();
        this.main()
    }

    async main(): Promise<void> {

        while (this.isOnline) {

            await this.drawData()
            await this.uptimeCheck();
        }
    }

    async drawData(): Promise<void> {

        await fetch(App.host + App.path_data, {
            method: "GET",
            mode: 'cors',
            cache: 'default',
        })
            .then(r => r.json())
            .then((r: Array<APIResponse>) => {

                const content = <HTMLDivElement>document.getElementById('content')
                const table = <HTMLTableElement>document.createElement('table')
                const tableHead = document.createElement("thead")
                const tableBody = document.createElement("tbody")
                const tableHeadRow = document.createElement("tr")
                const appName = document.createElement("th")
                const appStatus = document.createElement("th")
                const lastEvent = document.createElement("th")

                table.className = "table"
                appName.innerText = "Anwendung"
                appStatus.innerText = "Status"
                lastEvent.innerText = "Letzter Fehler"
                tableHeadRow.appendChild(appName)
                tableHeadRow.appendChild(appStatus)
                tableHeadRow.appendChild(lastEvent)
                tableHead.appendChild(tableHeadRow)
                table.appendChild(tableHead)
                table.appendChild(tableBody)

                content.innerHTML = ""
                content.append(table)

                r.forEach(data => {
                    const row = document.createElement("tr")

                    const link = document.createElement("a")
                    link.href = "https://status.fearnixx.de/service/" + data.permalink
                    link.target = "_blank"
                    link.innerText = data.name

                    const name = document.createElement("td")
                    name.appendChild(link)

                    const status = document.createElement("td")
                    if (data.online) {
                        status.innerText = "Online"
                        status.className = "item_status_online"
                        row.classList.add("bg-success")
                    } else {
                        status.innerText = "Offline: " + data.status_code.toString()
                        status.className = "item_status_offline"
                        row.classList.add("bg-danger")
                    }

                    const event = document.createElement("td")
                    const date = new Date(data.last_error)
                    const dateStamp = date.getDay() + "." +
                        date.getMonth() + "." +
                        date.getFullYear()
                    if (dateStamp !== "1.0.1") {
                        event.innerText = dateStamp
                    } else {
                        event.innerText = "-"
                    }

                    row.appendChild(name)
                    row.appendChild(status)
                    row.appendChild(event)
                    tableBody.appendChild(row)
                });
            })
            .catch((e) => {
                this.isOnline = false
                console.log(e);
            })
    }

    async uptimeCheck(): Promise<void> {
        await fetch(App.host + App.path_health, {
            method: "GET",
            mode: 'cors',
            cache: 'default',
        })
            .then(r => r.json())
            .then((r: APIHealth) => {
                this.isOnline = r.online
            })
            .catch((e) => {
                this.isOnline = false
                console.log(e);
            })
    }
}

new App();