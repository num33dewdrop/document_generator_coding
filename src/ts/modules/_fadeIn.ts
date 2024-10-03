export const fadeIn = (elem: HTMLElement, display: string = 'block', duration: number = 300, delay: number = 30): void => {
    if (elem.style.display === 'none' || elem.style.display === '') {
        const coefficient = 1 / (duration / delay);
        elem.style.display = display;
        elem.style.opacity = String(0);
        let opacity = Number(elem.style.opacity);
        const animation = setInterval(() => {
            opacity += coefficient;
            elem.style.opacity = String(opacity);
            if (opacity >= 1) {
                elem.style.opacity = String(1);
                clearInterval(animation);
            }
        }, delay);
    }
};

export const fadeOut = (elem: HTMLElement, duration: number = 300, delay: number = 40): void => {
    if (elem.style.display !== 'none') {
        const coefficient = 1 / (duration / delay);
        elem.style.opacity = String(1);
        let opacity = Number(elem.style.opacity);
        const animation = setInterval(() => {
            opacity -= coefficient;
            elem.style.opacity = String(opacity);
            if (opacity <= 0) {
                elem.style.display = 'none';
                elem.style.opacity = String(0);
                clearInterval(animation);
            }
        }, delay);
    }
};