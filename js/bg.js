
var data = JSON.parse(true);
//$("#laender").dynatable();


var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
    var json = this.responseText;
    var obj = JSON.parse(json);

    function globalos(id, nr) {
      var temp = obj.data[nr].status_name;
      if (temp === "Offline") {
        $("td").addClass("redRocket");
      }
      else if (temp === "Online") {
        $("td").addClass("greenThumb");
      }
    }



    /*  for (var i = 0; i < 15; i++) {
    var idones = ["tsbot", "ts", "tsmusi", "ttt1", "ttt2", "ttt3", "swrp", "tecsold", "ptp", "ptd", "gmodweb", "tsdns", "darkrp", "mcprox", "mchub", "mctec"];
    idones.forEach(function idnonsense(idone) {
    var ido = "#" + idone;
    document.querySelector(ido).innerHTML =
    obj.data[i].status_name;
    globalos(ido, i);
  })
}
*/


for (var i = 0; i < obj.data.length; i++) {
  let component = obj.data[i];
  let id = obj.data[i];
  let name = obj.data[i].name;
  let stat_name = obj.data[i].status_name;
  //let idTable = document.getElementById('myTable');

  function goodMorningV(stat_name) {

    $( document ).ready(function() {
      if (stat_name === "Offline") {
        alert("The Server " + name + " is Offline");
      }
    });

  }

    let thead = $('<th/>', {
      id: "hid_" + i,
      class: "status_head"
    })

    let tbody = $('<td/>', {
      id: "id_" + i,
      class: "status_body"
    })

    let trow = $('<tr>', {
      id: "root_" + i
    })

    $('#myHead').append($(trow));

    $('#myBody').append($(trow));

    $('#root_' + i).append($(thead));

    $('#root_' + i).append($(tbody));

    $('#hid_' + i).append(name);

    $('#id_' + i).append(stat_name);





//name stat_name
/*

  $('#myTable').append($(thead), $(tbody));

  $('#hid_' + i).append(name);

  $('#id_' + i).append(stat_name);*/







  //idTable.append("<thead id='hid_"+ i +"' class='status_head'>"+ name +"</thead>" + "<tbody id='id_"+ i +"' class='status_body'>"+ stat_name +"</tbody>");

  //$('#myTable').append('<thead id="hid_'+ i +'" class="status_head">'+ name +'</thead>' + '<tbody id="id_'+ i +'" class="status_body">'+ stat_name +'</tbody>');
  //$("<thead id='hid_"+ i +"' class='status_head'>"+ name +"</thead>" + "<tbody id='id_"+ i +"' class='status_body'>"+ stat_name +"</tbody>").after(".table");

  //console.log();
  globalos(id, i);
  goodMorningV(stat_name);
}

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
