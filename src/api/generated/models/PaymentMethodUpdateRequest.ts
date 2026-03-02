/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PaymentMethodUpdateRequest = {
    /**
     * Provide true to designate this method as default, false to remove default flag.
     */
    set_as_default?: (boolean | null);
    /**
     * Optional key/value metadata passed to the billing provider (e.g., name or email).
     */
    billing_details?: (Record<string, string> | null);
};

