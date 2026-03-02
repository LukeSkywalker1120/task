/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateDraftRequest } from '../models/CreateDraftRequest';
import type { FinalizeRegistrationRequest } from '../models/FinalizeRegistrationRequest';
import type { FinalizeRegistrationResponse } from '../models/FinalizeRegistrationResponse';
import type { ForgotPasswordRequest } from '../models/ForgotPasswordRequest';
import type { ForgotPasswordResponse } from '../models/ForgotPasswordResponse';
import type { LoginRequest } from '../models/LoginRequest';
import type { LoginResponse } from '../models/LoginResponse';
import type { LogoutResponse } from '../models/LogoutResponse';
import type { ResetPasswordRequest } from '../models/ResetPasswordRequest';
import type { ResetPasswordResponse } from '../models/ResetPasswordResponse';
import type { SaveDraftRequest } from '../models/SaveDraftRequest';
import type { SaveDraftResponse } from '../models/SaveDraftResponse';
import type { SendVerificationRequest } from '../models/SendVerificationRequest';
import type { SendVerificationResponse } from '../models/SendVerificationResponse';
import type { VerifyEmailRequest } from '../models/VerifyEmailRequest';
import type { VerifyEmailResponse } from '../models/VerifyEmailResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * 1. Send verification code
     * @param requestBody
     * @returns SendVerificationResponse Successful Response
     * @throws ApiError
     */
    public static sendVerificationCodeApiV1AuthSendVerificationCodePost(
        requestBody: SendVerificationRequest,
    ): CancelablePromise<SendVerificationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/send-verification-code',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * 2. Verify email
     * @param requestBody
     * @returns VerifyEmailResponse Successful Response
     * @throws ApiError
     */
    public static verifyEmailApiV1AuthVerifyEmailPost(
        requestBody: VerifyEmailRequest,
    ): CancelablePromise<VerifyEmailResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/verify-email',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * 4. Save registration draft (company)
     * @param requestBody
     * @returns SaveDraftResponse Successful Response
     * @throws ApiError
     */
    public static saveRegistrationDraftApiV1AuthRegisterDraftPut(
        requestBody: SaveDraftRequest,
    ): CancelablePromise<SaveDraftResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/auth/register/draft',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * 3. Create registration draft (profile)
     * @param requestBody
     * @returns SaveDraftResponse Successful Response
     * @throws ApiError
     */
    public static createRegistrationDraftApiV1AuthRegisterDraftPost(
        requestBody: CreateDraftRequest,
    ): CancelablePromise<SaveDraftResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/register/draft',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * 5. Finalize registration
     * @param requestBody
     * @returns FinalizeRegistrationResponse Successful Response
     * @throws ApiError
     */
    public static finalizeRegistrationApiV1AuthRegisterPost(
        requestBody: FinalizeRegistrationRequest,
    ): CancelablePromise<FinalizeRegistrationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Sign in
     * @param requestBody
     * @returns LoginResponse Successful Response
     * @throws ApiError
     */
    public static loginApiV1AuthLoginPost(
        requestBody: LoginRequest,
    ): CancelablePromise<LoginResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Logout current session
     * @returns LogoutResponse Successful Response
     * @throws ApiError
     */
    public static logoutApiV1AuthLogoutPost(): CancelablePromise<LogoutResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/logout',
        });
    }
    /**
     * Request password reset
     * @param requestBody
     * @returns ForgotPasswordResponse Successful Response
     * @throws ApiError
     */
    public static requestPasswordResetApiV1AuthForgotPasswordPost(
        requestBody: ForgotPasswordRequest,
    ): CancelablePromise<ForgotPasswordResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/forgot-password',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Reset password
     * @param requestBody
     * @returns ResetPasswordResponse Successful Response
     * @throws ApiError
     */
    public static resetPasswordApiV1AuthResetPasswordPost(
        requestBody: ResetPasswordRequest,
    ): CancelablePromise<ResetPasswordResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/reset-password',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
