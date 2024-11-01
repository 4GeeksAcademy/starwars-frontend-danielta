import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Characters = (props) => {
    return (
        <div className="card" style={{ width: "25rem" }}>
            <img src="https://lumiere-a.akamaihd.net/v1/images/cad-bane-main_0ea0685c.jpeg?region=169%2C1%2C542%2C540" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.character.name}</h5>
                <Link to={"/character/" + props.index} className="btn btn-primary">More Details</Link>
            </div>
        </div>)
}

export default Characters;