import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { useState } from "react";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Charactercard from "./component/charactercard.jsx";
import PlanetCard from "./component/planetcard.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const [ favorites, setFavorites ] = useState([])

	const addToFavs = (name, uid, type)=>{
		let newFav = {name:name, uid:uid, type:type}
		setFavorites([...favorites, newFav]);
	}

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home addToFavs={addToFavs} setFavorites={setFavorites} favorites={favorites}/>} />
						<Route path="/planet/:uid" element={<PlanetCard />} />
						<Route path="/character/:uid" element={<Charactercard />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
