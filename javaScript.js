let pokemonList = []
window.onload =()=>{
    init()
    /* const button$$ = document.querySelector("#buttonSearch")
    button$$.addEventListener("click", ()=> searchPokemon()) */
    const input$$ = document.querySelector("#inputSearch")
    input$$.addEventListener("input", ()=> searchPokemon()) 
}

const init= async() => {
    const mapList = await getPokemons();
    pokemonList = await mapPokemon(mapList)
    printPokemons(pokemonList)
}

const getPokemons = async() => {

    let array = [];
    for (let i = 1; i <= 151; i++) {
        const api = await fetch (`https://pokeapi.co/api/v2/pokemon/`+ i)
        const listPoke = await api.json()

        array.push(listPoke)
    }
    return array

}

function mapPokemon(pokemons) {
    const pokemonsMapeados = pokemons.map (pokemon => {

        return{
            name : pokemon.name,
            img : pokemon.sprites.other.dream_world.front_default,
        }
    }
        )
        return pokemonsMapeados    
}

function printPokemons (pokemons) {
    const pokemonCard = document.querySelector(".containerPokemon")?document.querySelector(".containerPokemon"):document.createElement ('div')
    pokemonCard.innerHTML = "";
    pokemonCard.className = 'containerPokemon';
    pokemons.forEach(pokemon => {
        pokemonCard.innerHTML += `<div class="carta">
        <h1>${pokemon.name} </h1>
        <img src=${pokemon.img} />
        </div>`
    });
document.body.appendChild(pokemonCard)
}

const searchPokemon = () => {
    const input = document.querySelector('#inputSearch');
    console.log(input.value.toLocaleLowerCase())
    const filterPokemon = pokemonList.filter(poke =>(poke.name.toLowerCase().includes(input.value.toLowerCase())))
console.log(filterPokemon)
printPokemons(filterPokemon)
}















//buscador
/*  const getPokemonName = async () => {
    let name = document.querySelector('#name').value;
    printDataPokemon(resultToJson)}

    const printDataPokemon = (data) => {
        const list = document.createElement('ul');
        data.pokemon.forEach(pokemon => {
            list.innerHTML += `<li id="${pokemon.pokemon_id}">
                <p>id: ${pokemon.pokemon_id}</p>
                <button onclick="deletePokemon(${pokemon.pokemon_id})">eliminar</button>
            </li>`

        });
        document.body.appendChild(list);
    
    }
    
    const deletePokemon = (id) => {
        id.remove();
    }
 */

   