import React, {useState} from 'react';
import {useApp} from "../hooks";
import {GuestTableItem} from "./GuestTableItem";
import './TotalTable.css'
import {converter} from "../utils";

const TotalTable = () => {

	const {guests, receipt, currency} = useApp()

	const order = Math.floor10(converter(receipt.price, currency), -1)
	const guestEaters = guests.filter(guest => guest.eatsPizza)

	const shareToPay = Math.floor10(order / guestEaters.length, -1)
	const moneyToCollectInit = Math.round10(shareToPay * guestEaters.length, -1)
	const totalOrder = moneyToCollectInit

	const [moneyToCollect, setMoneyToCollect] = useState(moneyToCollectInit)
	const [collectedMoney, setCollectedMoney] = useState(0)

	const handlePayClick = () => {
		if (moneyToCollect !== 0) {
			setMoneyToCollect(moneyToCollect - shareToPay)
			setCollectedMoney(collectedMoney + shareToPay)
		}
	}

	return (
		<div className={'tableWrapper'}>
			<table className={'table'}>
				<thead>
				<tr>
					<th>Name</th>
					<th>Share to pay</th>
					<th>Pay</th>
				</tr>
				</thead>
				<tbody>

				{guestEaters.map(({name}, index) => {
					return (
						<GuestTableItem name={name} key={index} shareToPay={shareToPay}
										handlePayClick={handlePayClick}/>
					)
				})}

				<tr className={'bold'}>
					<td>Total order</td>
					<td>{totalOrder}</td>
				</tr>
				<tr className={'bold'}>
					<td>Money to collect</td>
					<td>{Math.round10(moneyToCollect, -1)} BYN</td>
				</tr>
				<tr className={'bold'}>
					<td>Money collected</td>
					<td>{Math.round10(collectedMoney, -1)} BYN</td>
				</tr>
				</tbody>
			</table>
		</div>
	);
};

export default TotalTable;