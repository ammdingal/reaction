import Jokes from '../api/Jokes.js';
import JokesList from './JokesList.jsx';
import React, { useEffect, useState } from 'react';

function App(){
    const [jokes, setJokes] = useState([]);

    useEffect( () => {
        getJokes();
    }, []);

    function getJokes(){
        Jokes.get('/jokes/ten')
        .then(response => setJokes(response.data))
        .catch(err => console.log(`Error: ${ err }`));
    }

    return(
        <div><JokesList jokes={ jokes }/></div>
    )
}

export default App;