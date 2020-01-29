function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  var input = document.getElementById("sName").value;
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	   var x = this.responseText;
    <!-- document.getElementById("demo").innerHTML = x;-->
	
parser = new DOMParser();
 var xmlDoc = parser.parseFromString(x,"text/html");
 var table=xmlDoc.getElementsByTagName("table");
 
 var tr=xmlDoc.getElementsByTagName("tr");
 var tex="<tr><th>Direction</th><th>Destination</th><th>Due In</th><th>Tram No</th></tr>";

 //console.log(tr.length);
 if(tr.length>=2){
 for (var j = 1; j <tr.length; j++) {
  tex += "<tr><td>" +
  table[0]["children"][0]["children"][j]["children"][0]["innerText"]+
  "</td><td>"+table[0]["children"][0]["children"][j]["children"][1]["innerText"]+
  "</td><td>"+table[0]["children"][0]["children"][j]["children"][2]["innerText"]+" mins"+
  "</td><td>"+table[0]["children"][0]["children"][j]["children"][4]["innerText"]+
    "</td></tr>";
}

document.getElementById("demo").innerHTML = tex;
document.getElementById("code").innerHTML =  input;
  
 
  var time=table[0]["children"][0]["children"][1]["children"][8]["innerText"];
  console.log(time)
  document.getElementById("time").innerHTML = time ;
}

else{
document.getElementById("demo").innerHTML = "Service not available";
}
 console.log(tex.length);

    }
  };
  
  xhttp.open("GET", "http://luasforecasts.rpa.ie/analysis/view.aspx?id="+input+"", true);
  xhttp.send();
}

