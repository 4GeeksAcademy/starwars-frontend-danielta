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
			userID: 3
		},
		actions: {

			// setCurrentCharId: (id) => {
			// 	setStore({ currentCharId: id })
			// },

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

			getFavs: (id) => {
				fetch(`https://musical-space-invention-v66w7566gw5x3w74r-3000.app.github.dev/users/${id}/favorites`)
					.then((res) => res.json())
					.then((response) => setStore({ favorites: response }))
					.catch((err) => console.log(err))
			},

			addCharToFavs: (id) => {
				fetch(`https://musical-space-invention-v66w7566gw5x3w74r-3000.app.github.dev/favorite/character/${id}`)
					.then((res) => res.json())
					.then((response) => setStore({ favorites: response }))
					.catch((err) => console.log(err))
			},

			addCharToFavs: (id) => {
				fetch(`https://musical-space-invention-v66w7566gw5x3w74r-3000.app.github.dev/favorite/character/${id}`, {
					method: 'POST',
					body: JSON.stringify(
						{
							"name": character.name,
							"user_id": contact.phone,
							"character_id": ,
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
					.then(response => getActions().getContactList())
					.catch(error => console.error(error));
			},

			addPlanToFavs: (id) => {
				fetch(`https://musical-space-invention-v66w7566gw5x3w74r-3000.app.github.dev/favorite/planet/${id}`)
					.then((res) => res.json())
					.then((response) => setStore({ favorites: response }))
					.catch((err) => console.log(err))
			},

			// addToFavs: (name, uid, type) => {
			// 	const exist = getStore().favorites.find((favorite) => favorite.name === name)
			// 	if (!exist) {
			// 		let newFav = { name: name, uid: uid, type: type };
			// 		let newArr = [...getStore().favorites, newFav];
			// 		setStore({ favorites: newArr });
			// 	} else { console.log("favorite exists") }
			// },
			deleteFav: (name) => {
				//filter a faovrite from copy of favorites array
				let filterArr = getStore().favorites.filter(
					(element) => element.name != name);
				setStore({
					favorites: filterArr
				})
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
