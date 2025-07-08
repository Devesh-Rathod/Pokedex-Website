import { useEffect, useState } from 'react';
import axios from 'axios';
import './PokemonList.css';
import Pokemon from '../Pokemon/Pokemon';

function PokemonList() {
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        loading: true,
        pokedexUrl: 'https://pokeapi.co/api/v2/pokemon',
        nextUrl: '',
        prevUrl: ''
    });

    const { pokemonList, loading, pokedexUrl, nextUrl, prevUrl } = pokemonListState;

    async function downloadPokemon() {
        setPokemonListState(prev => ({ ...prev, loading: true }));
        const response = await axios.get(pokedexUrl);
        const pokemonResults = response.data.results;
        const pokemonResultsPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        const pokemonData = await axios.all(pokemonResultsPromise);

        setPokemonListState(prev => ({
            ...prev,
            loading: false,
            pokemonList: pokemonData.map((pokemon) => {
                const { id, name, sprites } = pokemon.data;
                return {
                    id,
                    name,
                    image: sprites.other['official-artwork'].front_default,
                };
            }),
            nextUrl: response.data.next,
            prevUrl: response.data.previous,
        }));
    }

    useEffect(() => {
        downloadPokemon();
        // eslint-disable-next-line
    }, [pokedexUrl]);

    function setPokedexUrl(url) {
        setPokemonListState(prev => ({
            ...prev,
            pokedexUrl: url
        }));
    }

    return (
        <>
            <div className='pokemonList-wrapper'>
                <div className="pokemon-wrapper">
                    {
                        loading ? 'Loading...' :
                            pokemonList.map((p) => <Pokemon key={p.id} name={p.name} image={p.image} id={p.id} />)
                    }
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="button-wrapper">
                <button disabled={!prevUrl} onClick={() => setPokedexUrl(prevUrl)}> Prev </button>
                <button disabled={!nextUrl} onClick={() => setPokedexUrl(nextUrl)}> Next </button>
            </div>
        </>
    );
}

export default PokemonList;