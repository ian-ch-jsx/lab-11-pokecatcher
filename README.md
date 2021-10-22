# Pokemon Plan Day 1
>---
>### step one
>* start dev branch...
>### step two
>* add basic HTML structure
>   * include classes, ids, etc...
>* add bare bones css for readability
>### step three
>* create necessary documents for functions, data, and apps.
> ### tests
>* test generatePokemon
>   * random # gen
>### functions
>* findByID 
>* getResults
>   * fetch data from localStorage
>* Total plays function 
>   * to 10, redirect to results page
>* pokeEncountered(id)
>   * increments # of times encountered
>* pokeCaught
>   * increments # of times caught
>---
---
---
> ---
> ### file structure
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
* getPokedex -- return the results array or empty array
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

## Results Page
### HTML Elements
* Image
* header with the name of the pokemon
* how many times shown, how many times picked

### results.js
* get the data from localStorage
* loop through each item in results
* get its data from fruits.js using findByID
* render the results (img, header, data)