/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FinalizeRegistrationAccount } from './FinalizeRegistrationAccount';
import type { FinalizeRegistrationUser } from './FinalizeRegistrationUser';
export type FinalizeRegistrationPayload = {
    user: FinalizeRegistrationUser;
    account: FinalizeRegistrationAccount;
    requires_onboarding: boolean;
    selected_plan: string;
};

