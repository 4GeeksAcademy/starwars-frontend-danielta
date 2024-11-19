import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const deleteFav = (favorite_name) => {
		let fav = store.favorites.find((entry) => entry.name == favorite_name)
		if (fav.character_id){
			actions.deleteCharFav(fav.id)
		}
		else if (fav.planet_id){
			actions.deletePlanFav(fav.id)
		}
	}

	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/75px-Star_Wars_Logo.svg.png" />
			</Link>
			<div id="dropDown" className="nav-item dropdown dropright">
				<a className="nav-link dropdown-toggle btn btn-primary" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white" }}>Favorites</a>
				<ul className="dropdown-menu">
					{store.favorites.map((favorite) => {
						return <li id="favItem" key={favorite.id}>{favorite.name}<button id="delete" className="bi bi-trash-fill" onClick={() => deleteFav(favorite.name)}></button></li>
					})}
				</ul>
			</div>
		</nav>
	);
};
