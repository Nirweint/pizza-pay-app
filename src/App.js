import React from "react";
import "./App.css";
import {PizzaSlice} from "./components/PizzaSlice";
import {useEndpoint} from "./hooks/useEndpoint";
import {BASE_URL} from "./constants";

export default function App() {

	// const [partyGuests, setPartyGuests] = useState(null)
	let partyGuests = (useEndpoint(`${BASE_URL}/guests`))

	const onButtonClick = () => {

	}

	return (
		<div className="App">
			<button id="load-btn" className={partyGuests.pending ? 'loading' : ''}
					onClick={onButtonClick}>Load party
			</button>
			{(partyGuests.pending && <div>Loading...</div>) ||
			(partyGuests.complete && <PizzaSlice partyGuests={partyGuests.data.party}/>)}

		</div>
	);
}

