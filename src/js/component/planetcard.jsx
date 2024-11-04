import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";


const PlanetCard = () => {

    const [planetData, setPlanetData] = useState({})
    const params = useParams();

    const getPlanetData = () => {
        fetch(`https://www.swapi.tech/api/planets/${params.uid}`)
            .then((res) => res.json())
            .then((response) => setPlanetData(response.result.properties))
            .catch((err) => console.log(err))
    };

    useEffect(
        () => { getPlanetData() }, []
    );

    return (
        <div id="indivCard" className="card" style={{ width: "50rem" }}>
            <div id="cardTop">
                <div id="characterPhoto">
                    <img src="https://lumiere-a.akamaihd.net/v1/images/aeos-prime-main_1af6e847.jpeg?region=280%2C0%2C720%2C720" className="card-img-top" alt="..." />
                </div>
                <div id="cardTopText" className="card-body">
                    <h5 className="card-title">{planetData.name && planetData.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div id="traitList">
                <div className="trait">
                    <div>Name:</div>
                    <div>{planetData.name}</div>
                </div>
                <div className="trait">
                    <div>Climate:</div>
                    <div>{planetData.climate && planetData.climate}</div>
                </div>
                <div className="trait">
                    <div>Population:</div>
                    <div>{planetData.population}</div>
                </div>
                <div className="trait">
                    <div>Orbital Period:</div>
                    <div>{planetData.orbital_period}</div>
                </div>
                <div className="trait">
                    <div>Rotation Period:</div>
                    <div>{planetData.rotation_period}</div>
                </div>
                <div className="trait">
                    <div>Diameter:</div>
                    <div>{planetData.diameter}</div>
                </div>
            </div>
        </div>)

}


export default PlanetCard;