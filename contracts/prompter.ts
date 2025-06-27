interface IPromptMomentNotification {
    /**
     * Is this notification for a display moment?
     */
    isDisplayMomemnt(): boolean,

    /**
     * Is this notification for a display moment, and the UI is displayed?
     */
    isDisplayed(): boolean,

    /**
     * Is this notification for a display moment, and the UI isn't displayed?
     */
    isNotDisplayed(): boolean,

    /**
     * The detailed reason why the UI isn't displayed.
     */
    getNotDisplayedReason():
        'browser_not_supported' |
        'invalid_client' |
        'missing_client_id' |
        'opt_out_or_no_session' |
        'secure_http_required' |
        'suppressed_by_user' |
        'unregistered_origin' |
        'unknown_reason',

    /**
     * Is this notification for a skipped moment?
     */
    isSkippedMoment(): boolean;

    /**
     * The detailed reason for the skipped moment
     */
    getSkippedReason(): 'auto_cancel' | 'user_cancel' | 'tap_outside' | 'issuing_failed',

    /**
     * Is this notification for a dismissed moment?
     */
    isDismissedMoment(): boolean,

    /**
     * The detailed reason for the dismissal.
     */
    getDismissedReason(): 'credential_returned' | 'cancel_called' | 'flow_restarted',

    /**
     * Return a string for the moment type
     */
    getMomentType(): 'display' | 'skipped' | 'dismissed',
}

export interface IPrompter {
    (notification: IPromptMomentNotification): void;
}