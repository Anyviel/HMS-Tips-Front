const Carousel = {
    init: ({ 
        carouselId,
        paginateButtonClassName,
        buttonNextId,
        buttonPrevId
    }) => {
        const carouselDiv = document.getElementById(carouselId);
        const pageDivs = Array.from(carouselDiv.children);
        const buttonsPageDivs  = Array.from(document.getElementsByClassName(paginateButtonClassName))

        const buttonPrev = document.getElementById(buttonPrevId);
        const buttonNext = document.getElementById(buttonNextId);

        const quantity = pageDivs.length;

        let actual = 0;
        const width = pageDivs[0].offsetWidth;

        // adiciona evento de click no botão next
        if (buttonNext) {
            buttonNext.addEventListener('click', () => {
                actual = (actual + 1) % quantity;
                scrolltoActual();
            })
        }

        // adiciona evento de click no botão prev
        if (buttonPrev) {
            buttonPrev.addEventListener('click', () => {
                actual = (actual - 1)  < 0 ? quantity - 1 : actual - 1 ;
                scrolltoActual();
            })
        }

        // adiciona evento de click em botões de paginação
        buttonsPageDivs.forEach(button => {
            button.addEventListener('click', e => {
                actual = parseInt(button.dataset.index);
                scrolltoActual();
            })
        })        

        // scrolla até o elemento atual
        const scrolltoActual = () => {
            console.log('scrooling to ' + actual)
            carouselDiv.scrollTo(width * actual,0);
        }

    }
}