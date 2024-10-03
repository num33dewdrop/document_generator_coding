interface ToggleElements {
    handleClass: string;
    parentClass: string;
}
export default class ToggleIsOpen {
    private readonly parent: HTMLElement | null;
    private readonly handle: HTMLElement | null;
    private readonly target!: Element | null;
    private bg: HTMLDivElement = document.createElement('div');

    constructor({handleClass, parentClass}:ToggleElements) {
        this.parent = document.querySelector(`.${parentClass}`);
        this.handle = document.querySelector(`.${handleClass}`);
        if (!this.warnIfNull(this.parent, "Handle element not found.")) return;
        if (!this.warnIfNull(this.handle, "Handle element not found.")) return;

        this.target = this.handle.nextElementSibling;
        if (!this.warnIfNull(this.target, "Handle element not found.")) return;

        this.bg.classList.add('c-menu__bg');
        this.bg.addEventListener('touchstart', ()=> this.onHideEvent());
        this.parent.appendChild(this.bg);

        this.handle.addEventListener('click', (e:Event) => {
            e.stopPropagation();
            if (!this.warnIfNull(this.handle, "Handle element not found.")) return;
            if (!this.warnIfNull(this.target, "Handle element not found.")) return;
            this.handle.classList.toggle('is-open');
            this.target.classList.toggle('is-open');
            this.bg.classList.toggle('is-open');
        });
    }

    private onHideEvent() {
        if (!this.warnIfNull(this.handle, "Handle element not found.")) return;
        if (!this.warnIfNull(this.target, "Handle element not found.")) return;
        this.handle.classList.remove('is-open');
        this.target.classList.remove('is-open');
        this.bg.classList.remove('is-open');
    }

    private warnIfNull<T>(element: T | null, msg: string): element is T {
        if (!element) {
            console.warn(msg);
            return false;
        }
        return true;
    }
}