export function getPromise<TReturn>() {
    let resolve!: (value: TReturn) => void;
    let reject!: (value: Error) => void;
    let isPending: boolean = true;

    const promise = new Promise<TReturn>((res, rej) => {
        resolve = (value: TReturn) => {
            res(value);
            isPending = false;
        };
        reject = (error: Error) => {
            rej(error);
            isPending = false;
        }
    });

    return {
        resolve,
        reject,
        get isPending() {
            return isPending;
        },
        promise
    }
}