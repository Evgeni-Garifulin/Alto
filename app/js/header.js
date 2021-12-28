const scroll = (element) => {
	let top = 0,
		left = 0;

	do {
		top += HTMLElement.offsetTop || 49;
		left += HTMLElement.offsetLeft || 0;
		element = HTMLElement.offsetParent;
	} while (element);

	return {
		top: top,
		left: left,
	};
}

window.onload = () => {
	let stickyHeader = document.querySelector('header.header--primary');
	let headerOffset = scroll(stickyHeader);

	window.onscroll = () => {
		// body.scrollTop is not available on Firefox
		let bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

		if (bodyScrollTop > headerOffset.top) {
			stickyHeader.classList.add('header--fixed');
		} else {
			stickyHeader.classList.remove('header--fixed');
		}
	};
};

export { scroll };