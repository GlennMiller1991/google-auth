import {getPromise} from "./utils/index.js";
import {authApiSrc} from "./constants.js";
import {IGoogle} from "./contracts/index.js";

declare let google: IGoogle | undefined;

export default abstract class GoogleAuth {
    private static isImportWas: boolean;
    private static tag?: HTMLScriptElement;
    public static warn?: { (s: string): void }

    static import() {
        if (this.isImportWas && this.warn) {
            this.warn('Import of the library already was. Consider disposing first.');
        }

        const tag = this.tag = document.createElement('script');
        tag.defer = tag.async = true;

        const {resolve, promise} = getPromise<IGoogle | undefined>();
        const onComplete = () => {
            tag.remove();
            this.isImportWas = true;
            let lib: IGoogle | undefined = undefined;
            try {
                lib = google;
            } catch(err) {}
            resolve(lib);
        }
        tag.onload = onComplete;
        tag.onerror = onComplete;

        document.head.appendChild(tag);
        tag.src = authApiSrc;

        return promise;
    }

    static dispose() {
        this.isImportWas = false;
        this.warn = undefined;
        this.tag?.remove();
    }

}