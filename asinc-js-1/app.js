'use strict'

let p = document.createElement('p');
let wrapper = document.querySelector('.wrapper');

wrapper.appendChild(p);

// p.textContent = 'Bla, bla, bla';
// alert('Attention!');
setTimeout(() => {
	p.textContent = 'Bla, bla, bla';
}, 3000);

p.textContent = "hu, hu"
p.style.color = 'red';

console.log([1, 2, 3].map(n => n / 3));

const imgDiv = document.querySelector('#cat');
const imgCat = document.createElement('img')
imgCat.src = 'cat.jpg';
imgDiv.appendChild(imgCat);
imgCat.addEventListener('load', function () {
	imgCat.classList.add('fadeId');
});
imgCat.style.width = '200px';
imgCat.style.height = '200px';

// const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// const getCountryData = function (countryName) {

// 	const request = new XMLHttpRequest();
// 	request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
// 	request.send();
// 	request.addEventListener('load', function () {
// 		// console.log(this.responseText);
// 		const [data] = JSON.parse(this.responseText);
// 		console.log(data);

// 		const currencies = data.currencies;
// 		const currenciesName = Object.values(currencies)[0].name;
// 		const currenciesSymbol = Object.values(currencies)[0].symbol;
// 		const languages = data.languages;
// 		const firstLanguages = Object.values(languages)[0];

// 		const html = `
// <article class='country'>
// <img class='country__img' src='${data.flags.svg}'/>
// <div class="country__data">
// <h3 class="country__name">${data.name.common}</h3>
// <h4 class="country__region">${data.region}</h4>
// <p class="country__row"><span>:></span>${(+data.population / 1000000).toFixed(1)} миллионов человек</p>
// <p class="country__row"><span>:></span>${firstLanguages}</p>
// <p class="country__row"><span>:></span>${currenciesSymbol} ${currenciesName}</p>
// </div >
// </article >
// `
// 		countriesContainer.insertAdjacentHTML('beforeend', html);
// 		countriesContainer.style.opacity = 1;
// 	})
// };

const displayCountry = function (data) {
	const currencies = data.currencies;
	const currenciesName = Object.values(currencies)[0].name;
	const currenciesSymbol = Object.values(currencies)[0].symbol;
	const languages = data.languages;
	const firstLanguages = Object.values(languages)[0];

	const html = `
<article class='country'>
<img class='country__img' src='${data.flags.svg}'/>
<div class="country__data">
<h3 class="country__name">${data.name.common}</h3>
<h4 class="country__region">${data.region}</h4>
<p class="country__row"><span>:></span>${(+data.population / 1000000).toFixed(1)} миллионов человек</p>
<p class="country__row"><span>:></span>${firstLanguages}</p>
<p class="country__row"><span>:></span>${currenciesSymbol} ${currenciesName}</p>
</div >
</article >
`
	countriesContainer.insertAdjacentHTML('beforeend', html);
	countriesContainer.style.opacity = 1;
}

const getCountryAndBorderCountries = function (countryName) {


	//вызов ajax для получения данных о стране
	const request = new XMLHttpRequest();
	request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
	request.send();
	request.addEventListener('load', function () {
		// console.log(this.responseText);
		const [data] = JSON.parse(this.responseText);
		console.log(data);

		//get neighbouring countries
		displayCountry(data);

		//получаем первую соседнюю страну
		const [firstNeighbour] = data.borders;
		if (!firstNeighbour) return;


		//вызов ajax для получения данных о первой соседней стране
		const request2 = new XMLHttpRequest();
		request2.open('GET', `https://restcountries.com/v3.1/alpha/${firstNeighbour}`);
		request2.send();
		request2.addEventListener('load', function () {
			const [data2] = JSON.parse(this.responseText);
			console.log(data2);

			displayCountry(data2);
		})
	})
};
// getCountryData('canada');
// getCountryData('ukraine');
// getCountryData('russia');

getCountryAndBorderCountries('usa');


// setTimeout(() => {
// 	console.log('Прошла 1 секунда')
// 	setTimeout(() => {
// 		console.log('Прошла 2 секунды')
// 		setTimeout(() => {
// 			console.log('Прошла 3 секунды')
// 		}, 1000);
// 	}, 1000);
// }, 1000);


// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
// request.send();

//Promise fetch API

const getCountryData = function (countryName) {
	fetch(`https://restcountries.com/v3.1/name/${countryName}`)
		.then(response => response.json())
		.then(data => {
			displayCountry(data[0])
			const firstNeighbour = data[0].borders[0];
			if (!firstNeighbour) return;
			return fetch(`https://restcountries.com/v3.1/alpha/${firstNeighbour}`)
		})
		.then(response => response.json())
		.then(data => displayCountry(data[0], 'neighbour'));
};

getCountryData('ukraine');
getCountryData('canada');
	// console.log(request3);


