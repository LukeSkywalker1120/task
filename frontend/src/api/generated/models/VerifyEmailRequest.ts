/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type VerifyEmailRequest = {
    /**
     * Email address that received the verification code.
     */
    email: string;
    /**
     * Verification request identifier returned from step 1.
     */
    verification_id: string;
    /**
     * Six digit verification code delivered via email.
     */
    verification_code: string;
};

