import Search from '../Search/search';
import './pokedex.css';
import { useState } from 'react';
import PokemonList from '../PokemonList/PokemonList';
function Pokedex() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className="pokedex-wrapper">
            <Search updateSearchTerm={setSearchTerm} />
            {searchTerm === '' ? <PokemonList /> : <PokemonList searchTerm={searchTerm} />}
        </div>
    )
}
export default Pokedex;