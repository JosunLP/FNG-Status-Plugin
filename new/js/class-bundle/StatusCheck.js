class StatusCheck {
     callServerStatus(mode) {
         let data = JSON.parse(true);
         let xhr = new XMLHttpRequest();
         while (mode === true) {
             xhr.withCredentials = true;

             xhr.addEventListener("readystatechange", function () {
                 if (this.readyState === this.DONE) {
                     let obj = JSON.parse(json);
                 }
             });

             xhr.open("GET", "https://status.fearnixx.de/api/v1/components?sort=status=desc");

             xhr.send(data);
         }


    }
}

export  {StatusCheck};