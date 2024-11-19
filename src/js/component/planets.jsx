import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Planets = (props) => {

    const { store, actions } = useContext(Context);
    const clicker = () => {
        let favorite = store.favorites.find((favorite) => favorite.name == props.planet.name)
        if (!favorite) {
            actions.addPlanToFavs(props.planet);
        } else {
            actions.deletePlanFav(favorite.id)
        }
    };
    return (
        <div className="card" style={{ width: "15rem" }}>
            <img id="charImg" src="https://lumiere-a.akamaihd.net/v1/images/aeos-prime-main_1af6e847.jpeg?region=280%2C0%2C720%2C720" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.planet.name}</h5>
                <Link to={"/planet/" + props.planet.id} className="btn btn-primary">More Details</Link>
                <button className="favorite btn btn-warning bi bi-star" onClick={() => clicker()}></button>
            </div>
        </div>
    )

}

export default Planets;