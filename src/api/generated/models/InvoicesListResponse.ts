/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Invoice } from './Invoice';
import type { src__app__schemas__billing__PaginationMeta } from './src__app__schemas__billing__PaginationMeta';
export type InvoicesListResponse = {
    success: boolean;
    data: Array<Invoice>;
    pagination: src__app__schemas__billing__PaginationMeta;
    error?: (Record<string, string> | null);
};

