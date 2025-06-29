import type { IAutoSelectDisabler } from "./auto-select-disabler.js"
import type { IButtonRenderer } from "./button-renderer.js"
import type { ICredentailStorer } from "./cred-storer.js"
import type { IInitializer } from "./initializer.js"
import type { IPrompter } from "./prompter.js"
import type { IRevoker } from "./revoker.js"


export type IGoogle = {
        accounts: {
            id: {
                /**
                 * Initializes the Sign In With Google client based on the configuration object.
                 * 
                 * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.initialize google docs}
                 */
                initialize: IInitializer,

                /**
                 * Displays the One Tap prompt or the browser built-in credential manager after the initialize() method is invoked.
                 * 
                 * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.prompt google docs}
                 */
                prompt: IPrompter,

                /**
                 * Renders a Sign In With Google button in your web pages.
                 * 
                 * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.renderButton google docs}
                 */
                renderButton: IButtonRenderer,

                /**
                 * When the user signs out of your website, you need to call the method google.accounts.id.disableAutoSelect 
                 * to record the status in cookies. This prevents a UX dead loop.
                 * 
                 * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.disableAutoSelect google docs}
                 */
                disableAutoSelect: IAutoSelectDisabler,

                /**
                 * This method is a wrapper for the store() method of the browser's built-in credential manager API
                 * 
                 * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.storeCredential google docs}
                 */
                storeCredential: ICredentailStorer,

                /**
                 * You can cancel the One Tap flow if you remove the prompt from the relying party DOM. 
                 * 
                 * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.cancel google docs}
                 */
                cancel(): void,

                /**
                 * The google.accounts.id.revoke method revokes the OAuth grant used to share the ID token for the specified user.
                 * 
                 * {@link https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.revoke google docs}
                 * 
                 * @param login_hint The email address or unique ID of the user's Google Account. The ID is the sub property of the credential payload.
                 * @param callback Optional RevocationResponse handler.
                 */
                revoke: IRevoker,
            },
        }
}
