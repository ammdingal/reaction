import React, { useState } from "react";
import '../assets/stylesheets/style.css';

function JokesList({ jokes = [] }) {
    const [reactions, setReactions] = useState({});

    const handleReaction = (jokeId, reaction) => {
        setReactions({ ...reactions, [jokeId]: { ...reactions[jokeId], [reaction]: (reactions[jokeId]?.[reaction] || 0) + 1 } });
    };

    const firstJoke = jokes[0];

    if (!firstJoke) {
        return <p></p>;
    }

    const reactionButtons = [
        { symbol: "👍", label: "Like" },
        { symbol: "❤️", label: "Love" },
        { symbol: "😂", label: "Laugh" },
        { symbol: "😊", label: "Happy" },
        { symbol: "😔", label: "Sad" },
        { symbol: "😡", label: "Angry" },
    ];

    return (
        <>
            <img src='https://media1.giphy.com/media/b0K5kG0soDdAtJ5Lym/giphy.gif?cid=ecf05e47sudc3io8xu65ib2jh5jo542p1qojgjiirt6zga8l&rid=giphy.gif&ct=s' alt='laughing kid'/>
            <div className="jokes">
                <h1>Daily Jokes</h1>
                <h2 key={firstJoke.id}>{firstJoke.setup}</h2>
                <h2>{firstJoke.punchline}</h2>
                <div className="btns">
                    {reactionButtons.map((button) => (
                    <button key={button.symbol} onClick={() => handleReaction(firstJoke.id, button.symbol)}>
                        {button.symbol} {reactions[firstJoke.id]?.[button.symbol] || 0}
                    </button>
                    ))}
                </div>
            </div>
        </>
    );
}

export default JokesList;
