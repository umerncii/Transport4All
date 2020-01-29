function car(){
					var directionsService= new google.maps.DirectionsService;
					var directionsDisplay= new google.maps.DirectionsRenderer;
					var map= new google.maps.Map(document.getElementById('map'),{
						zoom:13,
						center:{lat:53.3498, lng:-6.2603}
					
					
					});
					directionsDisplay.setMap(map);
					var onChangeHandler = function(){
						driving(directionsService, directionsDisplay);
					};

					onChangeHandler();
					
}
	function driving(directionsService, directionsDisplay){
						directionsService.route({
							origin: document.getElementById('start').value,
							destination: document.getElementById('end').value,
							travelMode: 'DRIVING'

						}, function (response, status){
								if(status==='OK'){
								directionsDisplay.setDirections(response);
								}
							});
	}



function bus(){
					var directionsService= new google.maps.DirectionsService;
					var directionsDisplay= new google.maps.DirectionsRenderer;
					var map= new google.maps.Map(document.getElementById('map'),{
						zoom:13,
						center:{lat:53.3498, lng:-6.2603}
					
					
					});
					directionsDisplay.setMap(map);
					var onChangeHandler = function(){
						transit(directionsService, directionsDisplay);
					};
					
					onChangeHandler();
					
}
	function transit(directionsService, directionsDisplay){
						directionsService.route({
							origin: document.getElementById('start').value,
							destination: document.getElementById('end').value,
							travelMode: 'TRANSIT'

						}, function (response, status){
								if(status==='OK'){
								directionsDisplay.setDirections(response);
								}
							});
	}
function cycle(){
					var directionsService= new google.maps.DirectionsService;
					var directionsDisplay= new google.maps.DirectionsRenderer;
					var map= new google.maps.Map(document.getElementById('map'),{
						zoom:13,
						center:{lat:53.3498, lng:-6.2603}
					
					
					});
					directionsDisplay.setMap(map);
					var onChangeHandler = function(){
						bicycle (directionsService, directionsDisplay);
					};
					
					onChangeHandler();
					
}
	function bicycle(directionsService, directionsDisplay){
						directionsService.route({
							origin: document.getElementById('start').value,
							destination: document.getElementById('end').value,
							travelMode: 'BICYCLING'

						}, function (response, status){
								if(status==='OK'){
								directionsDisplay.setDirections(response);
								}
							});
	}
	function walk(){
					var directionsService= new google.maps.DirectionsService;
					var directionsDisplay= new google.maps.DirectionsRenderer;
					var map= new google.maps.Map(document.getElementById('map'),{
						zoom:13,
						center:{lat:53.3498, lng:-6.2603}
					
					
					});
					directionsDisplay.setMap(map);
					var onChangeHandler = function(){
						walking (directionsService, directionsDisplay);
					};
					
					onChangeHandler();
					
}
	function walking(directionsService, directionsDisplay){
						directionsService.route({
							origin: document.getElementById('start').value,
							destination: document.getElementById('end').value,
							travelMode: 'WALKING'

						}, function (response, status){
								if(status==='OK'){
								directionsDisplay.setDirections(response);
								}
							});
	}


