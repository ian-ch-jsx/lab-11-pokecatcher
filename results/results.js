import pokemon from '../data/pokemon.js';
import { findByID, getPokedex } from '../storage-utils.js';

const pokedex = getPokedex();

const main = document.getElementById('main');

for (let species of pokedex){
    const poke = findByID(pokemon, species.id);
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = poke.url_image;
    const header = document.createElement('h2');
    header.textContent = poke.pokemon;
    const resultsSpan1 = document.createElement('span');
    resultsSpan1.textContent = `Encountered: ${species.encountered}`;
    const resultsSpan2 = document.createElement('span');
    resultsSpan2.textContent = `Caught: ${species.caught}`;

    div.append(header, img, resultsSpan1, resultsSpan2);
    main.append(div);
}