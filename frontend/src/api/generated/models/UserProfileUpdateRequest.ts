/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserProfileUpdateRequest = {
    /**
     * Given name used in greetings and notifications.
     */
    first_name?: (string | null);
    /**
     * Family name shown in account directories.
     */
    last_name?: (string | null);
    /**
     * Role or title displayed to teammates.
     */
    job_title?: (string | null);
    /**
     * Optional phone number for billing or alerts.
     */
    phone?: (string | null);
    /**
     * Team or department association used in reports.
     */
    department?: (string | null);
    /**
     * Hosted image URL for the user's avatar.
     */
    photo?: (string | null);
    /**
     * Language lookup locale code (see /api/v1/lookups/languages).
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
     * Time format preference lookup (see /api/v1/lookups/time-formats).
     */
    time_format?: (string | null);
    /**
     * Number formatting mask (see /api/v1/lookups/number-formats).
     */
    number_format?: (string | null);
    /**
     * First-day-of-week lookup code (see /api/v1/lookups/first-day-of-week).
     */
    first_day_of_week?: (string | null);
    /**
     * Optional backup email for critical notifications.
     */
    secondary_email?: (string | null);
};

