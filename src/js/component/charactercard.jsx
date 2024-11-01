import React from "react";
import { useState } from "react";

const Charactercard = () => {

    const [characterData, setCharacterData] = useState(null)

    const getCharacterData = () => {
        fetch(`https://www.swapi.tech/api/people/${character.uid}`)
            .then((res) => res.json())
            .then((response) => setCharacterData(response.result.properties))
            .catch((err) => console.log(err))
    };

    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="https://lumiere-a.akamaihd.net/v1/images/cad-bane-main_0ea0685c.jpeg?region=169%2C1%2C542%2C540" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
        </div>)

}
export default Charactercard;