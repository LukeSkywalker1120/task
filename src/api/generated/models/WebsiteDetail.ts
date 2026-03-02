/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebsiteStatusEnum } from './WebsiteStatusEnum';
import type { WebsiteVerificationInfo } from './WebsiteVerificationInfo';
export type WebsiteDetail = {
    id: string;
    account_id: string;
    domain: string;
    status: WebsiteStatusEnum;
    platform: string;
    created_at: string;
    last_seen_at?: (string | null);
    verification: WebsiteVerificationInfo;
};

