import {api} from "../../api/api";

export const SET_GUESTS = "SET_GUESTS"
export const SET_CURRENCY = "SET_CURRENCY"
export const SET_DIET = "SET_DIET"
export const SET_VEGAN_PIZZA = "SET_VEGAN_PIZZA"
export const SET_LOADING = "SET_LOADING"


export function setLoading(payload) {
	return {
		type: SET_LOADING,
		payload,
	};
}
export function setGuests(payload) {
	return {
		type: SET_GUESTS,
		payload,
	};
}


// THUNK

export const fetchGuests = () => dispatch => {
	dispatch(setLoading(true))
	api.getPartyGuests()
		.then(res => {
		dispatch(setGuests(res.party));
		dispatch(setLoading(false));
	})
		.catch(e => {
			dispatch(setLoading(false));
		})
}

// export function fetchGuests() {
// 	return async function (dispatch) {
// 		try{
// 			dispatch(setLoading(true));
// 			await api.getPartyGuests().then(res => {
// 				console.log(res)
// 				dispatch(setLoading(false));
// 			})
// 		} catch (e) {
// 			dispatch(setLoading(false));
// 		}
// 	}
//
// }