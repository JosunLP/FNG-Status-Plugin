
var data = JSON.parse(true);



var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
    var json = this.responseText;
    var obj = JSON.parse(json);

    if (obj.data[0].id == 1) {
      document.querySelector("#tsbot").innerHTML =
       obj.data[0].status_name;
    }

    if (obj.data[1].id == 2) {
      document.querySelector("#ts").innerHTML =
       obj.data[1].status_name;
    }

    if (obj.data[2].id == 3) {
      document.querySelector("#tsmusi").innerHTML =
       obj.data[2].status_name;
    }

    if (obj.data[3].id == 4) {
      document.querySelector("#ttt1").innerHTML =
       obj.data[3].status_name;
    }

    if (obj.data[4].id == 5) {
      document.querySelector("#ttt2").innerHTML =
       obj.data[4].status_name;
    }

    if (obj.data[5].id == 6) {
      document.querySelector("#ttt3").innerHTML =
       obj.data[5].status_name;
    }






    //if (data.data[0].id == 1 && data.data[0].status == 1) {
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
