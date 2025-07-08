import { useEffect, useState } from 'react';
import axios from 'axios';
import './PokemonList.css';
import Pokemon from '../Pokemon/Pokemon';


function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pokedexUrl, setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    async function downloadPokemon() {
        setLoading(true);
        const response = await axios.get(pokedexUrl);
        setPokemonList(response.data.results);
        const pokemonResults = response.data.results;
        const pokemonResultsPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        const pokemonData = await axios.all(pokemonResultsPromise);
        console.log(response.data.results);
        console.log(pokemonData);
        setLoading(false);
        setPokemonList(pokemonData.map((pokemon) => {
            const { id, name, sprites } = pokemon.data;
            return {
                id,
                name,
                image: sprites.front_default,
            };
        }));
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
    }
    useEffect(() => {
        downloadPokemon();
    }, [pokedexUrl]);
    return (
        <>
            <div className='pokemonList-wrapper' >
                <div className="pokemon-wrapper">
                    {
                        (loading) ? 'Loading...' :
                            pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} />)
                    }
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="button-wrapper">
                <button disabled={prevUrl == null} onClick={() => setPokedexUrl(prevUrl)} > Prev </button>
                <button disabled={nextUrl == null} onClick={() => setPokedexUrl(nextUrl)} > Next </button>
            </div>
             <br />
            <br />
            <br />
            <div className="pokedex-container">
                <h2>Pokédex Website</h2>
                <p>A tool that describes Pokémon when viewed through a camera.</p>
                <footer>Created by <span className="author-name">Devesh Rathod</span>, M.Tech. CSE</footer>
            </div>
        </>
    );
}

export default PokemonList;