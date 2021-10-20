export function findByID(id, pokemon){
    for (let poke of pokemon){
        if (poke.id === id){
            return poke;
        }
    }
}
