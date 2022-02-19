import {BASE_URL} from "../constants";

export const api = {
	getPartyGuests() {
		return fetch(`${BASE_URL}/guests`)
			.then((response) => response.json())
	},
	getCurrency() {
		return fetch(`${BASE_URL}/currency`)
			.then((response) => response.json())
	},
	checkGuestsOnVegans(names) {
		return fetch(`${BASE_URL}/world-diets-book/${names}`)
			.then((response) => response.json())
	},
	orderPizza(type, slices) {
		return fetch(`${BASE_URL}/order/${type}/${slices}`)
			.then((response) => response.json())
	},

}