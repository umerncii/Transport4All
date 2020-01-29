function loadXMLDoc() {
	var input = document.getElementById("sName").value;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByNameXML_withNumMins?StationDesc="+input+"&NumMins=90", true);
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Traincode</th><th>Origin</th><th>Due In</th><th>Destination</th><th>Exp Arrival</th><th>Direction</th><th>Train Type</th><th>Status</th></tr>";
  var x = xmlDoc.getElementsByTagName("objStationData");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("Traincode")[0].childNodes[0].nodeValue +
	"</td><td>" +x[i].getElementsByTagName("Origin")[0].childNodes[0].nodeValue +
    "</td><td>" +x[i].getElementsByTagName("Duein")[0].childNodes[0].nodeValue +
    "</td><td>" +x[i].getElementsByTagName("Destination")[0].childNodes[0].nodeValue +
    "</td><td>" +x[i].getElementsByTagName("Exparrival")[0].childNodes[0].nodeValue +
    "</td><td>" +x[i].getElementsByTagName("Direction")[0].childNodes[0].nodeValue +
    "</td><td>" +x[i].getElementsByTagName("Traintype")[0].childNodes[0].nodeValue +
    "</td><td>" +x[i].getElementsByTagName("Status")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("code").innerHTML =  x[0].getElementsByTagName("Stationcode")[0].childNodes[0].nodeValue;
  document.getElementById("name").innerHTML =  x[0].getElementsByTagName("Stationfullname")[0].childNodes[0].nodeValue;
  document.getElementById("time").innerHTML =  x[0].getElementsByTagName("Querytime")[0].childNodes[0].nodeValue;
  document.getElementById("demo").innerHTML = table;
}


