import React from "react";
import { useState, useEffect } from "react";
import Charactercard from "./charactercard.jsx";
import Characters from "./characters.jsx";


const CharactersList = () => {

    const [ characterList, setCharacterList] = useState(null)

    const getCharacters = () => {
        fetch("https://www.swapi.tech/api/people")
            .then((res) => res.json())
            .then((response) => setCharacterList(response.results))
            .catch((err) => console.log(err))
    };

    useEffect(() => { getCharacters() }, [])

    
    return (
        <div>
            <div className="title">Characters</div>
            <div className="container">
                <div className="characterList scroller">
                    {characterList?.map((character, index) => {
                        return (
                            <Characters character={character} key={index}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CharactersList;