import React from "react";
import "./App.css";
import {useApp} from "./hooks";
import {PizzaSlice} from "./components/PizzaSlice";
import TotalTable from "./components/TotalTable";

export default function App() {

	const {isLoading, startPartyNow, appInitialized} = useApp()

	const onButtonClick = () => {
		startPartyNow()
	}

	return (
		<div className="App">
			<button
				id={'appBtn'}
				className={isLoading ? 'loading appBtn' : 'appBtn'}
				onClick={onButtonClick}
			>
				Load party
			</button>
			{isLoading && <div>Loading</div>}
			{appInitialized && <div>
				<PizzaSlice/>
				<TotalTable/>
			</div>}
		</div>
	);
}

