
import pokemon from '../data/pokemon.js';
import { findByID, getPokedex } from '../storage-utils.js';

const pokedex = getPokedex();

const main = document.getElementById('main');

for (let species of pokedex){
    const poke = findByID(pokemon, species.id);
    const div = document.createElement('div');
    div.classList.add('results-container');
    const img = document.createElement('img');
    img.src = poke.url_image;
    img.classList.add('results-image');
    const header = document.createElement('h3');
    header.textContent = poke.pokemon;
    header.classList.add('poke-name');
    const resultsSpan1 = document.createElement('span');
    resultsSpan1.textContent = `Encountered: ${species.encountered}`;
    resultsSpan1.classList.add('results');
    const resultsSpan2 = document.createElement('span');
    resultsSpan2.classList.add('results');
    resultsSpan2.textContent = `Caught: ${species.caught}`;
    const resultsSpan3 = document.createElement('span');

    div.append(header, resultsSpan3, resultsSpan1, resultsSpan2);
    resultsSpan3.append(img);
    main.append(div);
}

const name = pokedex.map((species)=>{
    const poke = findByID(pokemon, species.id);
    return poke.pokemon;

});
console.log(name);
const caught = pokedex.map(species=>species.picked);

var ctx = document.getElementById('resultsChart').getContext('2d');
// eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: name,
        datasets: [{
            label: 'Pokemon Caught',
            data: caught,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});