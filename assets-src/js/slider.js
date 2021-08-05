/**
 * Content slider (carousel)
 */

let contentSlider = (function () {

	if ('ResizeObserver' in window) {

		// I18N
		let sliderDescription;
		let controlsDescription;
		let previousSlide;
		let nextSlide;
		let slideText;
		let ofText;

		if (document.documentElement.lang === 'ja') {

			sliderDescription = 'カルーセル';
			controlsDescription = 'カルーセルコントロール';
			previousSlide = '前のスライド';
			nextSlide = '次のスライド';
			slideText = 'スライド';
			ofText = '/';

		} else if (document.documentElement.lang === 'zh-hans') {

			sliderDescription = '轮播';
			controlsDescription = '轮播控件';
			previousSlide = '上一张幻灯片';
			nextSlide = '下一张幻灯片';
			slideText = '幻灯片';
			ofText = '之';

		} else {

			sliderDescription = 'carousel'
			controlsDescription = 'carousel controls';
			previousSlide = 'previous slide';
			nextSlide = 'next slide';
			slideText = 'Slide ';
			ofText = ' of ';

		}

		const slider = document.querySelector('[data-component="slider"] section');
		let dir = document.documentElement.getAttribute('dir');

		if (slider) {

			slider.setAttribute('aria-roledescription', sliderDescription);

			let list = slider.querySelector('ul');
			let slides = Array.prototype.slice.call(list.querySelectorAll('li'));

			if (slides.length > 1) {

				list.setAttribute('tabindex', '0');

				for (let slide = 1; slide < slides.length; slide++) {
					slides[slide].classList.add('js-hidden');
				}

				slides.forEach(function (slide, index) {

					let group = slide.querySelector('.slide');
					group.setAttribute('role', 'group');
					group.setAttribute('aria-roledescription', 'slide');
					group.setAttribute('aria-label', slideText + (index + 1) + ofText + slides.length);

				});

				// Add current class to first slide
				slides[0].classList.add('js-current');

				/**
				 * Create container to hold slider controls and aria-live region
				 * @return {HTMLDivElement}
				 */
				function createControlsWrap() {

					let wrap = document.createElement('div');
					wrap.style.display = 'flex';
					wrap.style.alignItems = 'center';
					wrap.style.marginTop = '0.625rem';

					return wrap;

				}

				/**
				 * Create previous and next button controls for slider
				 * @return {HTMLUListElement}
				 */
				function createControls() {

					let controls = document.createElement('ul');
					controls.setAttribute('class', 'slider-controls');
					controls.setAttribute('aria-label', controlsDescription);
					controls.innerHTML = '<li><button class="button button--ghost js-previous with-icon--larger" aria-label="' + previousSlide + '" style="padding:0.4375rem;"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="dist/assets/svg/nav-icons.svg#chevron-right"></use></svg></button></li>'
						+ '<li style="margin-top:0;margin-inline-start:0.25rem;"><button class="button button--ghost js-next with-icon--larger" aria-label="' + nextSlide + '" style="padding:0.4375rem;"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="dist/assets/svg/nav-icons.svg#chevron-right"></use></svg></button></li>';
					controls.style.display = 'inline-flex';

					return controls;

				}

				/**
				 * Create ARIA live region for slider
				 * @return {HTMLDivElement}
				 */
				function createLiveRegion() {

					let liveRegion = document.createElement('div');
					liveRegion.setAttribute('role', 'status');
					liveRegion.setAttribute('aria-live', 'polite');
					liveRegion.setAttribute('class', 'txt-pluto');
					liveRegion.style.display = 'inline-block';
					liveRegion.style.paddingLeft = '0.625rem';
					liveRegion.style.paddingRight = '0.625rem';
					liveRegion.textContent = slideText + 1 + ofText + slides.length;

					return liveRegion;

				}

				let wrap = createControlsWrap();
				let controls = createControls();
				let prev = controls.querySelector('.js-previous');
				let next = controls.querySelector('.js-next');
				prev.disabled = true;
				let liveRegion = createLiveRegion();

				slider.setAttribute('class', 'js-slider');
				slider.parentNode.insertBefore(wrap, slider.nextElementSibling);
				wrap.appendChild(controls);
				wrap.appendChild(liveRegion);

				/**
				 * Set slide positions, which are used in the switchSlide function
				 */
				function setSlidePositions() {

					let slideWidth = slides[0].getBoundingClientRect().width;
					for (let slide = 0; slide < slides.length; slide++) {

						slides[slide].style.left = slideWidth * slide + 'px';

					}

				}

				setSlidePositions();

				/**
				 * Switch between slides
				 * @param {number} currentSlideIndex
				 * @param {number} targetSlideIndex
				 */
				function switchSlide(currentSlideIndex, targetSlideIndex) {

					let currentSlide = slides[currentSlideIndex];
					let targetSlide = slides[targetSlideIndex];

					// Switches to the correct slide
					let destination = getComputedStyle(targetSlide).left;

					if (dir === 'rtl') {

						list.style.transform = 'translateX(' + destination + ')';

					} else {

						list.style.transform = 'translateX(-' + destination + ')';

					}

					currentSlide.classList.toggle('js-current');
					currentSlide.classList.toggle('js-hidden');
					currentSlide.removeAttribute('tabindex');
					targetSlide.classList.toggle('js-current');
					targetSlide.classList.toggle('js-hidden');
					targetSlide.setAttribute('tabindex', '-1');
					targetSlide.focus();

					// Disable previous/next buttons
					if (targetSlideIndex === 0) {

						prev.setAttribute('disabled', true);
						next.removeAttribute('disabled');

					} else if (targetSlideIndex === slides.length - 1) {

						prev.removeAttribute('disabled');
						next.setAttribute('disabled', true);

					} else {

						prev.removeAttribute('disabled');
						next.removeAttribute('disabled');

					}

					// Announce selected slide to screen reader
					liveRegion.textContent = slideText + (targetSlideIndex + 1) + ofText + slides.length;

				}

				/**
				 * Get the current slide index
				 * @return {number}
				 */
				function getCurrentSlideIndex() {

					let currentSlide = list.querySelector('.js-current');
					return slides.findIndex(function (slide) {
						return slide === currentSlide;
					});

				}

				document.addEventListener('click', function (event) {

					if (event.target.matches('.js-next')) {

						let currentSlideIndex = getCurrentSlideIndex();
						let nextSlideIndex = currentSlideIndex + 1;
						switchSlide(currentSlideIndex, nextSlideIndex);

					}

					if (event.target.matches('.js-previous')) {

						let currentSlideIndex = getCurrentSlideIndex();
						let previousSlideIndex = currentSlideIndex - 1;
						switchSlide(currentSlideIndex, previousSlideIndex);

					}

				}, false);

				list.addEventListener('keydown', function (event) {
					let key = event.key;
					if (key !== 'ArrowLeft' && key !== 'ArrowRight') return;

					let currentSlideIndex = getCurrentSlideIndex();
					let targetSlideIndex;

					if (dir === 'rtl') {

						if (key === 'ArrowRight') {

							targetSlideIndex = currentSlideIndex - 1;

						}

						if (key === 'ArrowLeft') {

							targetSlideIndex = currentSlideIndex + 1;

						}

					} else {

						if (key === 'ArrowLeft') {

							targetSlideIndex = currentSlideIndex - 1;

						}

						if (key === 'ArrowRight') {

							targetSlideIndex = currentSlideIndex + 1;

						}

					}

					if (targetSlideIndex < 0) {

						targetSlideIndex = 0;

					}

					if (targetSlideIndex > slides.length - 1) {

						targetSlideIndex = slides.length - 1;

					}

					switchSlide(currentSlideIndex, targetSlideIndex); // Focus on the correct slide

				});

				// Use resize Observer API to reset slide positions and move current slide fully into view
				const slideObserver = new ResizeObserver(callback);

				function callback() {

					setSlidePositions();

					let targetSlide = slider.querySelector('.js-current');
					let destination = getComputedStyle(targetSlide).left;

					if (dir === 'rtl') {

						list.style.transform = 'translateX(' + destination + ')';

					} else {

						list.style.transform = 'translateX(-' + destination + ')';

					}

				}

				slideObserver.observe(slider);

			}

		}

	}

})();