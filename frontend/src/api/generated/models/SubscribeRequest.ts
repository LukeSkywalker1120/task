/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SubscribeRequest = {
    /**
     * Plan identifier from GET /api/v1/billing/plans.
     */
    plan_id: string;
    /**
     * Customer payment method identifier returned by Stripe or the billing provider.
     */
    payment_method_id: string;
    /**
     * Optional coupon or promotion code.
     */
    coupon_code?: (string | null);
    /**
     * Start the subscription immediately; if false, schedule for the next billing anchor.
     */
    start_immediately?: boolean;
};

