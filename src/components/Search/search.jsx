import './search.css'; 
import { useState } from 'react';
function Search({updateSearchTerm}) {
    

    return (
        <div className="search-wrapper">
            <input 
            type="text" 
            id="pokedex-name-search" 
            placeholder="Search for a Pokémon..." 
            style={{ padding: '0.5rem', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
            onChange={(e) => updateSearchTerm(e.target.value)}
            />
        </div>
    )
}
export default Search;