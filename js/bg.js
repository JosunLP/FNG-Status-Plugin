
var data = JSON.parse(true);



var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
    var json = this.responseText;
    var obj = JSON.parse(json);

    function rocked(id, nr) {
      var temp = obj.data[nr].status_name;
       if (temp != "Online") {
         $("td:first").addClass("redRocket");
       }
    }

    function thumb(id, nr) {
      var temp = obj.data[nr].status_name;
       if (temp === "Online") {
         $("td:first").addClass("greenThumb");
       }
    }

    function globalos(id, nr) {
      rocked(id, nr);
      thumb(id, nr);
    }


    for (var i = 0; i < 15; i++) {
      if (obj.data[i].id === i + 1) {
        var idones = ["tsbot", "ts", "tsmusi", "ttt1", "ttt2", "ttt3", "swrp", "tecsold", "ptp", "ptd", "gmodweb", "tsdns", "darkrp", "mcprox", "mchub", "mctec"];
        idones.forEach(function idnonsense(idone) {
          var ido = "#" + idone;
          document.querySelector(ido).innerHTML =
           obj.data[i].status_name;
           globalos(ido, i);
        })
      }
    }
    /*


    if (obj.data[0].id === 1) {
      document.querySelector("#tsbot").innerHTML =
       obj.data[0].status_name;
       globalos("tsbot", 0);
    }

    if (obj.data[1].id === 2) {
      document.querySelector("#ts").innerHTML =
       obj.data[1].status_name;
       globalos("ts", 1);
    }

    if (obj.data[2].id === 3) {
      document.querySelector("#tsmusi").innerHTML =
       obj.data[2].status_name;
       globalos("tsmusi", 2);
    }

    if (obj.data[3].id === 4) {
      document.querySelector("#ttt1").innerHTML =
       obj.data[3].status_name;
       globalos("ttt1", 3);
    }

    if (obj.data[4].id === 5) {
      document.querySelector("#ttt2").innerHTML =
       obj.data[4].status_name;
       globalos("ttt2", 4);
    }

    if (obj.data[5].id === 6) {
      document.querySelector("#ttt3").innerHTML =
       obj.data[5].status_name;
       globalos("ttt3", 5);
    }

    if (obj.data[6].id === 9) {
      document.querySelector("#swrp").innerHTML =
       obj.data[6].status_name;
       globalos("swrp", 6);
    }

    if (obj.data[7].id === 10) {
      document.querySelector("#tecsold").innerHTML =
       obj.data[7].status_name;
       globalos("tecsold", 7);
    }

    if (obj.data[8].id === 11) {
      document.querySelector("#ptp").innerHTML =
        obj.data[8].status_name;
        globalos("ptp", 8);
    }

    if (obj.data[9].id === 12) {
      document.querySelector("#ptd").innerHTML =
       obj.data[9].status_name;
       globalos("ptd", 9);
    }

    if (obj.data[10].id === 13) {
      document.querySelector("#gmodweb").innerHTML =
       obj.data[10].status_name;
       globalos("gmodweb", 10);
    }

    if (obj.data[11].id === 14) {
      document.querySelector("#tsdns").innerHTML =
       obj.data[11].status_name;
       globalos("tsdns", 11);
    }

    if (obj.data[12].id === 15) {
      document.querySelector("#darkrp").innerHTML =
       obj.data[12].status_name;
       globalos("darkrp", 12);
    }

    if (obj.data[13].id === 16) {
      document.querySelector("#mcprox").innerHTML =
       obj.data[13].status_name;
       globalos("mcprox", 13);
    }

    if (obj.data[14].id === 17) {
      document.querySelector("#mchub").innerHTML =
       obj.data[14].status_name;
       globalos("mchub", 14);
    }

    if (obj.data[15].id === 18) {
      document.querySelector("#mctec").innerHTML =
       obj.data[15].status_name;
       globalos("mctec", 15);
    }

*/




    //if (data.data[0].id === 1 && data.data[0].status === 1) {
      //document.querySelector("#ts").innerHTML =
        //stroot.innerHTML = "Online";
    //}


  }
});



xhr.open("GET", "https://status.fearnixx.de/api/v1/components?sort=status=desc");

xhr.send(data);






//https://fearnixx.de/status/public/api/v1/components?sort=status=asc



//       ____.               __   _________ __                _______                              .__
//      |    |__ __  _______/  |_/   _____//  |______  ___.__.\      \   ___________  _____ _____  |  |
//      |    |  |  \/  ___/\   __\_____  \\   __\__  \<   |  |/   |   \ /  _ \_  __ \/     \\__  \ |  |
//  /\__|    |  |  /\___ \  |  | /        \|  |  / __ \\___  /    |    (  <_> )  | \/  Y Y  \/ __ \|  |__
//  \________|____//____  > |__|/_______  /|__| (____  / ____\____|__  /\____/|__|  |__|_|  (____  /____/
//                      \/              \/           \/\/            \/                   \/     \/
