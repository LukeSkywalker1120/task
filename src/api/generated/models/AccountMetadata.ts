/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AccountMetadata = {
    account_id: string;
    account_name: string;
    legal_name?: (string | null);
    industry?: (string | null);
    company_size_id?: (number | null);
    company_size?: (string | null);
    address_line1?: (string | null);
    address_line2?: (string | null);
    city?: (string | null);
    state_id?: (number | null);
    state?: (string | null);
    postal_code?: (string | null);
    country_id?: (number | null);
    country?: (string | null);
    tax_id?: (string | null);
    vat_number?: (string | null);
    tax_exempt: boolean;
    tax_exempt_note?: (string | null);
    language_id?: (number | null);
    language?: (string | null);
    timezone_id?: (number | null);
    timezone?: (string | null);
    currency_id?: (number | null);
    currency?: (string | null);
    business_info?: (string | null);
    business_type_id?: (number | null);
    business_type?: (string | null);
    date_format_id?: (number | null);
    date_format?: (string | null);
    account_status: string;
    updated_at?: (string | null);
};

