/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FinalizeRegistrationUser } from './FinalizeRegistrationUser';
import type { LoginAccount } from './LoginAccount';
import type { LoginSubscription } from './LoginSubscription';
export type LoginPayload = {
    user: FinalizeRegistrationUser;
    account: LoginAccount;
    subscription?: (LoginSubscription | null);
};

