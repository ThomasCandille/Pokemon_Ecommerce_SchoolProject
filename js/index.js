// DOM Elements

const button_search_pokemon = document.getElementById('button-search-pokemon');
const input_search_pokemon = document.getElementById('input-search-pokemon');

const search_pokemon_result = document.getElementById('container-search-pokemon-result');


const list_pokemon_random = document.getElementById('container-list-pokemon-random');


// Display result of search pokemon

button_search_pokemon.addEventListener('click', () => {
  
    //get searched Pokemon name
    const pokemonName = input_search_pokemon.value;
    console.log(pokemonName);
  
    //fetch data from PokeAPI
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => response.json())
      .then(data => {

        const pokemonImage = document.createElement('img');
        pokemonImage.src = data.sprites.front_default;
        pokemonImage.alt = data.name;

        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card-result');

        const pokemonName = document.createElement('h3');
        pokemonName.textContent = data.name;

        const viewProductButton = document.createElement('button');
        viewProductButton.textContent = 'View Product';
        viewProductButton.classList.add('view-product-button');
        viewProductButton.addEventListener('click', () => {
          window.location.href = `product.html?pokemon=${data.name}`;
        });

        pokemonCard.appendChild(pokemonName);
        pokemonCard.appendChild(pokemonImage);
        pokemonCard.appendChild(viewProductButton);
        search_pokemon_result.appendChild(pokemonCard);

        search_pokemon_result.classList.remove('hidden');

      })
      .catch(error => {
        console.log(error);
        alert('Pokemon not found');
      })
  })


// Creating a table with informations of 20 random pokemon
// adding 20 random pokemon to the DOM
for(let i = 0; i < 20; i++) {
  
  //get random number between 1 and 898
  let randomPokemon = Math.floor(Math.random() * 898) + 1;

  //fetch data from PokeAPI
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
    .then(response => response.json())
    .then(data => {

      const pokemonImage = document.createElement('img');
      pokemonImage.src = data.sprites.front_default;
      pokemonImage.alt = data.name;

      const pokemonCard = document.createElement('div');
      pokemonCard.classList.add('pokemon-card');

      const pokemonName = document.createElement('h3');
      pokemonName.textContent = data.name;

      const viewProductButton = document.createElement('button');
        viewProductButton.textContent = 'View Product';
        viewProductButton.classList.add('view-product-button');
        viewProductButton.addEventListener('click', () => {
          window.location.href = `product.html?pokemon=${data.name}`;
        });

      pokemonCard.appendChild(pokemonName);
      pokemonCard.appendChild(pokemonImage);
      pokemonCard.appendChild(viewProductButton);
      list_pokemon_random.appendChild(pokemonCard);

    })
}