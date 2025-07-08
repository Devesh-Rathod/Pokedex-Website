import './App.css'
import CustomRoutes from './Routes/CustomRoutes.jsx';
import { Link } from 'react-router-dom';
import './components/PokemonDetails/PokemonDetails.css';
function App() {
  return (
    <>
      <div className="pokemon-details-wrapper">

      
      <Link to="/" id="pokedex-heading">
        Pokedex
      </Link>
      <span className="author-name"> Created by :- Devesh Rathod</span>

      
      </div>

      <CustomRoutes />
    </>
  )
}

export default App



