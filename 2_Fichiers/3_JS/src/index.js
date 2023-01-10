
document.addEventListener('DOMContentLoaded', function () {

	'use strict';

	var page = 1;


	$("#btn3").click(function () {

		if (page == 2) {
			// $("#section2").show();
			$("#section2").addClass('gauche');
			$("#section2").removeClass('centre');
			$("#section3").addClass('centre');
			$("#section3").removeClass('droite');
			window.scrollTo(0, 0);
			page = 3;
		}

		if (page == 1) {
			$("#section1").addClass('gauche');
			$("#section1").removeClass('centre');
			$("#section3").addClass('centre');
			$("#section3").removeClass('droite');
			$("#section2").hide();
			$("#section2").addClass('gauche');
			$("#section2").removeClass('droite');
			window.scrollTo(0, 0);
			page = 3;
		}

	});

	$("#btn2").click(function () {

		if (page == 3) {
			$("#section2").show();
			$("#section3").removeClass('centre');
			$("#section3").addClass('droite');
			$("#section2").addClass('centre');
			$("#section2").removeClass('gauche');
			window.scrollTo(0, 0);
			page = 2;
		}

		if (page == 1) {
			$("#section2").show();
			$("#section2").addClass('centre');
			$("#section2").removeClass('droite');
			$("#section2").removeClass('gauche');
			$("#section1").addClass('gauche');
			$("#section1").removeClass('centre');
			window.scrollTo(0, 0);
			page = 2;
		}

	});

	$("#btn1").click(function () {

		if (page == 3) {
			$("#section3").addClass('droite');
			$("#section3").removeClass('centre');
			$("#section2").hide();
			$("#section2").addClass('droite');
			$("#section2").removeClass('gauche');
			$("#section1").addClass('centre');
			$("#section1").removeClass('gauche');
			window.scrollTo(0, 0);
			page = 1;
		}

		if (page == 2) {
			$("#section2").show();
			$("#section2").addClass('droite');
			$("#section2").removeClass('centre');
			$("#section1").addClass('centre');
			$("#section1").removeClass('gauche');
			window.scrollTo(0, 0);
			page = 1;
		}
	});

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

	// $.ajax(settings).done(function (response) {
	// 	console.log(response);
	// });

	const settings2 = {
		"async": true,
		"crossDomain": true,
		"url": "https://anime-db.p.rapidapi.com/genre",
		"method": "GET",
		"headers": {
			"X-RapidAPI-Key": "d8c4835dbfmshe28f6af9702c0b2p1441d5jsnaeb2ffc66cfa",
			"X-RapidAPI-Host": "anime-db.p.rapidapi.com"
		}
	};

	// $.ajax(settings2).done(function (response) {
	// 	console.log(response);
	// });

	const settings3 = {
		"async": true,
		"crossDomain": true,
		"url": "https://anime-db.p.rapidapi.com/anime/by-ranking/6",
		"method": "GET",
		"headers": {
			"X-RapidAPI-Key": "d8c4835dbfmshe28f6af9702c0b2p1441d5jsnaeb2ffc66cfa",
			"X-RapidAPI-Host": "anime-db.p.rapidapi.com"
		}
	};

	// $.ajax(settings3).done(function (response) {
	// 	console.log(response);
	// 	var titres = response['title'];
	// 	var 

	// 	const c = new Chart('Graphe1',
	// 		{
	// 			type: 'bar',
	// 			data: {
	// 				labels: fullname,
	// 				datasets: [{
	// 					label: "salaire annuel",
	// 					data: 
	// 				}

	// 				]
	// 			},

	// 			options: {
	// 				title: {
	// 					display: true,
	// 					text: 'salaires'
	// 				},
	// 				scales: {
	// 					y: {
	// 						min: 0

	// 					}
	// 				}
	// 			}
	// 		});
	// 	c.update(); //On met Ã  jour le canvas

	// });

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

	const settings1 = {
		"async": true,
		"crossDomain": true,
		// "url": "https://anime-db.p.rapidapi.com/anime?page=1&size=10",
		"url": "https://anime-db.p.rapidapi.com/anime?page=1&size=10&genres=Fantasy&sortBy=ranking",
		"method": "GET",
		"headers": {
			"X-RapidAPI-Key": "d8c4835dbfmshe28f6af9702c0b2p1441d5jsnaeb2ffc66cfa",
			"X-RapidAPI-Host": "anime-db.p.rapidapi.com"
		}
	};

	$.ajax(settings1).done(function (response) {
		console.log(response);

		const canva1 = $("#Graphe1");
		const ranking = [];
		const labels = [];
		const images = [];

		response['data'].forEach(element => {
			ranking.push(element['ranking']);
		});

		response['data'].forEach(element => {
			labels.push(element['title']);
		});

		response['data'].forEach(element => {
			images.push(element['image']);
		});

		const chart = new Chart(canva1, {
			type: 'bar',
			data: {
				labels: labels,
				datasets: [
					{
						label: 'Rang',
						data: ranking,
						backgroundColor: "url("+images[0]+")",
						borderColor: 'rgba(255, 99, 132, 1)',
						borderWidth: 1,
						color: 'white',
					},
				],
			},
			options: {
				legend: {
					labels: {
						color: 'white'
					}
				},
				scales: {
					x: {
						ticks: {
							color: 'white'
						}
					},
					y: {
						ticks: {
							color: 'white'
						}
					},
				},
			},
		});
		chart.update();


		// 	c = new Chart('notes',
		// 		{
		// 			type: 'bar',
		// 			data: {
		// 				labels: ,
		// 				datasets: [{
		// 					label: "salaire annuel",
		// 					data: salary
		// 				}

		// 				]
		// 			},

		// 			options: {
		// 				title: {
		// 					display: true,
		// 					text: 'salaires'
		// 				},
		// 				scales: {
		// 					y: {
		// 						min: 0

		// 					}
		// 				}
		// 			}
		// 		});
		// 	c.update(); //On met Ã  jour le canvas
		// });  //fin du success
	});
}); // document.addEventListener('DOMContentLoaded', function() {