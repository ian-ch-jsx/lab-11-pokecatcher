export function findByID(id, pokemon){
    for (let poke of pokemon){
        if (poke.id === id){
            return poke;
        }
    }
}

// export const generatePokemon = () =>{
//     let randNum1 = Math.floor(Math.random() * 14);
//     let randNum2 = Math.floor(Math.random() * 14);
//     let randNum3 = Math.floor(Math.random() * 14);

//     while (
//         randNum1 === randNum2 || 
//         randNum1 === randNum3 || 
//         randNum2 === randNum3
//     ) {
//         randNum1 = Math.floor(Math.random() * 14);
//         randNum2 = Math.floor(Math.random() * 14);
//         randNum3 = Math.floor(Math.random() * 14);
//     }
// };
