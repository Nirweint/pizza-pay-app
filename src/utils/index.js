export const createRequestTextForDiets = (guests) => {
	const res = guests.reduce((acc, guest) => {
		const guestString = guest.name.split(' ').join('%20')
		return acc = acc + guestString + ','
	}, '')
	return res.slice(0, -1)
}

export const getNumberOfEaters = (guests) => {
	return guests.reduce((acc, person) => {
		if (person.eatsPizza) {
			acc = acc + 1;
		}
		return acc;
	}, 0);
}

export const percentOfVegans = (guests) => {
	const vegansGuestsArray = guests.filter(guest => guest.isVegan)
	const numberOf = (100 / guests.length) * vegansGuestsArray.length

	return numberOf
}

export const choosePizzaType = (vegansPercent) => {
	let pizzaType = ""
	if (vegansPercent > 51) {
		Math.random() < 0.5 ? pizzaType = "cheese" : pizzaType = "vegan"
	} else {
		pizzaType = "meat"
	}
	return pizzaType
}