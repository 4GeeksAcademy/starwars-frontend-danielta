import { array } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [],
			favorites: []
		},
		actions: {

			addToFavs: (name, uid, type) => {
				const exist = getStore().favorites.find((favorite) => favorite.name === name)
				if (!exist) {
					let newFav = { name: name, uid: uid, type: type };
					let newArr = [...getStore().favorites, newFav];
					setStore({ favorites: newArr });
				} else { console.log("favorite exists") }
			},
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
