/**
 * When your native_callback function is invoked, a Credential object is passed as the parameter.
 * 
 * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#type-Credential google docs}}
 */
export type ICredential = {
    id: string,
    password: string,
}

export interface ICredentailStorer {
    (credentil: ICredential, callback: Function): void
}