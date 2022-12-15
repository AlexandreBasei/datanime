
document.addEventListener('DOMContentLoaded', function () {

	'use strict';

	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://anime-db.p.rapidapi.com/anime/by-id/1",
		"method": "GET",
		"headers": {
			"X-RapidAPI-Key": "d8c4835dbfmshe28f6af9702c0b2p1441d5jsnaeb2ffc66cfa",
			"X-RapidAPI-Host": "anime-db.p.rapidapi.com"
		}
	};
	
	$.ajax(settings).done(function (response) {
		console.log(response);
	});

	// $.ajax({
	// 	url: 'https://api.anemy.fr/v2/anime/',
	// 	method: "GET",
	// 	data:{
	// 		"like": {
	// 			"saison": "%2018"
	// 		}
	// 	},
    //     headers: { "Content-type": "application/json", "Authorization": "VOTRE_CLÉ" },
	// 	dataType: 'json',
	// 	success: function (res) {
	// 		console.log(res);
	// 	}
		// c = new Chart('notes',
		// 	{
		// 		type: 'bar',
		// 		data: {
		// 			labels: fullname,
		// 			datasets: [{
		// 				label: "salaire annuel",
		// 				data: salary
		// 			}

		// 			]
		// 		},

		// 		options: {
		// 			title: {
		// 				display: true,
		// 				text: 'salaires'
		// 			},
		// 			scales: {
		// 				y: {
		// 					min: 0

		// 				}
		// 			}
		// 		}
		// 	});
		// c.update(); //On met Ã  jour le canvas
	// });  //fin du success
}); // document.addEventListener('DOMContentLoaded', function() {
