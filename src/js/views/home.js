import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharactersList from "../component/characterslist.jsx";
import PlanetsList from "../component/planetslist.jsx";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext.js";
import { useEffect } from "react";


export const Home = (props) => {
	const { store, actions } = useContext(Context);
	let navigate = useNavigate();



	if (store.userID) {
		useEffect(() => { actions.getFavs(store.userID) }, [])
		return (
			<div className="text-center mt-5">
				<CharactersList setFavorites={props.setFavorites} favorites={props.favorites} />
				<PlanetsList setFavorites={props.setFavorites} favorites={props.favorites} />
			</div>
		)
	}
	else navigate("/login");
}