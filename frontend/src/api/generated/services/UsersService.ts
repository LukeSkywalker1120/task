/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangePasswordRequest } from '../models/ChangePasswordRequest';
import type { ChangePasswordResponse } from '../models/ChangePasswordResponse';
import type { LogoutResponse } from '../models/LogoutResponse';
import type { TwoFactorEnableRequest } from '../models/TwoFactorEnableRequest';
import type { TwoFactorEnableResponse } from '../models/TwoFactorEnableResponse';
import type { TwoFactorVerifyRequest } from '../models/TwoFactorVerifyRequest';
import type { TwoFactorVerifyResponse } from '../models/TwoFactorVerifyResponse';
import type { UserProfileResponse } from '../models/UserProfileResponse';
import type { UserProfileUpdateRequest } from '../models/UserProfileUpdateRequest';
import type { UserProfileUpdateResponse } from '../models/UserProfileUpdateResponse';
import type { UserSessionsResponse } from '../models/UserSessionsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * Retrieve the signed-in user's profile
     * @returns UserProfileResponse Successful Response
     * @throws ApiError
     */
    public static getMyProfileApiV1UsersMeGet(): CancelablePromise<UserProfileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users/me',
        });
    }
    /**
     * Update the signed-in user's profile
     * @param requestBody
     * @returns UserProfileUpdateResponse Successful Response
     * @throws ApiError
     */
    public static updateMyProfileApiV1UsersMePut(
        requestBody: UserProfileUpdateRequest,
    ): CancelablePromise<UserProfileUpdateResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/users/me',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update the signed-in user's password
     * @param requestBody
     * @returns ChangePasswordResponse Successful Response
     * @throws ApiError
     */
    public static changeMyPasswordApiV1UsersMeChangePasswordPost(
        requestBody: ChangePasswordRequest,
    ): CancelablePromise<ChangePasswordResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/users/me/change-password',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Begin two-factor authentication enrollment
     * @param requestBody
     * @returns TwoFactorEnableResponse Successful Response
     * @throws ApiError
     */
    public static enableTwoFactorApiV1UsersMe2FaEnablePost(
        requestBody: TwoFactorEnableRequest,
    ): CancelablePromise<TwoFactorEnableResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/users/me/2fa/enable',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Confirm two-factor authentication setup
     * @param requestBody
     * @returns TwoFactorVerifyResponse Successful Response
     * @throws ApiError
     */
    public static verifyTwoFactorApiV1UsersMe2FaVerifyPost(
        requestBody: TwoFactorVerifyRequest,
    ): CancelablePromise<TwoFactorVerifyResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/users/me/2fa/verify',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List active sessions for the signed-in user
     * @returns UserSessionsResponse Successful Response
     * @throws ApiError
     */
    public static listMySessionsApiV1UsersMeSessionsGet(): CancelablePromise<UserSessionsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users/me/sessions',
        });
    }
    /**
     * Revoke a specific session for the signed-in user
     * @param sessionId
     * @returns LogoutResponse Successful Response
     * @throws ApiError
     */
    public static revokeSessionApiV1UsersMeSessionsSessionIdLogoutPost(
        sessionId: string,
    ): CancelablePromise<LogoutResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/users/me/sessions/{session_id}/logout',
            path: {
                'session_id': sessionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
