import PropTypes from 'prop-types';
import { useState, useEffect } from "react";

function Card(props){
    
    const [pokemon, setPokemon] = useState([]);
    const [error, setError] = useState(undefined);
    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await fetch(props.url);
                const data = await response.json();
    
                setPokemon(data.sprites.front_default);
            } catch (e){
                setError(e.message || "Something went wrong");
            }
            
        };
        fetchData();
      }, [props.url])
    if (error) {
        return <div>Pokemon wasnt found</div>
    }

    return(
        <div className='Card'>
            <button onClick={props.handleClick} value={props.name}>
                <img src={pokemon} alt="Logo" />
                <div>{props.name}</div>
            </button>
        </div>
    )
}
Card.propTypes = {
    handleClick:PropTypes.func,
    name:PropTypes.string,
    url:PropTypes.string
}
export default Card