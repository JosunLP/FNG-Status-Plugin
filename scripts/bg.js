
var data = JSON.parse(true);

var info = document.getElementById('item');
var stroot = document.getElementById('root');
var stts = document.getElementById('ts');
var stwebsite = document.getElementById('website');
var stmcv = document.getElementById('mcv');
var stmct = document.getElementById('mct');
var stmcm = document.getElementById('mcm');
var stttt1 = document.getElementById('ttt1');
var stttt2 = document.getElementById('ttt2');
var stttt3 = document.getElementById('ttt3');


var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
    var json = this.responseText;

    stroot.innerHTML = "Status1";
    stts.innerHTML = "Status2";
    stwebsite.innerHTML = "Status3";
    stmcv.innerHTML = "Status4";
    stmct.innerHTML = "Status5";
    stmcm.innerHTML = "Status6";
    stttt1.innerHTML = "Status7";
    stttt2.innerHTML = "Status8";
    stttt3.innerHTML = "Status9";
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
