/* eslint-disable no-unused-vars */
import { writable } from "svelte/store";

export const pokemonData = writable([]);
const pokemonDetails = {};
let loaded = false;

export const fetchPokemon = async ([limit,offset]) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    const loadedPokemon = data.results.map((data, index) => {
        return {
            name: data.name,
            id: index + 1 + offset,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1 + offset}.png`,
        }
    });
    pokemonData.set(loadedPokemon);
};

export const getPokemonById = async (id) => {
	if (pokemonDetails[id]) return pokemonDetails[id];

	try {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
		const data = await res.json();
		pokemonDetails[id] = data;
		return data;
	} catch (err) {
		console.error(err);
		return null;
	}
};

