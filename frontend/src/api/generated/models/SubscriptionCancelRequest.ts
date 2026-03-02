/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SubscriptionCancelRequest = {
    /**
     * If true, allow the subscription to finish the current period before cancelling.
     */
    cancel_at_period_end?: boolean;
    /**
     * Optional cancellation reason for internal analytics.
     */
    reason?: (string | null);
};

