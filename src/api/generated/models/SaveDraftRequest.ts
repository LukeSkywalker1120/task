/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SaveDraftRequest = {
    /**
     * Draft identifier returned when the registration draft was created.
     */
    draft_id: string;
    /**
     * Legal or operating name that will appear on invoices and dashboards.
     */
    company_name: string;
    /**
     * Primary website or storefront domain for the company.
     */
    company_website: string;
    /**
     * Optional verification token to guard against stale drafts.
     */
    verification_token?: (string | null);
};

