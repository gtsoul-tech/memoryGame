import PropTypes from 'prop-types';
function Card(props){
    
    return(<>
        <button onClick={props.handleClick} value={props.name}>
            
            <div>{props.name}</div>
            <div>{props.name}</div>
            </button>
        </>
    )
}
Card.propTypes = {
    handleClick:PropTypes.func,
    name:PropTypes.string,
    url:PropTypes.string
}
export default Card