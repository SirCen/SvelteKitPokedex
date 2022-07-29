<svelte:head>
    <title>Pokedex</title>
</svelte:head>
<script>
    import {pokemonData, fetchPokemon} from "../stores/pokemonDB.js";
    import PokemonCard from '../components/pokemonCard.svelte';
    let searchTerm = "";
    let filteredPokedex = [];
    //reacts to change in elements referenced
    $: {
        if (searchTerm) {
            //search pokedex for pokemon
            filteredPokedex = $pokemonData.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));
        } else {
            filteredPokedex = [...$pokemonData];
        }
    }
    
    
</script>
<script context="module">
    let generation = [];
    fetchPokemon([151,0]);
    
    function setGen(gen) {
        switch (gen) {
            case 1: { 
                generation = [151,0];
                break;
            }
            case 2: {
                generation = [100,151];
                break;
            }
            case 3: {
                generation = [135,251];
                break;
            }
            case 4: {
                generation = [108,386];
                break;
            }
            
        }
        fetchPokemon(generation);
    }
</script>
<h1 class="text-3xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>
<div class="place-items-center text-center">
    <button type="button" class="rounded-full p-2 mx-1 my-1 border-2 border-gray-200 bg-gray-300 hover:rounded-lg hover:bg-gray-200" on:click={() => setGen(1)} >Generation I</button>
    <button type="button" class="rounded-full p-2 mx-1 my-1 border-2 border-gray-200 bg-gray-300 hover:rounded-lg hover:bg-gray-200" on:click={() => setGen(2)} >Generation II</button>
    <button type="button" class="rounded-full p-2 mx-1 my-1 border-2 border-gray-200 bg-gray-300 hover:rounded-lg hover:bg-gray-200" on:click={() => setGen(3)} >Generation III</button>
    <button type="button" class="rounded-full p-2 mx-1 my-1 border-2 border-gray-200 bg-gray-300 hover:rounded-lg hover:bg-gray-200" on:click={() => setGen(4)} >Generation IV</button>
</div>
<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" type="text" bind:value={searchTerm} placeholder="Search Pokedex">

<div class="py-4 grid gap-4 md:grid-cols-3 grid-cols-1">
    {#each filteredPokedex as pokemon}
        <PokemonCard pokemon={pokemon}/>    
    {/each}
</div>

