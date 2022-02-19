import React, {useState} from "react";
import "./App.css";
import {useApp} from "./hooks";
import {PizzaSlice} from "./components/PizzaSlice";

export default function App() {

	const {isLoading, fetchGuests} = useApp()

	const [startParty, setStartParty] = useState(false)
	// const [isLoading, setIsLoading] = useState(false)
	const [appInitialized, setAppInitialized] = useState(false)

	const onButtonClick = () => {
		fetchGuests()
		setStartParty(true)
	}


	return (
		<div className="App">
			<button
				id="load-btn"
				className={isLoading ? 'loading' : ''}
				onClick={onButtonClick}
			>
				Load party
			</button>
			{isLoading && <div>Loading</div>}
			{startParty && <PizzaSlice/>}
		</div>
	);
}

