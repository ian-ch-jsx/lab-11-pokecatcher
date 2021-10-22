export function findByID(pokemon, id){
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

export function setPokedex(pokedex){
    localStorage.setItem('POKEDEX', JSON.stringify(pokedex));
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
    setPokedex(pokedex);
}

export function catchPokemon(id) {

    let pokedex = getPokedex();
    let poke = findByID(pokedex, id);

    poke.caught++;
    setPokedex(pokedex);
}

export function releasePokemon() {
    localStorage.removeItem(catchPokemon);
}
