import { array } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [],
			favorites: [],
			characterData: [],
			planetData: [],
			characterList: [],
			planetList: [],
			userID: null
		},
		actions: {

			getInitial: () => {
				fetch("https://musical-space-invention-v66w7566gw5x3w74r-3000.app.github.dev/get/initial")
					.then((res) => res.json())
					.then((response) => {setStore({characterList: response.character_records, planetList: response.planet_records})})
					.catch((err) => console.log(err))
			},

			getCharacters: () => {
				fetch("https://musical-space-invention-v66w7566gw5x3w74r-3000.app.github.dev/characters")
					.then((res) => res.json())
					.then((response) => setStore({ characterList: response }))
					.catch((err) => console.log(err))
			},

			getPlanets: () => {
				fetch("https://musical-space-invention-v66w7566gw5x3w74r-3000.app.github.dev/planets")
					.then((res) => res.json())
					.then((response) => setStore({ planetList: response }))
					.catch((err) => console.log(err))
			},

			getCharacterData: (id) => {
				fetch(`https://musical-space-invention-v66w7566gw5x3w74r-3000.app.github.dev/characters/${id}`)
					.then((res) => res.json())
					.then((response) => setStore({ characterData: response }))
					.catch((err) => console.log(err))
			},

			getPlanetData: (id) => {
				fetch(`https://musical-space-invention-v66w7566gw5x3w74r-3000.app.github.dev/planets/${id}`)
					.then((res) => res.json())
					.then((response) => setStore({ planetData: response }))
					.catch((err) => console.log(err))
			},

			getUser: (email, password) => {
				fetch(`https://musical-space-invention-v66w7566gw5x3w74r-3000.app.github.dev/login`, {
					method: 'POST',
					body: JSON.stringify(
						{
							"email": email,
							"password": password 
						}
					),
					headers: {
						'Content-type': 'application/json'
					}
				})
					.then(res => {
						if (!res.ok) throw Error(res.statusText);
						return res.json();
					})
					.then((response) => setStore({ userID: response.id }))
					.catch(error => console.error(error));
				
			},

			createUser: (email, password) => {
				fetch("https://musical-space-invention-v66w7566gw5x3w74r-3000.app.github.dev/users", {
					method: 'POST',
					body: JSON.stringify(
						{
							"email": email,
							"password": password
						}
					),
					headers: {
						'Content-type': 'application/json'
					}
				})
					.then(res => {
						if (!res.ok) throw Error("user not created");
						return res.json();
					})
					.then((response) => null)
						// getActions().getUser(email, password))
					.catch(error => console.error(error));
			},

			getFavs: (id) => {
				fetch(`https://musical-space-invention-v66w7566gw5x3w74r-3000.app.github.dev/users/${id}/favorites`)
					.then((res) => res.json())
					.then((response) => setStore({ favorites: response }))
					.catch((err) => console.log(err))
			},

			addCharToFavs: (character) => {
				fetch(`https://musical-space-invention-v66w7566gw5x3w74r-3000.app.github.dev/favorite/character/${character.id}`, {
					method: 'POST',
					body: JSON.stringify(
						{
							"name": character.name,
							"user_id": getStore().userID,
							"character_id": character.id,
							"planet_id": 0
						}
					),
					headers: {
						'Content-type': 'application/json'
					}
				})
					.then(res => {
						if (!res.ok) throw Error(res.statusText);
						return res.json();
					})
					.then(response => getActions().getFavs(getStore().userID))
					.catch(error => console.error(error));
			},

			deleteCharFav: (id) => {
				fetch(`https://musical-space-invention-v66w7566gw5x3w74r-3000.app.github.dev/favorite/character/${getStore().userID}/${id}`, {
					method: 'DELETE'
				})
					.then(res => {
						if (!res.ok) throw Error(res.statusText);
						getActions().getFavs(getStore().userID);
					})
					.catch(error => console.error(error));
			},

			addPlanToFavs: (planet) => {
				fetch(`https://musical-space-invention-v66w7566gw5x3w74r-3000.app.github.dev/favorite/planet/${planet.id}`, {
					method: 'POST',
					body: JSON.stringify(
						{
							"name": planet.name,
							"user_id": getStore().userID,
							"character_id": 0,
							"planet_id": planet.id
						}
					),
					headers: {
						'Content-type': 'application/json'
					}
				})
					.then(res => {
						if (!res.ok) throw Error(res.statusText);
						return res.json();
					})
					.then(response => getActions().getFavs(getStore().userID))
					.catch(error => console.error(error));
			},

			deletePlanFav: (id) => {
				fetch(`https://musical-space-invention-v66w7566gw5x3w74r-3000.app.github.dev/favorite/planet/${getStore().userID}/${id}`, {
					method: 'DELETE'
				})
					.then(res => {
						if (!res.ok) throw Error(res.statusText);
						getActions().getFavs(getStore().userID);
					})
					.catch(error => console.error(error));
			},

			

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;


// setCurrentCharId: (id) => {
// 	setStore({ currentCharId: id })
// },

// addCharToFavs: (id) => {
// 	fetch(`https://musical-space-invention-v66w7566gw5x3w74r-3000.app.github.dev/favorite/character/${id}`)
// 		.then((res) => res.json())
// 		.then((response) => setStore({ favorites: response }))
// 		.catch((err) => console.log(err))
// },

// addPlanToFavs: (id) => {
// 	fetch(`https://musical-space-invention-v66w7566gw5x3w74r-3000.app.github.dev/favorite/planet/${id}`)
// 		.then((res) => res.json())
// 		.then((response) => setStore({ favorites: response }))
// 		.catch((err) => console.log(err))
// },


// addToFavs: (name, uid, type) => {
// 	const exist = getStore().favorites.find((favorite) => favorite.name === name)
// 	if (!exist) {
// 		let newFav = { name: name, uid: uid, type: type };
// 		let newArr = [...getStore().favorites, newFav];
// 		setStore({ favorites: newArr });
// 	} else { console.log("favorite exists") }
// },
// deleteFav: (name) => {
// 	//filter a faovrite from copy of favorites array
// 	let filterArr = getStore().favorites.filter(
// 		(element) => element.name != name);
// 	setStore({
// 		favorites: filterArr
// 	})
// },
