/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorSecret } from './VendorSecret';
/**
 * Request body for updating website-specific vendor configs.
 *
 * Each key is a vendor_code (e.g. 'klaviyo', 'shopify', 'mailchimp').
 */
export type WebsiteVendorConfigUpdate = {
    /**
     * Mapping of vendor_code to vendor configuration payload.
     */
    vendors?: Record<string, VendorSecret>;
};

