/**
 * When your callback function is invoked, a RevocationResponse object is passed as the parameter. 
 * 
 * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#RevocationResponse google docs}
 */
type IRevocationResponse = {
    successful: boolean,
    error?: string
}

export interface IRevoker {
    (login_hint: string, callback?: (response: IRevocationResponse) => void): void
}