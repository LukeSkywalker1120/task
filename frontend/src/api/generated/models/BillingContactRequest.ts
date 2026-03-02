/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BillingContactRequest = {
    /**
     * Required billing inbox (must be deliverable).
     */
    primary_email: string;
    /**
     * Contact name displayed on invoices and billing emails.
     */
    name: string;
    /**
     * Optional phone number for urgent communication.
     */
    phone?: (string | null);
    /**
     * Array of additional emails to CC on billing notices.
     */
    cc_emails?: (Array<string> | null);
};

