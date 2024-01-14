//DOM Elements

const container_cart_pokemon = document.getElementById('container-cart-pokemon');

const button_remove_all_pokemon = document.getElementById('remove-all-pokemon');

const cart_valider = document.getElementById('cart-button-valider');

const pokemon_price = document.getElementsByClassName('pokemon-price');

const total_cart = document.getElementById('total-cart');

//Get table with element of cart from local stroage

const cart = JSON.parse(localStorage.getItem('cart'));

if (cart) {
    total = 0;
    cart.forEach(pokemon => {
        fetch(pokemon)
            .then(response => response.json())
            .then(data => {
                const pokemonCard = document.createElement('div');
                pokemonCard.classList.add('pokemon-card-cart');

                const pokemonImage = document.createElement('img');
                pokemonImage.src = data.sprites.front_default;
                pokemonImage.alt = data.name;

                const pokemonName = document.createElement('h3');
                pokemonName.textContent = data.name;

                const pokemonPrice = document.createElement('p');
                pokemonPrice.textContent = data.base_experience;
                pokemonPrice.classList.add('pokemon-price');
                total += data.base_experience;

                pokemonCard.appendChild(pokemonImage);
                pokemonCard.appendChild(pokemonName);
                pokemonCard.appendChild(pokemonPrice);
                container_cart_pokemon.appendChild(pokemonCard);
                
                //display total price
                total_cart.textContent = `Total : ${total} €`;

            })
            .catch(error => {
                console.log(error);
            })
    });

    }   
else {
        container_cart_pokemon.textContent = 'Aucun pokemon en vue';
        total_cart.textContent = `Total : 0`;
    }


//remove all pokemon from cart
button_remove_all_pokemon.addEventListener('click', () => {
    localStorage.removeItem('cart');
    container_cart_pokemon.textContent = 'Aucun pokemon en vue';
    total_cart.textContent = `Total : 0`;
})

//valida=te the purchase
cart_valider.addEventListener('click', () => {
    localStorage.removeItem('cart');
    container_cart_pokemon.textContent = 'Aucun pokemon en vue';
    total_cart.textContent = `Total : 0`;
    localStorage.removeItem('cart');
    alert('Merci pour votre achat');
})

