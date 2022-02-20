import React, {useState} from 'react';
import {useApp} from "../hooks";

export const GuestTableItem = ({name, shareToPay, onPayClick}) => {

	const {diet} = useApp()

	const [isPaid, setIsPaid] = useState(false)

	const handleOnPayClick = (e) => {
		onPayClick(e.currentTarget.value)
		setIsPaid(true)
	}

	const {isVegan} = diet.find(guest => guest.name === name)

	return (
		<tr key={name}>
			<td style={{padding: "5px"}}>
				{isVegan ? <span style={{color: "#26ff26"}}>{name}</span> :
					<span>{name}</span>}
			</td>
			<td style={{padding: "5px 20px"}}>
				{shareToPay}
			</td>
			<td style={{padding: "5px"}}>
				<button disabled={isPaid} onClick={handleOnPayClick}>
					{isPaid ? 'PAID' : 'PAY'}
				</button>
			</td>
		</tr>
	);
};