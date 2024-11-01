import React from "react";
import { useState } from "react";

const Planets = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://lumiere-a.akamaihd.net/v1/images/aeos-prime-main_1af6e847.jpeg?region=280%2C0%2C720%2C720" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.planet.name}</h5>
                <a href="#" className="btn btn-primary">More Details</a>
            </div>
        </div>
    )

}

export default Planets;