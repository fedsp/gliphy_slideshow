import './home_styles.css';
import '../../index.css';
import SearchResults from '../search_results/search_results'

function home() {
    return (
        <div className='mainContainer'>  
            <div className='header'>
                <a className='mainTitle formItem'>Searcher</a>
                <input type='search' className='formItem'></input>
                <button onClick={dummy()}>Search</button>               
            </div>  
            <div className='body'>
                <SearchResults></SearchResults>
                </div>          
        </div>
    )
}

function dummy(){
    console.log(' ');
}

export default home;