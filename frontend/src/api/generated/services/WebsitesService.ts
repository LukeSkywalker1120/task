/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebsiteCreateRequest } from '../models/WebsiteCreateRequest';
import type { WebsiteCreateResponse } from '../models/WebsiteCreateResponse';
import type { WebsiteDeleteResponse } from '../models/WebsiteDeleteResponse';
import type { WebsiteDetailResponse } from '../models/WebsiteDetailResponse';
import type { WebsiteListResponse } from '../models/WebsiteListResponse';
import type { WebsitePrivacyAckRequest } from '../models/WebsitePrivacyAckRequest';
import type { WebsiteUpdateRequest } from '../models/WebsiteUpdateRequest';
import type { WebsiteVendorConfigUpdate } from '../models/WebsiteVendorConfigUpdate';
import type { WebsiteVerificationResponse } from '../models/WebsiteVerificationResponse';
import type { WebsiteVerificationTriggerRequest } from '../models/WebsiteVerificationTriggerRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WebsitesService {
    /**
     * Create a website
     * @param requestBody
     * @returns WebsiteCreateResponse Successful Response
     * @throws ApiError
     */
    public static createWebsiteApiV1WebsitesPost(
        requestBody: WebsiteCreateRequest,
    ): CancelablePromise<WebsiteCreateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/websites',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List websites
     * @param limit Maximum websites to return
     * @param offset Number of websites to skip before listing
     * @returns WebsiteListResponse Successful Response
     * @throws ApiError
     */
    public static listWebsitesApiV1WebsitesGet(
        limit: number = 20,
        offset?: number,
    ): CancelablePromise<WebsiteListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/websites',
            query: {
                'limit': limit,
                'offset': offset,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Trigger Klaviyo profile sync for a website
     * @param websiteId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static triggerKlaviyoProfileSyncApiV1WebsitesWebsiteIdSyncProfilePost(
        websiteId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/websites/{website_id}/sync/profile',
            path: {
                'website_id': websiteId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Trigger Klaviyo event sync for a website
     * @param websiteId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static triggerKlaviyoEventSyncApiV1WebsitesWebsiteIdSyncEventsPost(
        websiteId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/websites/{website_id}/sync/events',
            path: {
                'website_id': websiteId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Trigger Klaviyo list sync for a website
     * @param websiteId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static triggerKlaviyoListSyncApiV1WebsitesWebsiteIdSyncListsPost(
        websiteId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/websites/{website_id}/sync/lists',
            path: {
                'website_id': websiteId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get latest Klaviyo sync job status for a website and sync type (internal)
     * @param websiteId
     * @param syncType
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getLatestKlaviyoSyncStatusApiV1WebsitesWebsiteIdSyncStatusSyncTypeGet(
        websiteId: string,
        syncType: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/websites/{website_id}/sync-status/{sync_type}',
            path: {
                'website_id': websiteId,
                'sync_type': syncType,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get website detail
     * @param websiteId
     * @returns WebsiteDetailResponse Successful Response
     * @throws ApiError
     */
    public static getWebsiteDetailApiV1WebsitesWebsiteIdGet(
        websiteId: string,
    ): CancelablePromise<WebsiteDetailResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/websites/{website_id}',
            path: {
                'website_id': websiteId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update website metadata
     * @param websiteId
     * @param requestBody
     * @returns WebsiteDetailResponse Successful Response
     * @throws ApiError
     */
    public static updateWebsiteApiV1WebsitesWebsiteIdPut(
        websiteId: string,
        requestBody: WebsiteUpdateRequest,
    ): CancelablePromise<WebsiteDetailResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/websites/{website_id}',
            path: {
                'website_id': websiteId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete website
     * @param websiteId
     * @returns WebsiteDeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteWebsiteApiV1WebsitesWebsiteIdDelete(
        websiteId: string,
    ): CancelablePromise<WebsiteDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/websites/{website_id}',
            path: {
                'website_id': websiteId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Acknowledge website privacy policy
     * @param websiteId
     * @param requestBody
     * @returns WebsiteDetailResponse Successful Response
     * @throws ApiError
     */
    public static acknowledgePrivacyApiV1WebsitesWebsiteIdPrivacyAckPut(
        websiteId: string,
        requestBody: WebsitePrivacyAckRequest,
    ): CancelablePromise<WebsiteDetailResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/websites/{website_id}/privacy-ack',
            path: {
                'website_id': websiteId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update website-specific vendor configuration
     * Upsert per-website vendor secrets and refresh origin cache.
     *
     * This is used for integrations like Klaviyo, Shopify, etc., where
     * the secrets are scoped to a specific website rather than global
     * LaRevela credentials.
     * @param websiteId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateWebsiteVendorConfigApiV1WebsitesWebsiteIdVendorConfigPut(
        websiteId: string,
        requestBody: WebsiteVendorConfigUpdate,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/websites/{website_id}/vendor-config',
            path: {
                'website_id': websiteId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get website-specific vendor configuration
     * Return all vendor configs for a website.
     *
     * This allows the UI or services to read back the per-website vendor
     * secrets that were previously stored via the PUT endpoint.
     * @param websiteId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getWebsiteVendorConfigApiV1WebsitesWebsiteIdVendorConfigGet(
        websiteId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/websites/{website_id}/vendor-config',
            path: {
                'website_id': websiteId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Trigger website verification
     * @param websiteId
     * @param requestBody
     * @returns WebsiteVerificationResponse Successful Response
     * @throws ApiError
     */
    public static triggerWebsiteVerificationApiV1WebsitesWebsiteIdVerifyPost(
        websiteId: string,
        requestBody: WebsiteVerificationTriggerRequest,
    ): CancelablePromise<WebsiteVerificationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/websites/{website_id}/verify',
            path: {
                'website_id': websiteId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Trigger Klaviyo profile push for a website
     * @param websiteId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static triggerKlaviyoProfilePushApiV1WebsitesWebsiteIdPushProfilePost(
        websiteId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/websites/{website_id}/push/profile',
            path: {
                'website_id': websiteId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Trigger Klaviyo events push for a website
     * @param websiteId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static triggerKlaviyoEventPushApiV1WebsitesWebsiteIdPushEventsPost(
        websiteId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/websites/{website_id}/push/events',
            path: {
                'website_id': websiteId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Trigger Klaviyo lists push for a website
     * @param websiteId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static triggerKlaviyoListPushApiV1WebsitesWebsiteIdPushListsPost(
        websiteId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/websites/{website_id}/push/lists',
            path: {
                'website_id': websiteId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get latest Klaviyo profile push job status for a website
     * @param websiteId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getLatestKlaviyoProfilePushStatusApiV1WebsitesWebsiteIdSyncStatusProfilePushGet(
        websiteId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/websites/{website_id}/sync-status/profile_push',
            path: {
                'website_id': websiteId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get latest Klaviyo event push job status for a website
     * @param websiteId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getLatestKlaviyoEventPushStatusApiV1WebsitesWebsiteIdSyncStatusEventPushGet(
        websiteId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/websites/{website_id}/sync-status/event_push',
            path: {
                'website_id': websiteId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get latest Klaviyo list push job status for a website
     * @param websiteId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getLatestKlaviyoListPushStatusApiV1WebsitesWebsiteIdSyncStatusListPushGet(
        websiteId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/websites/{website_id}/sync-status/list_push',
            path: {
                'website_id': websiteId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
