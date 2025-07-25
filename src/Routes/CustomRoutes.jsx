import {Routes, Route} from 'react-router-dom';
import Pokedex from '../components/pokedex/pokedex';
import PokemonDetails from '../components/PokemonDetails/PokemonDetails';
function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
    );
}
export default CustomRoutes;