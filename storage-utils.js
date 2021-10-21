export function findByID(id, pokemon){
    for (let poke of pokemon){
        if (poke.id === id){
            return poke;
        }
    }
}

export function getPokedex() {
    const pokedexString = localStorage.getItem('POKEDEX') || '[]';
    const pokedex = JSON.parse(pokedexString);
    return pokedex;
}

export function encounterPokemon(id) {
    let pokedex = getPokedex();
    let poke = findByID(pokedex, id);

    if (poke){
        poke.encountered++;
    } else {
        const newPoke = { id: id, encountered: 1, caught: 0 };
        pokedex.push(newPoke);
    }
    localStorage.setPoke('POKEDEX', JSON.stringify(pokedex));
}

export function capturePokemon(id){
    let pokedex = getPokedex();
    let poke = findByID(pokedex, id);

    poke.captured++;

    localStorage.setPoke('POKEDEX', JSON.stringify(pokedex));
}