import './search.css'; 
function Search() {
    return (
        <div className="search-wrapper">
            <input 
            type="text" 
            id="pokedex-name-search" 
            placeholder="Search for a Pokémon..." />
        </div>
    )
}
export default Search;