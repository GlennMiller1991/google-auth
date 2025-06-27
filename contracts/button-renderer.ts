/**
 * The following table lists the fields and descriptions of the GsiButtonConfiguration data type:
 * 
 * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#GsiButtonConfiguration google docs}
 */
type IGsiButtonConfiguration = {
    /**
     * The button type
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#type google docs}
     */
    type: 'icon' | 'standart',

    /**
     * The button theme
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#theme}
     */
    theme?: 'outline' | 'filled_blue' | 'filled_black' | string,

    /**
     * The button size
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#size google docs}
     */
    size?: 'large' | 'medium' | 'small',

    /**
     * The button text
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#text google docs}
     */
    text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin',

    /**
     * The button shape.
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#shape google docs}
     */
    shape?: 'rectangular' | 'pill' | 'circle' | 'square',

    /**
     * The alignment of the Google logo
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#logo_alignment google docs}
     */
    logo_alignment?: 'left' | 'center',

    /**
     * The minimum button width, in pixels. The maximum width is 400 pixels.
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#width google docs}
     */
    width?: `${number}`,

    /**
     * Display button text using the specified locale, otherwise default to the users Google Account or browser settings
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#locale  google docs}
     */
    locale?: string,

    /**
     * You can define a JavaScript function to be called when the Sign in with Google button 
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#click_listener google docs}
     */
    click_listener?: () => void,

    /**
     * As multiple Sign in with Google buttons can be rendered on the same page, 
     * you can assign each button with a unique string. 
     * The same string would return along with the ID token, so you can identify which button user clicked to sign in.
     * 
     * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#state}
     */
    state?: string,
}

export interface IButtonRenderer {
    (parent: HTMLElement, configuration: IGsiButtonConfiguration)
}