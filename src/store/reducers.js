import appReducer from './app';
import { logger } from './middlewares';


export const initialState = {
	 app: appReducer.initialState,
}

export default function mainReducer(state, action) {
	// Receiving previous state here
	const { app } = state;

	// Receiving current state here
	const currentState = {
		app: appReducer.reducer(app, action),
	};

	// Middlewares
	logger(action, state, currentState);

	return currentState;
}