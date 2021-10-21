import { findByID } from '../storage-utils.js';
import pokemon from '../data/pokemon.js';
import { getPokedex } from '../storage-utils.js';

const test = QUnit.test;

test('findByID should return matching item', (expect)=>{
    const expected = {
        '_id':'5cef3501ef6005a77cd4fd17',
        'pokemon':'bulbasaur',
        'id':1,
        'species_id':1,
        'height':7,
        'weight':69,
        'base_experience':64,
        'type_1':'grass',
        'type_2':'poison',
        'attack':49,
        'defense':49,
        'hp':45,
        'special_attack':65,
        'special_defense':65,
        'speed':45,
        'ability_1':'overgrow',
        'ability_2':'NA',
        'ability_hidden':'chlorophyll',
        'color_1':'#78C850',
        'color_2':'#A040A0',
        'color_f':'#81A763',
        'egg_group_1':'monster',
        'egg_group_2':'plant',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id':1,
        'evolves_from_species_id':'NA',
        'evolution_chain_id':1,
        'shape_id':8,
        'shape':'quadruped',
        'pokebase':'bulbasaur',
        'pokedex':'http://www.pokemon.com/us/pokedex/bulbasaur'
    };
    const actual = findByID(1, pokemon);
    expect.deepEqual(actual, expected);
});

test('getPokedex returns the key "POKEDEX" from localStorage', (expect) =>{
    const pokedex = [
        { id: 3, shown: 2, picked: 5 },
        { id: 1, shown: 3, picked: 1 }
    ];
    localStorage.setItem('POKEDEX', JSON.stringify(pokedex));

    const actual = getPokedex();

    expect.deepEqual(actual, pokedex);
});

test('getPokedex returns an empty array if there is no POKEDEX key in localStorage', (expect)=>{
    localStorage.removeItem('POKEDEX');

    const actual = getPokedex();

    expect.deepEqual(actual, []);
});

