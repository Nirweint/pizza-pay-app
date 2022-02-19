import {SET_GUESTS, SET_LOADING} from "./actions";

export const initialState = {
	guests: [],
	diet: [],
	currency: {},
	veganPizza: {},
	isLoading: false,
}

export default function app(state = initialState, action) {
	switch (action.type) {
		case SET_LOADING:
			return {...state, isLoading: action.payload}
		case SET_GUESTS:
			return {...state, guests: action.payload}
		default: {
			return state;
		}
	}
}