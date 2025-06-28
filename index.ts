import { getPromise } from "./utils";
import { authApiSrc } from "./constants";
import { IGoogle } from "./contracts";

declare let google: IGoogle | undefined;

export default abstract class GoogleAuth {
    private static isImportWas: boolean;
    private static tag?: HTMLScriptElement;

    static import() {
        if (this.isImportWas) return;

        const tag = this.tag = document.createElement('script');
        tag.defer = tag.async = true;

        const { resolve, promise } = getPromise<IGoogle>();
        const onComplete = (value: boolean) => {
            tag.remove();
            this.isImportWas = true;
            resolve(google as IGoogle);
        }
        tag.onload = () => onComplete(true);
        tag.onerror = () => onComplete(false);

        document.head.appendChild(tag);
        tag.src = authApiSrc;

        return promise;
    }

    static dispose() {
        this.isImportWas = false;
        this.tag?.remove();
    }

} 