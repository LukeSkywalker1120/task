/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LoginRequest = {
    /**
     * Registered user email.
     */
    email: string;
    /**
     * Account password.
     */
    password: string;
    /**
     * Set true to issue a long-lived refresh token.
     */
    remember_me?: boolean;
    /**
     * Optional device nickname displayed in session management (e.g., 'MacBook Pro').
     */
    device_label?: (string | null);
};

