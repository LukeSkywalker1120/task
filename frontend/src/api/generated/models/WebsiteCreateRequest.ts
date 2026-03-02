/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type WebsiteCreateRequest = {
    /**
     * Account identifier that will own the website.
     */
    account_id: string;
    /**
     * Fully-qualified domain name for the storefront.
     */
    domain: string;
    /**
     * Commerce platform slug (see /api/v1/lookups/platforms when available).
     */
    platform: string;
};

