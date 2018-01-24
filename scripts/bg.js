function getDataInfos() {
  var data = JSON.stringify(false);

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
      //window.alert(this.responseText);
    }
  });


  xhr.open("GET", "https://fearnixx.de/status/public/api/v1/components?sort=status&order=desc");

  xhr.send(data);
}

getDataInfos();


function postState() {

  //var type ids
  var stroot = document.getElementById('root');
  var stts = document.getElementById('ts');
  var stgame = document.getElementById('game');
  var stwebsite = document.getElementById('website');

  //var type infos
  //var clroot = ;
  //var clts = ;
  //var clgame = ;
  //var clwebsite = ;


  console.log(stroot.innerHTML, stts.innerHTML, stgame.innerHTML, stwebsite.innerHTML);

  if (this.readyState === this.DONE) {
    stroot.innerHTML = "Test1";
    stts.innerHTML = "Test2";
    stgame.innerHTML = "Test3";
    stwebsite.innerHTML = "Test4";
  }
}


postState();

//https://fearnixx.de/status/public/api/v1/components?sort=status=asc



//       ____.               __   _________ __                _______                              .__
//      |    |__ __  _______/  |_/   _____//  |______  ___.__.\      \   ___________  _____ _____  |  |
//      |    |  |  \/  ___/\   __\_____  \\   __\__  \<   |  |/   |   \ /  _ \_  __ \/     \\__  \ |  |
//  /\__|    |  |  /\___ \  |  | /        \|  |  / __ \\___  /    |    (  <_> )  | \/  Y Y  \/ __ \|  |__
//  \________|____//____  > |__|/_______  /|__| (____  / ____\____|__  /\____/|__|  |__|_|  (____  /____/
//                      \/              \/           \/\/            \/                   \/     \/
