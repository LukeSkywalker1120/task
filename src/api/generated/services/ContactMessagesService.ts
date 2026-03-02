/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactMessageCreate } from '../models/ContactMessageCreate';
import type { ContactMessageCreateResponse } from '../models/ContactMessageCreateResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ContactMessagesService {
    /**
     * Submit a contact form message
     * @param requestBody
     * @returns ContactMessageCreateResponse Successful Response
     * @throws ApiError
     */
    public static submitContactMessageApiV1ContactMessagesPost(
        requestBody: ContactMessageCreate,
    ): CancelablePromise<ContactMessageCreateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/contact-messages',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
