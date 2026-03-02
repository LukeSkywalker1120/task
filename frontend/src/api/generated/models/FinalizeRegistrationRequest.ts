/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FinalizeRegistrationRequest = {
    /**
     * Verification token returned after email confirmation.
     */
    verification_token: string;
    /**
     * Strong password for the owner account.
     */
    password: string;
    /**
     * Must be true to acknowledge Terms of Service and Privacy Policy.
     */
    accept_terms: boolean;
};

