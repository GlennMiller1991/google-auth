import type { ICredential } from "./cred-storer.js"

/**
 * When your callback function is invoked, a CredentialResponse object is passed as the parameter
 * 
 * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#CredentialResponse google docs}
 */
type ICredentailResponseObject = {
    /**
     * The encoded JWT ID token that Google issues.
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#credential google docs}
     */
    credential: string,

    /**
     * How the user signed in.
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#select_by google docs}
     */
    selectBy: 'auto' | 'user' | 'fedcm' | 'fedcm_auto' | 'user_1tap' | 'user_2tap' | 'itp' | 'itp_confirm' |
    'itp_add_session' | 'itp_confirm_add_session' | 'btn' | 'btn_confirm' | 'btn_add_session' | 'btn_confirm_add_session',

    /**
     * This field is only defined when user clicks a Sign in with Google button to sign in, and the button's state attribute is specified.
     * The value of this field is the same value you specified in the button's state attribute.
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#response_state}
     */
    state?: any
}

type IInitializeConfig = {
    /**
     * Your application's client ID.
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#client_id google docs}
     */
    client_id: string,

    /**
     * The JavaScript function that handles ID tokens.
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#callback google docs}
     */
    callback: (credentialResponseObject: ICredentailResponseObject) => void,
} & Partial<{
    /**
     * Enables automatic selection.
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#auto_select google docs}
     */
    auto_select: boolean,

    /**
     * The URL of your login endpoint. 
     *  
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#login_uri google docs}
     */
    login_uri: string,

    /**
     * The JavaScript function that handles password credentials.
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#native_callback google docs}
     */
    native_callback: (credential: ICredential) => void,

    /**
     * Cancels the prompt if the user clicks outside the prompt.
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#cancel_on_tap_outside google docs}
     */
    cancel_on_tap_outside: boolean,

    /**
     * The DOM ID of the One Tap prompt container element
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#prompt_parent_id google docs}
     */
    prompt_parent_id: string,

    /**
     * A random string for ID tokens
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#nonce google docs}
     */
    nonce: string,

    /**
     * The title and words in the One Tap prompt
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#context google docs}
     */
    context: 'use' | 'signin' | 'signup',

    /**
     * If you need to call One Tap in the parent domain and its subdomains, pass the parent 
     * domain to this field so that a single shared cookie is used.
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#state_cookie_domain google docs}
     */
    state_cookie_domain: any,

    /**
     * The Sign In With Google button UX flow
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#ux_mode google docs}
     */
    ux_mode: 'popup' | 'redirect',

    /**
     * The origins that are allowed to embed the intermediate iframe. 
     * One Tap is run in the intermediate iframe mode if this field is present.
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#allowed_parent_origin google docs}
     */
    allowed_parent_origin: string | string[],

    /**
     * Overrides the default intermediate iframe behavior when users manually close One Tap.
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#intermediate_iframe_close_callback google docs}
     */
    intermediate_iframe_close_callback: any,

    /**
     * Enables upgraded One Tap UX on ITP browsers.
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#itp_support google docs}
     */
    itp_support: boolean,

    /**
     * Skip account selection by providing a user hint.
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#login_hint google docs}
     */
    login_hint: string,

    /**
     * Limit account selection by domain.
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#hd google docs}
     */
    hd: string,

    /**
     * Allow the browser to control user sign-in prompts and mediate the sign-in flow between your website and Google.
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#use_fedcm_for_prompt google docs}}
     */
    use_fedcm_for_prompt: boolean,

    /**
     * This field determines if FedCM button UX should be used on Chrome (desktop M125+ and Android M128+). Defaults to false.
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#use_fedcm_for_button google docs}
     */
    use_fedcm_for_button: boolean,

    /**
     * Whether to enable the auto select option for the FedCM button flow. 
     * If enabled, returning users with an active Google session will be automatically signed in, 
     * bypassing the Account Chooser prompt.Default value is false.
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#button_auto_select google docs}
     */
    button_auto_select: boolean,
}>

export interface IInitializer {
    (config: IInitializeConfig): void
}