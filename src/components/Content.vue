<template>
    <div id="content">
        
    </div>
</template>

<script lang="ts">

export default {
    name: 'Content'
}

type APIHealth = {
    online: boolean
    services: number
    setup: boolean
}

type APIResponse = {
    avg_response: number
    check_interval: number
    created_at: string
    failures_24_hours: number
    group_id: number
    incidents: []
    last_error: string
    last_success: string
    latency: number
    messages: []
    online_24_hours: number
    online_7_days: number
    order_id: number
    permalink: string
    ping_time: number
    public: boolean
    stats: {
        failures: number
        hits: number
        first_hit: string
    }
    id: number
    name: string
    online: boolean
    status_code: number
    updated_at: string

}

class App {
    
    static host = "https://status.fearnixx.de"
    static path_health = "/health"
    static path_data = "/api/services"
    static container = document.getElementById("content")

    constructor(){
        this.main()
    }

    async main(){

        while ((await this.uptimeCheck()).online) {

            let content = await this.apiRequest()

            content.forEach(data => {
                let item = new HTMLDivElement()
                item.className = "item"
                
                let name = new HTMLTitleElement()
                name.text = data.name;
                name.className = "item_label"

                let status = new HTMLParagraphElement()                
                if (data.online) {
                    status.textContent = "Online"
                    status.className = "item_status_online"
                } else {
                    status.textContent = "Offline: " + data.status_code.toString()
                    status.className = "item_status_offline"
                }

                item.appendChild(name)
                item.appendChild(status)
            });
        }
    }

    async apiRequest(): Promise<Array<APIResponse>>{

        let response = await window.fetch(App.host + App.path_data, {
                                                method: "GET",
                                                mode: 'cors',
                                                cache: 'default',
                                            })
                                .then(result => result.json())
                                .then((r) => {
                                    return r
                                })
        let result: Promise<Array<APIResponse>> = response

        return (await result)
    }

    async uptimeCheck(): Promise<APIHealth>{
        let response = await window.fetch(App.host + App.path_data, {
                                                method: "GET",
                                                mode: 'cors',
                                                cache: 'default',
                                            })
                                .then(result => result.json())
                                .then((r) => {
                                    return r
                                })
        let result: Promise<APIHealth> = response

        return (await result)
    }
}

new App()

</script>
<style scoped>
#content{
    background-color: #59080c;
}
</style>