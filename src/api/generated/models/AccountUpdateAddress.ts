/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AccountUpdateAddress = {
    /**
     * Primary street address line.
     */
    line1: string;
    /**
     * Suite, floor, or unit (omit if not applicable).
     */
    line2?: (string | null);
    /**
     * City or locality.
     */
    city: string;
    /**
     * State or province code (US two-letter ISO when applicable).
     */
    state?: (string | null);
    /**
     * Postal or ZIP code.
     */
    postal_code: string;
    /**
     * ISO-3166 alpha-2 country code (see /api/v1/lookups/countries).
     */
    country: string;
};

