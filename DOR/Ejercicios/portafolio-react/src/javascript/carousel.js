(() => {

    const selectors = {
        buttonCarousel: '.react-slideshow-fadezoom-images-wrap',
        attribute: 'aria-roledescription',
        buttonNext: '.nav.default-nav[data-type="next"]',
        buttonPrev: '.nav.default-nav[data-type="prev"]',
        root: '#root',
        svg: 'svg'
    }

    const init = () => {
        setTimeout(() => {
            const element = document.querySelector('div[dir]');
            element.removeAttribute('aria-roledescription');

            const button = document.querySelector(selectors.buttonCarousel);
            const children = button.children;

            Array.from(children).forEach(b => {
                b.removeAttribute(selectors.attribute);
            });

            const buttonNext = document.querySelector(selectors.buttonNext);
            const svgElementNext = buttonNext.querySelector(selectors.svg);
            svgElementNext.setAttribute('role', 'img');
            svgElementNext.setAttribute('aria-label', 'Next Slide');
            
            const buttonPrev = document.querySelector(selectors.buttonPrev);
            const svgElementPrev = buttonPrev.querySelector(selectors.svg);
            svgElementPrev.setAttribute('role', 'img');
            svgElementPrev.setAttribute('aria-label', 'Next Slide');
            

        }, 1000);
    }

    document.addEventListener("DOMContentLoaded", init);
})();