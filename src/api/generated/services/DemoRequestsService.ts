/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DemoRequestCreate } from '../models/DemoRequestCreate';
import type { DemoRequestCreateResponse } from '../models/DemoRequestCreateResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DemoRequestsService {
    /**
     * Submit a demo request
     * @param requestBody
     * @returns DemoRequestCreateResponse Successful Response
     * @throws ApiError
     */
    public static submitDemoRequestApiV1DemoRequestsPost(
        requestBody: DemoRequestCreate,
    ): CancelablePromise<DemoRequestCreateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/demo-requests',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
