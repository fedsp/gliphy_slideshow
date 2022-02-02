import axios from 'axios';
import React,{useState, useEffect} from 'react';

const PUBLIC_API_KEY = '50QIRL4q68tjlnZMmOrlhWfvNPM1IsLZ';

function SearchResults(){   
    var searchTerm = 'cheeseburguer';
    const [searchResults,setSearchResults] = useState([]);

    async function makeApiCall(searchTerm){
        const apiResult = await axios.get(
            `http://api.giphy.com/v1/gifs/search?api_key=${PUBLIC_API_KEY}&q=${searchTerm}`
    
        )
        setSearchResults(apiResult.data);
    }

    useEffect(function () {
        makeApiCall(searchTerm);
    }, [])

    return(
        <a>{JSON.stringify(searchResults)}</a>
    )
}



export default SearchResults;