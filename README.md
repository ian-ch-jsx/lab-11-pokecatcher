# Pokemon Plan
> ---
> ## structure
>* home page (root directory)
   > * index.html
    >* app.js
>* results page (/results-directory)
 >   * index.html
  >  * results.js
>* pokemon.js -- hold the data.
> ---

## HTML Elements
* make a home page with...
    * two images as radio buttons
    * button with an id of catch-pokemon
* make an empty results page

## Local Storage Functions
```javascript
const results = [
    { id: 'pikachu', encountered: 2, caught: 1 },
    { id: 'mimikyu', encountered: 1, caught: 1 };
]
```
* getResults -- return the results array or empty array
* showPokemon -- increment the encountered key for a pokemon
* catchPokemon -- increment the caught key for a pokemon

## app.js logic
* make function called **generatePokemon()**
    * generate 3 random pokemon
    * call showPokemon for each
    * render the pokemon on the page

### ON PAGE LOAD
* set totalPlays to 0
* call generatePokemon

### ON BUTTON CLICK
* increment totalPlays
* call catchPokemon with chosen pokemon
* if totalPlays >= 10
    * redirect to results
* else
    * **generatePokemon**