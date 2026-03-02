/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LookupNamesResponse } from '../models/LookupNamesResponse';
import type { LookupResponse } from '../models/LookupResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LookupsService {
    /**
     * List available lookup collections
     * @returns LookupNamesResponse Successful Response
     * @throws ApiError
     */
    public static listLookupCollectionsApiV1LookupsGet(): CancelablePromise<LookupNamesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/lookups',
        });
    }
    /**
     * Fetch entries from a lookup collection
     * @param lookupName
     * @returns LookupResponse Successful Response
     * @throws ApiError
     */
    public static getLookupApiV1LookupsLookupNameGet(
        lookupName: string,
    ): CancelablePromise<LookupResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/lookups/{lookup_name}',
            path: {
                'lookup_name': lookupName,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
