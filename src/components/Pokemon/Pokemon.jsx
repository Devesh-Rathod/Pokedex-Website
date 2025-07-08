import './Pokemon.css';
function Pokemon({ name, image, key }) {
    return (
        <div className="pokemon">
            <div>
                <img
                    className='pokemon-image'
                    src={image} />
                    
            </div>
            <div className="pokemon-name">{name}</div>
            <div>{key}</div>
        </div>
    );
}
export default Pokemon;