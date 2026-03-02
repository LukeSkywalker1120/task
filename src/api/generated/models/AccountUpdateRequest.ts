/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountUpdateAddress } from './AccountUpdateAddress';
export type AccountUpdateRequest = {
    /**
     * Legal business name used for billing documents.
     */
    legal_name?: (string | null);
    /**
     * Industry lookup code (see /api/v1/lookups/industries).
     */
    industry?: (string | null);
    /**
     * Company size lookup code (see /api/v1/lookups/company-sizes).
     */
    company_size?: (string | null);
    /**
     * Optional free-form business summary that appears in internal tools.
     */
    business_info?: (string | null);
    /**
     * Business type lookup code (see /api/v1/lookups/business-types).
     */
    business_type?: (string | null);
    /**
     * Optional structured address for the primary headquarters.
     */
    address?: (AccountUpdateAddress | null);
    /**
     * Federal EIN or equivalent business tax identifier.
     */
    tax_id?: (string | null);
    /**
     * VAT registration number for international billing.
     */
    vat_number?: (string | null);
    /**
     * Mark true when the business has verified tax exempt status.
     */
    tax_exempt?: (boolean | null);
    /**
     * Internal note stored alongside tax exemption approvals.
     */
    tax_exempt_note?: (string | null);
    /**
     * Language lookup locale (see /api/v1/lookups/languages).
     */
    language?: (string | null);
    /**
     * Timezone lookup IANA name (see /api/v1/lookups/timezones).
     */
    timezone?: (string | null);
    /**
     * Currency lookup ISO code (see /api/v1/lookups/currencies).
     */
    currency?: (string | null);
    /**
     * Date format lookup mask (see /api/v1/lookups/date-formats).
     */
    date_format?: (string | null);
};

