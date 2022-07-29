<script>
    import {fade} from 'svelte/transition';
    export let pokemon;
</script>
<a class="p-6 bg-gray-200 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" 
    href={`/pokemon/${pokemon.id}`}
    transition:fade
>
    <img class="h-40 w-40" src={pokemon.image} alt={pokemon.name}/>
    <h2 class="text-2xl">No.{pokemon.id} {pokemon.name.substring(0,1).toUpperCase()}{pokemon.name.substring(1,pokemon.name.length)}</h2>
</a>
