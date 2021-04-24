<template>
    <div id="content">
        
    </div>
</template>

<script lang="ts">
export default {
    name: 'Content'
}

class App {
    
    constructor(){
        this.main()
    }

    main(){
        
        let content: Object;
        while (this.uptimeCheck()) {
            content = this.apiRequest()
            
        }
    }

    apiRequest(): Object{
        return new Object();
    }

    uptimeCheck(): boolean{
        let response = false

        return response
    }
}

new App()

</script>
<style scoped>
#content{
    background-color: #59080c;
}
</style>