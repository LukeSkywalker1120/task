/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Generic vendor secret payload for a website.
 *
 * The shape is intentionally flexible so we can support many vendors
 * (klaviyo, shopify, mailchimp, meta, google_ads, etc.).
 */
export type VendorSecret = {
    /**
     * Arbitrary vendor-specific configuration (secrets, IDs, etc.)
     */
    config?: Record<string, any>;
};

