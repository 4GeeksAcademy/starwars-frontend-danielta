import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Characters = (props) => {

    const { store, actions } = useContext(Context);
    const { clickCount, setClickCount } = useState(0);
    const clicker = () => {
        if (clickCount === 0) {
            actions.addToFavs(props.character.name, props.character.uid, "people");
            setClickCount = clickCount + 1
        } else {
            actions.deleteFav(favorite.name);
            setClickCount = 0
        }
    }

    return (
        <div className="card" style={{ width: "15rem" }}>
            <img id="charImg" src="https://lumiere-a.akamaihd.net/v1/images/cad-bane-main_0ea0685c.jpeg?region=169%2C1%2C542%2C540" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.character.name}</h5>
                <Link to={"/character/" + props.character.uid} className="btn btn-primary">More Details</Link>
                <button className="favorite btn btn-warning bi bi-star" onClick={()=>clicker()}></button> 
            </div>
        </div>)
}

export default Characters;