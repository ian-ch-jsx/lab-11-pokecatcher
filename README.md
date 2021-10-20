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
---
## lecture example generateFruit

```javascript
    import { fruits } from './fruits.js';
    // generate 2 random fruit
    const generateFruit = () =>{
        let randNum1 = Math.floor(Math.random() * fruit.length);
        let randNum2 = Math.floor(Math.random() * fruit.length);
        let randNum3 = Math.floor(Math.random() * fruit.length);
        //regenerate the number if they match
        while (
            randNum1 === randNum2 || 
            randNum1 === randomNum3 || 
            randomNum2 === randomNum3
            ) {
                randNum1 = Math.floor(Math.random() * fruit.length);
                randNum2 = Math.floor(Math.random() * fruit.length);
                randNum3 = Math.floor(Math.random() * fruit.length);
            }
        let fruit1 = fruits[randomNum1];
        fruit1Img.src = fruit1.image;
        let fruit2 = fruits[randomNum2];
        fruit2Img.src = fruit2.image;
    // call showFruit for each
    // render the fruit on the page
    };
    generateFruit();
```