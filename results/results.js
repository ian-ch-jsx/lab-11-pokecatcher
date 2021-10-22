
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
const caught = pokedex.map(species=>species.caught);

const encountered = pokedex.map(species=>species.encountered);

// console.log(caught);
// console.log(encountered);
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
                'rgba(189,158,177, 0.6)',
                'rgba(206,102,78, 0.4)',
                'rgba(15,209,198, 0.4)',
                'rgba(56,63,78, 0.5)',
                'rgba(233,182,187, 0.5)',
                'rgba(88,167,150, 0.2)',
                'rgba(175,216,232, 0.5)',
                'rgba(229,129,53, 0.4)',
                'rgba(153,164,106, 0.5)',
                'rgba(102,175,181, 0.4)',
                'rgba(235,228,179, 0.5)',
                'rgba(75,90,75, 0.5)',
                'rgba(116,64,90, 0.5)',
                'rgba(130,56,59, 0.5)'
            ],
            borderColor: [
                'rgba(189,158,177, 1)',
                'rgba(206,102,78, 1)',
                'rgba(15,209,198, 1)',
                'rgba(56,63,78, 1)',
                'rgba(233,182,187, 1)',
                'rgba(88,167,150, 1)',
                'rgba(175,216,232, 1)',
                'rgba(229,129,53, 1)',
                'rgba(153,164,106, 1)',
                'rgba(102,175,181, 1)',
                'rgba(194,149,79, 1)',
                'rgba(75,90,75, 1)',
                'rgba(116,64,90, 1)',
                'rgba(130,56,59, 1)'
            ],
            borderWidth: 1
        },
        {
            label: 'Pokemon encountered',
            data: encountered,
            backgroundColor: [
                'rgba(189,158,177, 0.6)',
                'rgba(206,102,78, 0.4)',
                'rgba(15,209,198, 0.4)',
                'rgba(56,63,78, 0.5)',
                'rgba(233,182,187, 0.5)',
                'rgba(88,167,150, 0.2)',
                'rgba(175,216,232, 0.5)',
                'rgba(229,129,53, 0.4)',
                'rgba(153,164,106, 0.5)',
                'rgba(102,175,181, 0.4)',
                'rgba(235,228,179, 0.5)',
                'rgba(75,90,75, 0.5)',
                'rgba(116,64,90, 0.5)',
                'rgba(130,56,59, 0.5)'
            ],
            borderColor: [
                'rgba(189,158,177, 1)',
                'rgba(206,102,78, 1)',
                'rgba(15,209,198, 1)',
                'rgba(56,63,78, 1)',
                'rgba(233,182,187, 1)',
                'rgba(88,167,150, 1)',
                'rgba(175,216,232, 1)',
                'rgba(229,129,53, 1)',
                'rgba(153,164,106, 1)',
                'rgba(102,175,181, 1)',
                'rgba(194,149,79, 1)',
                'rgba(75,90,75, 1)',
                'rgba(116,64,90, 1)',
                'rgba(130,56,59, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true,
                stacked: false
            }
        }
    }
});