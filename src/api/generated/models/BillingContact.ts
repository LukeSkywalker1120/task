/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BillingContact = {
    /**
     * Primary billing inbox that receives invoices and payment notices.
     */
    primary_email: string;
    /**
     * Full name of the person responsible for billing.
     */
    name: string;
    /**
     * Optional direct line for urgent billing follow-ups.
     */
    phone?: (string | null);
    /**
     * Additional recipients (up to 5) that should be copied on billing emails.
     */
    cc_emails?: (Array<string> | null);
};

