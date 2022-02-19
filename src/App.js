import React, {useState} from "react";
import "./App.css";
import {TotalTable} from "./components/TotalTable";
import {useApp} from "./hooks";

export default function App() {

	const {isLoading} = useApp()
	console.log(isLoading)

	const [startParty, setStartParty] = useState(false)
	// const [isLoading, setIsLoading] = useState(false)
	const [appInitialized, setAppInitialized] = useState(false)

	const onButtonClick = () => {
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
			{appInitialized ?
				<TotalTable
					// setIsLoading={setIsLoading}
					setAppInitialized={setAppInitialized}
					setStartParty={setStartParty}
				/>
				: null
			}
		</div>
	);
}

