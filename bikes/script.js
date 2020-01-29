function loadDoc() {
	var input = document.getElementById("sNumber").value;
	
	
	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
	  var x = JSON.parse(this.responseText);
	  console.log(x);
	 
	  document.getElementById("number").innerHTML = x["number"]
	  document.getElementById("name").innerHTML = x["name"]
	  document.getElementById("banking").innerHTML = x["banking"]
	  document.getElementById("status").innerHTML = x["status"]
	  document.getElementById("address").innerHTML = x["address"]
	  document.getElementById("bikes").innerHTML = x["available_bikes"]
	  document.getElementById("stand").innerHTML = x["available_bike_stands"]
	  
		
	}
  };
  xhttp.open("GET", "https://api.jcdecaux.com/vls/v1/stations/"+input+"?contract=dublin&apiKey=71ad3cfc15ee4188cb493ea4977da1dd242e94dd", true);
  xhttp.send();
}