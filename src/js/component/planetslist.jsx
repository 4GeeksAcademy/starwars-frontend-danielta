import React from "react";
import { useState, useEffect } from "react";
import Planets from "./planets.jsx";
import { useContext } from "react";
import { Context } from "../store/appContext";


const PlanetsList = () => {

    const { store, actions } = useContext(Context);
    // const [ planetList, setPlanetList] = useState([])

    // const getPlanets = () => {
    //     fetch("https://www.swapi.tech/api/planets")
    //         .then((res) => res.json())
    //         .then((response) => setPlanetList(response.results))
    //         .catch((err) => console.log(err))
    // };

    useEffect(() => { actions.getPlanets() }, [])

    return (
        <div>
            <div className="title">Planets</div>
            <div className="container">
                <div className="planetList">
                    {store.planetList?.map((planet, index) => {
                        return (
                            <Planets planet={planet} key={index}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PlanetsList;