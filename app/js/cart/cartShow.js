const cartShow = () => {
	const cart = document.querySelector('div.cart');
	const close = document.querySelector('button.cart__close');
	const body = document.querySelector('body');
	const button = document.querySelector('div.header__basket');
	const overlay = document.querySelector('div.page-overlay');

	button.addEventListener('click', () => {
		body.classList.add('no-scroll');
		cart.style.display = 'block';
		overlay.style.display = 'block';
	});

	close.addEventListener('click', () => {
		body.classList.remove('no-scroll');
		cart.style.display = 'none';
		overlay.style.display = 'none';
	});

	overlay.addEventListener('click', () => {
		body.classList.remove('no-scroll');
		cart.style.display = 'none';
		overlay.style.display = 'none';
	});
};

export { cartShow };
