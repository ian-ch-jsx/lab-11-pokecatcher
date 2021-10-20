// import pokemon from './data/pokemon.js';
// import { findByID } from './utils.js';
const catchBtn = document.getElementById('catch-button');
const errorMessage = document.getElementById('error');
// const playCountSpan = document.getElementById('play-count');

catchBtn.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    if (!selected) {
        errorMessage.classList.remove('hidden');
    }
});


// const generatePokemon = () =>{
//     let randNum1 = Math.floor(Math.random() * pokemon.length);
//     let randNum2 = Math.floor(Math.random() * pokemon.length);
//     let randNum3 = Math.floor(Math.random() * pokemon.length);

//     while (
//         randNum1 === randNum2 || 
//       randNum1 === randNum3 || 
//       randNum2 === randNum3
//     ) {
//         randNum1 = Math.floor(Math.random() * pokemon.length);
//         randNum2 = Math.floor(Math.random() * pokemon.length);
//         randNum3 = Math.floor(Math.random() * pokemon.length);      
//     }
// };
