import React from "react";
import "./App.css";
import {useApp} from "./hooks";
import {PizzaSlice} from "./components/PizzaSlice";

export default function App() {

	const {isLoading, startPartyNow, appInitialized} = useApp()

	const onButtonClick = () => {
		startPartyNow()
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
			{appInitialized && <PizzaSlice/>}
		</div>
	);
}

