/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SendVerificationRequest = {
    /**
     * Email address for the prospective account owner.
     */
    email: string;
    /**
     * Plan code from GET /api/v1/billing/plans (for example, Starter or Growth tiers).
     */
    plan: string;
};

