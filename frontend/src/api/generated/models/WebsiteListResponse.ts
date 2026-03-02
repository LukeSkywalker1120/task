/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { src__app__schemas__website__PaginationMeta } from './src__app__schemas__website__PaginationMeta';
import type { WebsiteListItem } from './WebsiteListItem';
export type WebsiteListResponse = {
    success: boolean;
    data: Array<WebsiteListItem>;
    pagination: src__app__schemas__website__PaginationMeta;
    error?: (Record<string, string> | null);
};

