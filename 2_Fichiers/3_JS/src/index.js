
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
			$("body").addClass('troisieme');
			$("body").removeClass('deuxieme');
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
			$("body").addClass('troisieme');
			$("body").removeClass('premier');
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
			$("body").addClass('deuxieme');
			$("body").removeClass('troisieme');
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
			$("body").addClass('deuxieme');
			$("body").removeClass('premier');
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
			$("body").addClass('premier');
			$("body").removeClass('troisieme');
			window.scrollTo(0, 0);
			page = 1;
		}

		if (page == 2) {
			$("#section2").show();
			$("#section2").addClass('droite');
			$("#section2").removeClass('centre');
			$("#section1").addClass('centre');
			$("#section1").removeClass('gauche');
			$("body").addClass('premier');
			$("body").removeClass('deuxieme');
			window.scrollTo(0, 0);
			page = 1;
		}
	});

	function graphe1(url) {

		const settings1 = {
			"async": true,
			"crossDomain": true,
			// "url": "https://anime-db.p.rapidapi.com/anime?page=1&size=10",
			"url": "https://anime-db.p.rapidapi.com/anime?page=1&size=10&genres=" + url + "&sortBy=ranking",
			"method": "GET",
			"headers": {
				"X-RapidAPI-Key": "d8c4835dbfmshe28f6af9702c0b2p1441d5jsnaeb2ffc66cfa",
				// "X-RapidAPI-Key": "413494542fmsh37e255b3fc7392cp19f59ejsn92264c7d882c",
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

			var chart = new Chart(Graphe1, {
				type: 'bar',
				data: {
					labels: labels,
					color: 'white',
					datasets: [
						{
							label: 'Rang',
							data: ranking,
							backgroundColor: ["#a2d2ff", "red", "green", "gold", "purple", "hotpink", "brown", "blue", "orange", "blueviolet"],
							borderWidth: 0,
							borderRadius: 20,
							color: 'white',
						},
					],
				},
				options: {
					indexAxes: 'y',
					legend: {
						display: false,
					},
					scales: {
						x: {
							ticks: [{
								color: 'white',

							}],
							grid: {
								color: 'whitesmoke',
								borderColor: 'whitesmoke'
							}
						},
						y: {
							// beginAtZero: true,
							// reverse: true,
							ticks: {
								color: 'white',
								reverse: true,
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
	}

	const select = document.getElementById('genre');
	var Opgenre = select.value;
	var url = '';


	$("#genre").on("change", function () {
		Opgenre = select.value;

		if (Opgenre == 'Action') {
			url = 'Action';
		}
		if (Opgenre == 'Suspense') {
			url = 'Suspense';
		}
		if (Opgenre == 'Horror') {
			url = 'Horror';
		}
		if (Opgenre == 'Sports') {
			url = 'Sports';
		}
		if (Opgenre == 'Supernatural') {
			url = 'Supernatural';
		}
		if (Opgenre == 'Fantasy') {
			url = 'Fantasy';
		}
		if (Opgenre == 'Drama') {
			url = 'Drama';
		}
		if (Opgenre == 'Comedy') {
			url = 'Comedy';
		}
		if (Opgenre == 'Mystery') {
			url = 'Mystery';
		}
		if (Opgenre == 'Slice of Life') {
			url = 'Slice%20of%20Life';
		}
		if (Opgenre == 'Adventure') {
			url = 'Adventure';
		}
		if (Opgenre == 'Romance') {
			url = 'Romance';
		}
		if (Opgenre == 'Sci-Fi') {
			url = 'Sci-Fi';
		}
		if (Opgenre == 'Fantasy') {
			url = 'Fantasy';
		}

		graphe1(url);
		console.log(url);
	})

	const settings2 = {
		"async": true,
		"crossDomain": true,
		"url": "https://anime-db.p.rapidapi.com/anime?page=1&size=30000",
		"method": "GET",
		"headers": {
			"X-RapidAPI-Key": "d8c4835dbfmshe28f6af9702c0b2p1441d5jsnaeb2ffc66cfa",
			// "X-RapidAPI-Key": "413494542fmsh37e255b3fc7392cp19f59ejsn92264c7d882c",
			"X-RapidAPI-Host": "anime-db.p.rapidapi.com"
		}
	};

	var action = 0;
	var suspense = 0;
	var horreur = 0;
	var sport = 0;
	var surnaturel = 0;
	var fantasy = 0;
	var drama = 0;
	var comedie = 0;
	var mystere = 0;
	var tranche = 0;
	var aventure = 0;
	var romance = 0;
	var science = 0;

	const genre = ["Action", "Suspense", "Horreur", "Sports", "Surnaturel", "Fantasy", "Drame", "Comédie", "Mystère", "Tranche de vie", "Aventure", "Romance", "Sci-Fi"];

	$.ajax(settings2).done(function (response) {
		// console.log(response);

		try {
			response['data'].forEach(element => {
				// console.log(element);
				element['genres'].forEach(element2 => {
					// console.log(element2);

					if (element2 == 'Action') {
						action++;
					}
					if (element2 == 'Suspense') {
						suspense++;
					}
					if (element2 == 'Horror') {
						horreur++;
					}
					if (element2 == 'Sports') {
						sport++;
					}
					if (element2 == 'Supernatural') {
						surnaturel++;
					}
					if (element2 == 'Fantasy') {
						fantasy++;
					}
					if (element2 == 'Drama') {
						drama++;
					}
					if (element2 == 'Comedy') {
						comedie++;
					}
					if (element2 == 'Mystery') {
						mystere++;
					}
					if (element2 == 'Slice of Life') {
						tranche++;
					}
					if (element2 == 'Adventure') {
						aventure++;
					}
					if (element2 == 'Romance') {
						romance++;
					}
					if (element2 == 'Sci-Fi') {
						science++;
					}
				});
			});
		}

		catch (error) {
		}

		var chart2 = new Chart(Graphe2, {
			type: 'pie',
			// type: 'doughnut',
			data: {
				labels: genre,
				datasets: [
					{
						label: genre,
						data: [action, suspense, horreur, sport, surnaturel, fantasy, drama, comedie, mystere, tranche, aventure, romance, science],
						backgroundColor: ['red', 'green', 'blue', 'gold', 'purple', 'pink', 'blueviolet', 'chocolate', 'brown', 'orange', 'yellow', 'silver', 'hotpink'],
						// borderColor: 'white',
						borderWidth: 1,
						color: 'white',
					},
				],
			},
			options: {
				// indexAxis: 'y',
				elements: {
					arc: {
						borderWidth: 2,
						borderColor: 'white',
						borderSkipped: 'bottom',
						// borderRadius: 10,
					}
				},
				legend: {
					labels: {
						color: 'white',
					}
				},
				scales: {
					x: {
						ticks: [{
							color: 'white',
						}],
					},
				},
			},
		});
		chart2.update();
	});

	var chart3 = new Chart(Graphe3, {
		type: 'radar',
		data: {
			labels: ["Action", "Suspense", "Horreur", "Sports", "Surnaturel", "Fantasy", "Drame", "Comédie", "Mystère", "Tranche de vie", "Aventure", "Romance", "Sci-Fi"],
			datasets: [{
				label: 'Note moyenne ',
				data: [65, 59, 90, 81, 56, 55, 40, 56, 12, 60, 82, 57, 48],
				fill: true,
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgb(255, 99, 132)',
				pointBackgroundColor: ['rgb(255, 99, 132)','blue','yellow','green','gold','silver','purple','cyan','orange','blueviolet','hotpink','bisque','brown'],
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgb(255, 99, 132)',
			}]
		},
		options: {
			color: 'white',
			scales: {
				r: {
					angleLines: {
						color: 'CadetBlue'
					},
					grid: {
						color: 'CadetBlue',
						opacity: 0.5
					},
					ticks: {
						color: 'white',
						backdropColor: 'transparent'
						// display: false
					},
					pointLabels: {
						color: 'white'
					}
				},
				y: {
					ticks: {
						display: false
					}
				},
			},
			elements: {
				line: {
					borderWidth: 3,
				}
			},
			plugins: {
				labels: {
					color: 'white'
				}
			}
		},
	});
	chart3.update();
});