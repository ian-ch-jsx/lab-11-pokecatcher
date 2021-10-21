import pokemon from './data/pokemon.js';
// import { findByID } from './storage-utils.js';

const catchBtn = document.getElementById('catch-button');
const errorMessage = document.getElementById('error');
const playCountSpan = document.getElementById('play-count');
const pokemon1Img = document.getElementById('poke-1-img');
const pokemon2Img = document.getElementById('poke-2-img');
const pokemon3Img = document.getElementById('poke-3-img');

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
    pokemon1Img.src = pokemon1.url_image;
    let pokemon2 = pokemon[randNum2];
    pokemon2Img.src = pokemon2.url_image;
    let pokemon3 = pokemon[randNum3];
    pokemon3Img.src = pokemon3.url_image;
};

generatePokemon();

let playCount = 0;

catchBtn.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    if (!selected) {
        errorMessage.classList.remove('hidden');
    }
    else if (playCount < 9) {
        playCount++;
        errorMessage.classList.add('hidden');
        generatePokemon();
    }
    else {
        window.location.replace('./results');
    }
    playCountSpan.textContent = playCount + ' of 10 plays.';
});
