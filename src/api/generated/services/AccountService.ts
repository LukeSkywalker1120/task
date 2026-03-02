/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountResponse } from '../models/AccountResponse';
import type { AccountUpdateRequest } from '../models/AccountUpdateRequest';
import type { AccountUpdateResponse } from '../models/AccountUpdateResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AccountService {
    /**
     * Retrieve account metadata
     * @returns AccountResponse Successful Response
     * @throws ApiError
     */
    public static getAccountMetadataApiV1AccountGet(): CancelablePromise<AccountResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/account',
        });
    }
    /**
     * Update account metadata
     * @param requestBody
     * @returns AccountUpdateResponse Successful Response
     * @throws ApiError
     */
    public static updateAccountMetadataApiV1AccountPut(
        requestBody: AccountUpdateRequest,
    ): CancelablePromise<AccountUpdateResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/account',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
