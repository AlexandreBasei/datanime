
document.addEventListener('DOMContentLoaded', function () {

	'use strict';
// FEUR
	var page = 1;


	$("#Troisieme").click(function () {

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

	$("#Deuxieme").click(function () {

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

	$("#Premier").click(function () {

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

		const ranking = [];
		const labels = [];

		response['data'].forEach(element => {
			ranking.push(element['ranking']);
		});

		response['data'].forEach(element => {
			labels.push(element['title']);
		});

		const chart = new Chart(Graphe1, {
			type: 'bar',
			data: {
				labels: labels,
				datasets: [
					{
						label: 'Rang',
						data: ranking,
						backgroundColor: "#a2d2ff",
						// borderColor: 'white',
						borderWidth: 1,
						color: 'white',
					},
				],
			},
			options: {
				// indexAxis: 'y',
				legend: {
					labels: {
						color: 'white',
					}
				},
				scales: {
					xAxes: [{
						reverse: true,
						ticks: [{
							color: 'white',
							reverse: true
						}],
						grid: {
							color: 'whitesmoke',
							borderColor: 'whitesmoke'
						}
					}],
					y: {
						min: 0,
						ticks: {
							color: 'white'
						},
						grid: {
							color: 'whitesmoke',
							borderColor: 'whitesmoke'
						}
					},
				},
			},
		});
		chart.update();
	});

	const gaction = {
		"async": true,
		"crossDomain": true,
		"url": "https://anime-db.p.rapidapi.com/anime?page=1&size=10000&genres=Action",
		"method": "GET",
		"headers": {
			"X-RapidAPI-Key": "d8c4835dbfmshe28f6af9702c0b2p1441d5jsnaeb2ffc66cfa",
			"X-RapidAPI-Host": "anime-db.p.rapidapi.com"
		}
	};

	const gsuspense = {
		"async": true,
		"crossDomain": true,
		"url": "https://anime-db.p.rapidapi.com/anime?page=1&size=10000&genres=Fantasy",
		"method": "GET",
		"headers": {
			"X-RapidAPI-Key": "d8c4835dbfmshe28f6af9702c0b2p1441d5jsnaeb2ffc66cfa",
			"X-RapidAPI-Host": "anime-db.p.rapidapi.com"
		}
	};

	const nombre = [];
	var action = 0;
	const genre = ["Action","Suspense","Horreur","Sport","Surnaturel","Fantasy","Drama","Comédie","Mystère","Tranche de vie","Aventure","Romance","Sci-Fi"];
	
	$.ajax(gaction).done(function (response) {
		console.log(response);

		response['data'].forEach(element => {
			action++;
		});

		const chart2 = new Chart(Graphe2, {
			type: 'radar',
			data: {
				labels: genre,
				datasets: [
					{
						label: 'Nombre',
						data: nombre.length,
						backgroundColor: "#a2d2ff",
						// borderColor: 'white',
						borderWidth: 1,
						color: 'white',
					},
				],
			},
			options: {
				// indexAxis: 'y',
				legend: {
					labels: {
						color: 'white',
					}
				},
				scales: {
					xAxes: [{
						reverse: true,
						ticks: [{
							color: 'white',
							reverse: true
						}],
						grid: {
							color: 'whitesmoke',
							borderColor: 'whitesmoke'
						}
					}],
					y: {
						min: 0,
						ticks: {
							color: 'white'
						},
						grid: {
							color: 'whitesmoke',
							borderColor: 'whitesmoke'
						}
					},
				},
			},
		});
		chart2.update();
	});
});