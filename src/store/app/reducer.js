import {
	SET_CURRENCY,
	SET_DIET,
	SET_GUESTS,
	SET_INITIALIZE_APP,
	SET_LOADING,
	SET_RECEIPT
} from "./actions";

export const initialState = {
	guests: [],
	diet: [],
	currency: {},
	receipt: {},
	isLoading: false,
	appInitialized: false,
}

export default function app(state = initialState, action) {
	switch (action.type) {
		case SET_LOADING:
			return {...state, isLoading: action.payload}
		case SET_GUESTS:
			return {...state, guests: action.payload}
		case SET_DIET:
			return {...state, diet: action.payload}
		case SET_CURRENCY:
			return {...state, currency: action.payload}
		case SET_RECEIPT:
			return {...state, receipt: action.payload}
		case SET_INITIALIZE_APP:
			return {...state, appInitialized: action.payload}
		default: {
			return state;
		}
	}
}