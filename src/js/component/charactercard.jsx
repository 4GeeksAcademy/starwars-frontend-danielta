import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const Charactercard = () => {

    const [characterData, setCharacterData] = useState({})
    const params = useParams();

    const getCharacterData = () => {
        fetch(`https://www.swapi.tech/api/people/${params.uid}`)
            .then((res) => res.json())
            .then((response) => setCharacterData(response.result.properties))
            .catch((err) => console.log(err))
    };
    console.log(characterData);

    useEffect(
        () => { getCharacterData() }, []
    );

    return (
        <div id="indivCard" className="card" style={{ width: "50rem" }}>
            <div id="cardTop">
                <div id="characterPhoto">
                    <img src="https://lumiere-a.akamaihd.net/v1/images/boba-fett-main_a8fade4d.jpeg?region=311%2C0%2C853%2C853" className="card-img-top" alt="..." />
                </div>
                <div id="cardTopText" className="card-body">
                    <h5 className="card-title">{characterData.name && characterData.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div id="traitList">
                <div className="trait">
                    <div>Name:</div>
                    <div>{characterData.name}</div>
                </div>
                <div className="trait">
                    <div>Birth Year:</div>
                    <div>{characterData.birth_year && characterData.birth_year}</div>
                </div>
                <div className="trait">
                    <div>Gender:</div>
                    <div>{characterData.gender}</div>
                </div>
                <div className="trait">
                    <div>Height:</div>
                    <div>{characterData.height}</div>
                </div>
                <div className="trait">
                    <div>Skin Color:</div>
                    <div>{characterData.skin_color}</div>
                </div>
                <div className="trait">
                    <div>Eye Color:</div>
                    <div>{characterData.eye_color}</div>
                </div>
            </div>
        </div>)

}
export default Charactercard;