interface ImgDropOptions {
    labelClass: string;
    inputClass: string;
}

export default class ImgDrop {
    private nodeList: NodeListOf<HTMLLabelElement>;
    private readonly inputClass: string;

    constructor({ labelClass, inputClass }: ImgDropOptions) {
        this.nodeList = document.querySelectorAll(`.${labelClass}`);
        this.inputClass = inputClass;
        this.setupEventListeners();
    }

    private setupEventListeners(): void {
        this.nodeList.forEach(elem => {
            const fileInput = elem.querySelector(`.${this.inputClass}`);
            if (fileInput instanceof HTMLInputElement) {
                elem.addEventListener('dragover', (e: Event) => this.onDragOver(e, elem));
                elem.addEventListener('dragleave', (e: Event) => this.onDragLeave(e, elem));
                fileInput.addEventListener('change', (e: Event) => this.onFileChange(e, elem));
            }
        });
    }

    private onDragOver(e: Event, elem: HTMLElement): void {
        e.stopPropagation();
        e.preventDefault();
        elem.classList.add('is-hover');
    }

    private onDragLeave(e: Event, elem: HTMLElement): void {
        e.stopPropagation();
        e.preventDefault();
        elem.classList.remove('is-hover');
    }

    private onFileChange(e: Event, elem: HTMLElement): void {
        elem.classList.remove('is-hover');
        const fileInput = e.currentTarget as HTMLInputElement;
        const file = fileInput.files?.[0];
        const img = fileInput.nextElementSibling;

        if (file && img instanceof HTMLImageElement) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                img.src = fileReader.result as string;
            };
            fileReader.readAsDataURL(file);
        }
    }
}
