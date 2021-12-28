const slider = () => {
	const preview = document.querySelectorAll('.promotion__preview');
	const content = document.querySelectorAll('.promotion__content');
	const images = document.querySelectorAll('.promotion__content-image');

	let activePreview = 0;

	preview[activePreview].classList.add('promotion__preview--active');
	content[activePreview].classList.add('promotion__content--active');
	images[activePreview].classList.add('promotion__content-image--active');

	preview.forEach((item, i) => {
		item.addEventListener('click', () => {
			preview[activePreview].classList.remove('promotion__preview--active');
			content[activePreview].classList.remove('promotion__content--active');
			images[activePreview].classList.remove('promotion__content-image--active');

			activePreview = i;

			preview[activePreview].classList.add('promotion__preview--active');
			content[activePreview].classList.add('promotion__content--active');
			images[activePreview].classList.add('promotion__content-image--active');
		});
	});
};

export { slider };
