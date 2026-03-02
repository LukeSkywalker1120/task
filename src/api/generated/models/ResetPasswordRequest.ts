/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ResetPasswordRequest = {
    /**
     * Reset token supplied via the password reset email.
     */
    reset_token: string;
    /**
     * Email address associated with the password reset.
     */
    email: string;
    /**
     * New password that meets complexity requirements.
     */
    new_password: string;
};

