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
	return (100 / guests.length) * vegansGuestsArray.length

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

export const converter = (price, currency) => {
	if (price.endsWith("USD")) {
		return Number(price.slice(0,-4)) * currency.USD
	} else if (price.endsWith("EUR")) {
		return Number(price.slice(0,-4)) * currency.EUR
	} else {
		return Number(price.slice(0,-4))
	}
}


(function() {
	/**
	 * Корректировка округления десятичных дробей.
	 *
	 * @param {String}  type  Тип корректировки.
	 * @param {Number}  value Число.
	 * @param {Integer} exp   Показатель степени (десятичный логарифм основания корректировки).
	 * @returns {Number} Скорректированное значение.
	 */
	function decimalAdjust(type, value, exp) {
		// Если степень не определена, либо равна нулю...
		if (typeof exp === 'undefined' || +exp === 0) {
			return Math[type](value);
		}
		value = +value;
		exp = +exp;
		// Если значение не является числом, либо степень не является целым числом...
		if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
			return NaN;
		}
		// Сдвиг разрядов
		value = value.toString().split('e');
		value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
		// Обратный сдвиг
		value = value.toString().split('e');
		return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
	}

	// Десятичное округление к ближайшему
	if (!Math.round10) {
		Math.round10 = function(value, exp) {
			return decimalAdjust('round', value, exp);
		};
	}
	// Десятичное округление вниз
	if (!Math.floor10) {
		Math.floor10 = function(value, exp) {
			return decimalAdjust('floor', value, exp);
		};
	}
	// Десятичное округление вверх
	if (!Math.ceil10) {
		Math.ceil10 = function(value, exp) {
			return decimalAdjust('ceil', value, exp);
		};
	}
})();