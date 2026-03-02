/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnalyticsRange } from '../models/AnalyticsRange';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AnalyticsService {
    /**
     * Analytics overview for a website
     * @param websiteId
     * @param range
     * @returns any Successful Response
     * @throws ApiError
     */
    public static analyticsOverviewAnalyticsOverviewGet(
        websiteId: string,
        range: AnalyticsRange = '30d',
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/analytics/overview',
            query: {
                'website_id': websiteId,
                'range': range,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
