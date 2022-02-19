import React from 'react';
import {PizzaSlice} from "./PizzaSlice";
import {useEndpoint} from "../hooks/useEndpoint";
import {BASE_URL} from "../constants";

export const TotalTable = ({setIsLoading, setAppInitialized, setStartParty}) => {

	let partyGuests = (useEndpoint(`${BASE_URL}/guests`))

	if (partyGuests.pending) {
		setIsLoading(true)
		setAppInitialized(false)
	} else {
		setStartParty(false)
		setIsLoading(false)
		setAppInitialized(true)
	}

	return (
		<div>
			{(partyGuests.pending && <div>Loading...</div>) ||
			(partyGuests.complete && <PizzaSlice partyGuests={partyGuests.data.party}/>)}
		</div>
	);
}