const cartCounter = () => {
	const buttonMinus = document.querySelectorAll('button.cart__counter-button--minus');
	const buttonPlus = document.querySelectorAll('button.cart__counter-button--plus');

	Array.prototype.forEach.call(buttonMinus, function (v) {
		v.addEventListener('click', dec);
	});

	Array.prototype.forEach.call(buttonPlus, function (v) {
		v.addEventListener('click', inc);
	});

	function dec() {
		let div = this.parentElement;
		let input = div.children.item(1);
		if(parseInt(input.value) > 1) {
		input.setAttribute('value', (parseInt(input.getAttribute('value')) - 1).toString());
		}
	}

	function inc() {
		let div = this.parentElement;
		let input = div.children.item(1);
			input.setAttribute('value', (parseInt(input.getAttribute('value')) + 1).toString());
	}
};

export { cartCounter };
