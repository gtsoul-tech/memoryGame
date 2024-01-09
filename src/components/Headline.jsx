import PropTypes from 'prop-types';

function Headline(props){

    return(

        <div className='headline'>
            <div className='headDiv'>
                <div className='title'>Memory Pokemon Game </div>
                <div className='subtitle'>Get points by clicking on a pokemon but do not click on any more than once! </div>
            </div>
            <div>
                <div>Score:     {props.currentScore}</div>
                <div>BestScore: {props.bestScore}</div>
            </div>
        </div>
    )
}
Headline.propTypes = {
    currentScore:PropTypes.any,
    bestScore:PropTypes.any,
}
export default Headline