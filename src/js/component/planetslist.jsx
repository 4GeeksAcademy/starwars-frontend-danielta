import React from "react";
import { useState, useEffect } from "react";
import Planets from "./planets.jsx";


const PlanetsList = () => {

    const [ planetList, setPlanetList] = useState([])

    const getPlanets = () => {
        fetch("https://www.swapi.tech/api/planets")
            .then((res) => res.json())
            .then((response) => setPlanetList(response.results))
            .catch((err) => console.log(err))
    };

    useEffect(() => { getPlanets() }, [])

    return (
        <div>
            <div className="title">Planets</div>
            <div className="planetList">
                {planetList?.map((planet, index) => {
                    return (
                        <Planets planet={planet} key={index}/>
                    )
                })}
            </div>
        </div>
    )
}

export default PlanetsList;