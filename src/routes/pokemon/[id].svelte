<script context="module">
    import {getPokemonById} from '../../stores/pokemonDB';
    export async function load(ctx) {
        const id = ctx.params.id;
        const pokemon = await getPokemonById(id);
        return {
            props: {pokemon}
        };
    }
</script>
<script>
    export let pokemon;
    const types = pokemon.types.map(type =>  " " + type.type.name);
    const abilities = pokemon.abilities.map(ability => " " + ability.ability.name);
    const statNames = pokemon.stats.map(stats => stats.stat.name + ': ');
    const statValue = pokemon.stats.map(stats => stats.base_stat);
    let height = pokemon.height + '0';
    
</script>
<div class="flex flex-col items-center">
    <h1 class="text-3xl text-center my-8 uppercase">{pokemon.name}</h1>
    <p>
        Type(s): <strong class="px-1">{types}</strong> | 
        Height: <strong>{height}cm</strong> | 
        Weight: <strong>{pokemon.weight}</strong> kg
    </p>
    <img class="h-40 w-40" src={pokemon.sprites['front_default']} alt={pokemon.name}/>
    <p>Abilities: <strong>{abilities}</strong></p>
    <ul>
        Stats:
        {#each statNames as stat, index}
            <li class="text-center"><strong>{stat}</strong>{statValue[index]}</li>
        {/each}
    </ul>
</div>