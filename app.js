import pokemon from './data/pokemon.js';
import { catchPokemon, encounterPokemon } from './storage-utils.js';

const catchBtn = document.getElementById('catch-button');
const resetBtn = document.getElementById('reset');
const errorMessage = document.getElementById('error');
const playCountSpan = document.getElementById('play-count');

const pokemon1Img = document.getElementById('poke-1-img');
const pokemon2Img = document.getElementById('poke-2-img');
const pokemon3Img = document.getElementById('poke-3-img');

const pokemon1Radio = document.getElementById('poke-1-radio');
const pokemon2Radio = document.getElementById('poke-2-radio');
const pokemon3Radio = document.getElementById('poke-3-radio');

const generatePokemon = () =>{
    let randNum1 = Math.floor(Math.random() * pokemon.length);
    let randNum2 = Math.floor(Math.random() * pokemon.length);
    let randNum3 = Math.floor(Math.random() * pokemon.length);
    while (
        randNum1 === randNum2 || 
        randNum1 === randNum3 || 
        randNum2 === randNum3
    ) {
        randNum1 = Math.floor(Math.random() * pokemon.length);
        randNum2 = Math.floor(Math.random() * pokemon.length);
        randNum3 = Math.floor(Math.random() * pokemon.length);    
    }
    let pokemon1 = pokemon[randNum1];
    encounterPokemon(pokemon1.id);
    pokemon1Img.src = `./${pokemon1.url_image}`;
    pokemon1Radio.value = pokemon1.id;

    let pokemon2 = pokemon[randNum2];
    encounterPokemon(pokemon2.id);
    pokemon2Img.src = `./${pokemon2.url_image}`;
    pokemon2Radio.value = pokemon2.id;

    let pokemon3 = pokemon[randNum3];
    encounterPokemon(pokemon3.id);
    pokemon3Img.src = `./${pokemon1.url_image}`;
    pokemon3Radio.value = pokemon3.id;
};

let playCount = 0;
generatePokemon();

catchBtn.addEventListener('click', ()=>{
    const capturedRadio = document.querySelector('input[type=radio]:checked');
    if (!capturedRadio) {
        errorMessage.classList.remove('hidden');
    }
    if (capturedRadio){
        const capturedId = Number(capturedRadio.value);
        playCount++;
        catchPokemon(capturedId);
        errorMessage.classList.add('hidden');
    }
    if (playCount >= 10) {
        window.location.replace('./results');
    }
    else {
        generatePokemon();
    }
    playCountSpan.textContent = playCount + ' of 10 throws.';
});

resetBtn.addEventListener('click', ()=>{
    localStorage.removeItem('POKEDEX');
    generatePokemon();
    playCount = 0;
    playCountSpan.textContent = 'all pokemon released!';
});
