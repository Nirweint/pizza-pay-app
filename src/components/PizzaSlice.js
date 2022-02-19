import React from 'react'
import {useApp} from "../hooks";

export const PizzaSlice = () => {

	const { guests } = useApp()

	let numberOfEaters = guests.reduce((acc, person) => {
		if (person.eatsPizza) {
			acc = acc + 1;
		}
		return acc;
	}, 0);

	let participants = guests.length;
	let slices = numberOfEaters / 2;
	let slicesDeg = 360 / numberOfEaters;

	const sliceArray = []

	for (let i = 0; i < slices; i++) {
		sliceArray.push(slicesDeg * i)
	}

	return (
		<div>
			<p>{`There will be ${participants} participants. Only ${numberOfEaters} of them will be eating pizza...`}</p>
			<div className='pizza'>
				{sliceArray.map((item, index) => {
					return <Slice key={index} deg={item}/>
				})}
			</div>
		</div>
	)
}

const Slice = ({deg}) => {
	return (
		<div className='slice' style={{transform: `rotate(${deg}deg)`}}/>
	)
}