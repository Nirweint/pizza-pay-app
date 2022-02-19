import {api} from "../../api/api";

export function setLoading(payload) {
	return {
		type: 'SET_LOADING',
		payload,
	};
}
export function setGuests(payload) {
	return {
		type: 'SET_GUESTS',
		payload,
	};
}

export function fetchGuests() {
	return async function (dispatch) {
		dispatch(setLoading(true));
		try{
			await api.getPartyGuests();
			dispatch(setLoading(false));
		} catch (e) {
			dispatch(setLoading(false));
		}
	}

}

const SET_GUESTS = "SET_GUESTS"
const SET_CURRENCY = "SET_CURRENCY"
const SET_DIET = "SET_DIET"
const SET_VEGAN_PIZZA = "SET_VEGAN_PIZZA"

// export function handleLogin(userName, listName) {
// 	return async function (dispatch) {
// 		dispatch(login());
// 		try {
// 			await fakeLogin(userName, listName);
// 			dispatch(success(userName, listName));
// 		} catch (error) {
// 			dispatch(failed(error.response.data));
// 		}
// 	};
// }
