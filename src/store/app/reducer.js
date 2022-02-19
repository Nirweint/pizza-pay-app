export const initialState = {
	guests: [],
	diet: [],
	currency: {},
	veganPizza: {},
	isLoading: false,
}

export default function app(state = initialState, action) {
	switch (action.type) {
		case 'SET_LOADING':
			return {...state, isLoading: true}

		default: {
			return state;
		}
	}
}