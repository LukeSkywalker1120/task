/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DemoRequestCreate = {
    /**
     * Full name of the requester
     */
    name: string;
    /**
     * Company name for the requester
     */
    company_name: string;
    /**
     * Work email address for follow-up
     */
    email: string;
    /**
     * Primary website for the business
     */
    website?: (string | null);
    /**
     * Typical monthly website visitors or traffic band
     */
    monthly_visitors?: (string | null);
    /**
     * Industry or vertical
     */
    vertical?: (string | null);
    /**
     * Best phone number for the requester
     */
    contact_number?: (string | null);
    /**
     * Brief description of the business
     */
    business_description?: (string | null);
};

