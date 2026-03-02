/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SubscriptionUpdateRequest = {
    /**
     * New plan identifier to switch to.
     */
    plan_id: string;
    /**
     * If true, calculate immediate proration charges or credits when switching plans.
     */
    prorate?: boolean;
};

