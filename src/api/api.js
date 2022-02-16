import {BASE_URL} from "../constants";

export const api = {
	getPartyGuests() {
		return fetch(`${BASE_URL}/guests`)
	},
	getCurrency() {
		return fetch(`${BASE_URL}/currency`)
	},
	checkGuestsOnVegans(names) {
		return fetch(`${BASE_URL}/world-diets-book/${names}`)
	},
	orderPizza(type, slices) {
		return fetch(`${BASE_URL}/order/${type}/${slices}`)
	},

}