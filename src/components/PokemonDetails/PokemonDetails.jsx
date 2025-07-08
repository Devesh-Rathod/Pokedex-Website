import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import axios from "axios";
import './PokemonDetails.css';
function PokemonDetails(){
            
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});
    async function fetchPokemonDetails() {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setPokemon(
                {
                    name: response.data.name,
                    image: response.data.sprites.other['official-artwork'].front_default,
                    height: response.data.height,
                    weight: response.data.weight,
                    types: response.data.types.map(typeInfo => typeInfo.type.name),
                    abilities: response.data.abilities.map(abilityInfo => abilityInfo.ability.name),
                }
            )
     }
    useEffect(() => {
        
        fetchPokemonDetails();
    }, [id]);

    return (
        <div className="pokemon-details-wrapper">
            <img className="pokemon-details-image" src={pokemon.image}  />
            <h3 className="pokemon-details-name">{pokemon.name}</h3>
            <h3 className="pokemon-same">Height: {pokemon.height}</h3>
            <h3 className="pokemon-same">Weight: {pokemon.weight}</h3>
            <h3 className="pokemon-same">Types: {pokemon.types?.join(', ')}</h3>
            <h3 className="pokemon-same">Abilities: {pokemon.abilities?.join(', ')}</h3>


        </div>
    );
}

export default PokemonDetails;