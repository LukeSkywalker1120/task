/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebsiteStatusEnum } from './WebsiteStatusEnum';
export type WebsiteListItem = {
    id: string;
    account_id: string;
    domain: string;
    status: WebsiteStatusEnum;
    platform: string;
    created_at: string;
    last_seen_at?: (string | null);
    privacy_acknowledged?: string;
};

