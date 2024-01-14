// DOM Elements

const container_pokemon_card_product = document.getElementById('container-pokemon-card-product');

//Display information from PokeApi with query URL "pokemon"

const urlParams = new URLSearchParams(window.location.search);
const pokemonName = urlParams.get('pokemon');

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then(response => response.json())
  .then(data => {

    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card-product');

    const divOne = document.createElement('div');
    divOne.classList.add('div-one');

    const pokemonImage = document.createElement('img');
    pokemonImage.src = data.sprites.front_default;
    pokemonImage.alt = data.name;

    const pokemonName = document.createElement('h3');
    pokemonName.textContent = data.name;

    const divTwo = document.createElement('div');
    divTwo.classList.add('div-two');

    const pokemonType = document.createElement('p');
    pokemonType.textContent = `type du pokemon : ${data.types[0].type.name}`;

    const pokemonHeight = document.createElement('p');
    pokemonHeight.textContent = `taille du pokemon : ${data.height}`;

    const pokemonWeight = document.createElement('p');
    pokemonWeight.textContent = `poids du pokemon : ${data.weight}`;

    const pokemonAbility = document.createElement('p');
    pokemonAbility.textContent = `capacité du pokemon : ${data.abilities[0].ability.name}`;

    const pokemonPrice = document.createElement('p');
    pokemonPrice.textContent = `Prix du pokemon : ${data.base_experience}`;

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to cart';
    addToCartButton.classList.add('add-to-cart-button');
    addToCartButton.addEventListener('click', () => {
      addToCart(data);
    });
    
    divOne.appendChild(pokemonImage);
    divOne.appendChild(pokemonName);
    pokemonCard.appendChild(divOne);
    divTwo.appendChild(pokemonType);
    divTwo.appendChild(pokemonHeight);
    divTwo.appendChild(pokemonWeight);
    divTwo.appendChild(pokemonAbility);
    divTwo.appendChild(pokemonPrice);
    divTwo.appendChild(addToCartButton);
    pokemonCard.appendChild(divTwo);

    container_pokemon_card_product.appendChild(pokemonCard);

    container_pokemon_card_product.classList.remove('hidden');

  })
  .catch(error => {
    console.log(error);
    alert('Aucun pokemon recherché n\'a été trouvé ! Retour à l\'accueil');
    window.location.href = 'index.html';
  })


function addToCart(pokemon) {
    // get cart from localStorage or create one
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // check if pokemon is already in cart
    const existing = cart.find(p => p.name === pokemon.name);
    if (!existing) {
      cart.push(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
    } 

    // save cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // redirect to cart page
    window.location.href = 'cart.html';

}