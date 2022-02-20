import React, {useState} from 'react';
import {useApp} from "../hooks";

export const GuestTableItem = ({name, shareToPay, handlePayClick}) => {

	const {diet} = useApp()

	const [isPaid, setIsPaid] = useState(false)

	const onPayClick = (e) => {
		handlePayClick(e.currentTarget)
		setIsPaid(true)
	}

	const {isVegan} = diet.find(guest => guest.name === name)

	return (
		<tr key={name}>
			<td >
				{isVegan ? <span style={{color: "#26ff26"}}>{name}</span> :
					<span>{name}</span>}
			</td>
			<td >
				{shareToPay}
			</td>
			<td style={{display: 'flex', justifyContent: 'center'}}>
				<button
					disabled={isPaid}
					onClick={onPayClick}
					style={{width: '50px'}}
				>
					{isPaid ? 'PAID' : 'PAY'}
				</button>
			</td>
		</tr>
	);
};