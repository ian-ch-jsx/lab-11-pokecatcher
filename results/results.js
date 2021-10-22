
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