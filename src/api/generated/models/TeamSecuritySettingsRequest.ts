/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TeamSecuritySettingsRequest = {
    /**
     * When true, all users must enrol in time-based one-time passwords.
     */
    require_2fa: boolean;
    /**
     * Restrict sign-in to SSO providers and disable password login.
     */
    sso_only: boolean;
};

