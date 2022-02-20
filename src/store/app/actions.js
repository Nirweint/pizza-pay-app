import {api} from "../../api/api";
import {
	choosePizzaType,
	createRequestTextForDiets,
	getNumberOfEaters,
	percentOfVegans
} from "../../utils";

export const SET_GUESTS = "SET_GUESTS"
export const SET_CURRENCY = "SET_CURRENCY"
export const SET_DIET = "SET_DIET"
export const SET_RECEIPT = "SET_RECEIPT"
export const SET_LOADING = "SET_LOADING"
export const SET_INITIALIZE_APP = "SET_INITIALIZE_APP"


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

export function setGuestsDiet(payload) {
	return {
		type: SET_DIET,
		payload,
	};
}

export function setReceipt(payload) {
	return {
		type: SET_RECEIPT,
		payload,
	};
}

export function setCurrency(payload) {
	return {
		type: SET_CURRENCY,
		payload,
	};
}
export function setInitializeApp(payload) {
	return {
		type: SET_INITIALIZE_APP,
		payload,
	};
}


// THUNK

export const startPartyNow = () => async dispatch => {
	dispatch(setLoading(true))
	dispatch(setInitializeApp(false))

	try {
		const partyGuestsResponse = await api.getPartyGuests()
		dispatch(setGuests(partyGuestsResponse.party));
		const guest = await partyGuestsResponse.party

		const dietResponse = await api.checkGuestsDiet(createRequestTextForDiets(guest))
		dispatch(setGuestsDiet(dietResponse.diet));

		const veganGuests = await dietResponse.diet

		const slices = getNumberOfEaters(guest)
		const pizzaType = choosePizzaType(percentOfVegans(veganGuests))

		const parallelRequest = async () => {
		let currencyResponse = api.getCurrency()
		let receiptResponse = api.orderPizza(pizzaType,slices)

			let [currency, receipt] = [await currencyResponse, await receiptResponse]
			dispatch(setReceipt(receipt));
			dispatch(setCurrency(currency));
			dispatch(setLoading(false));
			dispatch(setInitializeApp(true))
		}
		parallelRequest()

	} catch (e) {
		console.log(e)
		dispatch(setLoading(false));
		dispatch(setInitializeApp(false))
	}
}