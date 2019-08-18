 
 function requestApi(){
 	$.ajax
			(
				{
					type: 'GET',

					url: 'data/phps/list persons.php',

					dataType: 'json',

					success: function ( _personResponse ) 
					{
						var tableBody = $("#participantListBody");

						$.each(_personResponse, function() {

							var eachPersonResponseName = this.personName;
							var eachPersonResponsePersonId = this.personId;
							var eachPersonResponseLocation = this.personLocation;
							var eachPersonResponseAge = this.personAge;
							var eachPersonResponseStatus = this.personStatus;
							
							$.ajax
							(
								{
									type: 'GET',

									url: 'data/phps/list monitor data.php',

									dataType: 'json',

									success: function ( monitorResponse ) 
									{
										$.each(monitorResponse, function() {
											if(this.personId == eachPersonResponsePersonId)
											{
												tableBody.append('<tr>');
												tableBody.append($("<td/ style = 'text-align:left;'>").val(eachPersonResponseName).text(eachPersonResponseName));
												tableBody.append($("<td/ style = 'text-align:left; padding:15px;'>").val(eachPersonResponsePersonId).text(eachPersonResponsePersonId));
												tableBody.append($("<td/ style = 'text-align:left; padding:15px;'>").val(eachPersonResponseLocation).text(eachPersonResponseLocation));
												tableBody.append($("<td/ style = 'text-align:left; padding:15px;'>").val(eachPersonResponseAge).text(eachPersonResponseAge));
												tableBody.append($("<td/ style = 'text-align:left; padding:15px;'>").val(eachPersonResponseStatus).text(eachPersonResponseStatus));
												tableBody.append($("<td/ style = 'text-align:left; padding:15px;'>").val(this.assignedEmtId).text(this.assignedEmtId));
												
												tableBody.append('</tr>');
											}
										});	
									},
									error: function (data) 
									{
									}
								}
							);	
						});
					},
					error: function (data) 
					{
					}
				}
			);			

			/////////////////
			//loads emts
			$.ajax
			(
				{
					type: 'GET',

					url: 'data/phps/list emts.php',

					dataType: 'json',

					success: function ( response ) 
					{
						var tableBody = $("#emtListBody");
						
						$.each(response, function() {
							tableBody.append('<tr>');
							tableBody.append($("<td/ style = 'text-align:left;'>").val(this.emtName).text(this.emtName));
							tableBody.append($("<td/ style = 'text-align:left; padding:15px;'>").val(this.emtId).text(this.emtId));
							tableBody.append($("<td/ style = 'text-align:left; padding:15px;'>").val(this.emtLocation).text(this.emtLocation));
							tableBody.append($("<td/ style = 'text-align:left; padding:15px;'>").val(this.emtStatus).text(this.emtStatus));
							
							tableBody.append('</tr>');
						});	
					},
					error: function (data) 
					{
					}
				}
			);
		
 
 }


requestApi();
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
function showPosition(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  map.setCenter(new google.maps.LatLng(lat, lng));

}

getLocation();

 