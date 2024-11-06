import React from "react";
import { useState, useEffect } from "react";
import Charactercard from "./charactercard.jsx";
import Characters from "./characters.jsx";
import { Context } from "../store/appContext.js";
import { useContext } from "react";


const CharactersList = () => {

    const { store, actions } = useContext(Context);
    // const [ characterList, setCharacterList] = useState(null)

    // const getCharacters = () => {
    //     fetch("https://www.swapi.tech/api/people")
    //         .then((res) => res.json())
    //         .then((response) => setCharacterList(response.results))
    //         .catch((err) => console.log(err))
    // };

    useEffect(() => { actions.getCharacters() }, [])

    
    return (
        <div>
            <div className="title">Characters</div>
            <div className="container">
                <div className="characterList scroller">
                    {store.characterList?.map((character, index) => {
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