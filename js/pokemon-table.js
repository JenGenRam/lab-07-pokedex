import html from './html.js';
const tableBody = document.getElementById('pokemon-body');

function makeRow(pokemon) {
    return html`<tr>
        <td><img class="pic" src="${pokemon.url_image}"></td>
        <td>${pokemon.pokemon}</td>
        <td>${pokemon.defense}</td>
        <td>${pokemon.attack}</td>
        <td>${pokemon.type_1}</td>
        <td>${pokemon.type_2}</td>
    </tr>`;
}

const pokemonTable = {
    init(pokemons) {
        for(let i = 0; i < pokemons.length; i++) {
            const tr = makeRow(pokemons[i]);
            tableBody.appendChild(tr);
        }
    }
};

export default pokemonTable;