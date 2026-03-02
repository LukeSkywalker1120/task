/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventCollectionPayload } from '../models/EventCollectionPayload';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EventCollectionService {
    /**
     * Collect client-side interaction events
     * @param requestBody
     * @param origin
     * @param referer
     * @returns string Successful Response
     * @throws ApiError
     */
    public static collectEventApiV1WebhookCollectPost(
        requestBody: EventCollectionPayload,
        origin?: (string | null),
        referer?: (string | null),
    ): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/webhook/collect',
            headers: {
                'Origin': origin,
                'Referer': referer,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
