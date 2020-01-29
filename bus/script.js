function loadDoc() {
  var input = document.getElementById("stopNum").value;
  
  // input will be gathered from the browsers input field... this is the stop number....
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var x = JSON.parse(this.responseText);
      console.log(x);

      //Heading Information
      document.getElementById("stopID").innerHTML = x["stopid"];

      //refreshed time
      document.getElementById("refreshed").innerHTML = x["timestamp"];

      //Stop 0
      document.getElementById("bus0Route").innerHTML = x["results"][0]["route"];
      document.getElementById("bus0Dest").innerHTML =
        x["results"][0]["destination"];
      document.getElementById("bus0Time").innerHTML =
        x["results"][0]["duetime"];

      //Stop 1
      document.getElementById("bus1Route").innerHTML = x["results"][1]["route"];
      document.getElementById("bus1Dest").innerHTML =
        x["results"][1]["destination"];
      document.getElementById("bus1Time").innerHTML =
        x["results"][1]["duetime"];

      //Stop 2
      document.getElementById("bus2Route").innerHTML = x["results"][2]["route"];
      document.getElementById("bus2Dest").innerHTML =
        x["results"][2]["destination"];
      document.getElementById("bus2Time").innerHTML =
        x["results"][2]["duetime"];

      //Stop 3
      document.getElementById("bus3Route").innerHTML = x["results"][3]["route"];
      document.getElementById("bus3Dest").innerHTML =
        x["results"][3]["destination"];
      document.getElementById("bus3Time").innerHTML =
        x["results"][3]["duetime"];
      //Stop 4
      document.getElementById("bus4Route").innerHTML = x["results"][4]["route"];
      document.getElementById("bus4Dest").innerHTML =
        x["results"][4]["destination"];
      document.getElementById("bus4Time").innerHTML =
        x["results"][4]["duetime"];
      //Stop 5
      document.getElementById("bus5Route").innerHTML = x["results"][5]["route"];
      document.getElementById("bus5Dest").innerHTML =
        x["results"][5]["destination"];
      document.getElementById("bus5Time").innerHTML =
        x["results"][5]["duetime"];
		
		
		 document.getElementById("bus6Route").innerHTML = x["results"][6]["route"];
      document.getElementById("bus6Dest").innerHTML =
        x["results"][6]["destination"];
      document.getElementById("bus6Time").innerHTML =
        x["results"][6]["duetime"];
		
		 document.getElementById("bus7Route").innerHTML = x["results"][7]["route"];
      document.getElementById("bus7Dest").innerHTML =
        x["results"][7]["destination"];
      document.getElementById("bus7Time").innerHTML =
        x["results"][7]["duetime"];
    }
  };
  xhttp.open(
    "GET",
    "https://data.smartdublin.ie/cgi-bin/rtpi/realtimebusinformation?stopid=" +
      input +
      "&format=json",
    true
  );

  xhttp.send();
}
