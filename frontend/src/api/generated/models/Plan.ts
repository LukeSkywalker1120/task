/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Plan = {
    id: string;
    name: string;
    /**
     * Recurring price in minor units (e.g., cents).
     */
    price: number;
    currency: string;
    billing_cycle: string;
    features: Array<string>;
    /**
     * Length of free trial in days (null when not available).
     */
    trial_days?: (number | null);
};

