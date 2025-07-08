import './search.css'; 
import { useState } from 'react';
function Search({updateSearchTerm}) {
    

    return (
        <div className="search-wrapper">
            <input 
            type="text" 
            id="pokedex-name-search" 
            placeholder="Search for a Pokémon..." 
            onChange={(e) => updateSearchTerm(e.target.value)}
            />
        </div>
    )
}
export default Search;