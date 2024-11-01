import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharactersList from "../component/characterslist.jsx";
import PlanetsList from "../component/planetslist.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<CharactersList/>
		<PlanetsList/>
	</div>
);
