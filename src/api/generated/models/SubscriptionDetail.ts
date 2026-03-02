/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubscriptionTrial } from './SubscriptionTrial';
import type { SubscriptionUsage } from './SubscriptionUsage';
export type SubscriptionDetail = {
    id: string;
    plan_id: string;
    status: string;
    current_period_start?: (string | null);
    current_period_end?: (string | null);
    trial?: (SubscriptionTrial | null);
    usage?: (SubscriptionUsage | null);
};

