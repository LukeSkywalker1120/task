/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingContactRequest } from '../models/BillingContactRequest';
import type { BillingContactResponse } from '../models/BillingContactResponse';
import type { GenericBillingResponse } from '../models/GenericBillingResponse';
import type { InvoiceDownloadResponse } from '../models/InvoiceDownloadResponse';
import type { InvoicesListResponse } from '../models/InvoicesListResponse';
import type { NotificationPreferencesRequest } from '../models/NotificationPreferencesRequest';
import type { NotificationPreferencesResponse } from '../models/NotificationPreferencesResponse';
import type { PaymentMethodCreateRequest } from '../models/PaymentMethodCreateRequest';
import type { PaymentMethodsResponse } from '../models/PaymentMethodsResponse';
import type { PaymentMethodUpdateRequest } from '../models/PaymentMethodUpdateRequest';
import type { PlansResponse } from '../models/PlansResponse';
import type { SubscribeRequest } from '../models/SubscribeRequest';
import type { SubscribeResponse } from '../models/SubscribeResponse';
import type { SubscriptionCancelRequest } from '../models/SubscriptionCancelRequest';
import type { SubscriptionResponse } from '../models/SubscriptionResponse';
import type { SubscriptionUpdateRequest } from '../models/SubscriptionUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BillingService {
    /**
     * List available billing plans
     * @returns PlansResponse Successful Response
     * @throws ApiError
     */
    public static listPlansApiV1BillingPlansGet(): CancelablePromise<PlansResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/billing/plans',
        });
    }
    /**
     * Create a subscription
     * @param requestBody
     * @returns SubscribeResponse Successful Response
     * @throws ApiError
     */
    public static subscribeToPlanApiV1BillingSubscribePost(
        requestBody: SubscribeRequest,
    ): CancelablePromise<SubscribeResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/billing/subscribe',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Fetch the active subscription
     * @returns SubscriptionResponse Successful Response
     * @throws ApiError
     */
    public static getSubscriptionApiV1BillingSubscriptionGet(): CancelablePromise<SubscriptionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/billing/subscription',
        });
    }
    /**
     * Update the active subscription
     * @param requestBody
     * @returns SubscriptionResponse Successful Response
     * @throws ApiError
     */
    public static updateSubscriptionApiV1BillingSubscriptionPut(
        requestBody: SubscriptionUpdateRequest,
    ): CancelablePromise<SubscriptionResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/billing/subscription',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Cancel the active subscription
     * @param requestBody
     * @returns GenericBillingResponse Successful Response
     * @throws ApiError
     */
    public static cancelSubscriptionApiV1BillingSubscriptionCancelPost(
        requestBody: SubscriptionCancelRequest,
    ): CancelablePromise<GenericBillingResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/billing/subscription/cancel',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List payment methods
     * @returns PaymentMethodsResponse Successful Response
     * @throws ApiError
     */
    public static listPaymentMethodsApiV1BillingPaymentMethodsGet(): CancelablePromise<PaymentMethodsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/billing/payment-methods',
        });
    }
    /**
     * Add a payment method
     * @param requestBody
     * @returns GenericBillingResponse Successful Response
     * @throws ApiError
     */
    public static addPaymentMethodApiV1BillingPaymentMethodsPost(
        requestBody: PaymentMethodCreateRequest,
    ): CancelablePromise<GenericBillingResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/billing/payment-methods',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update a payment method
     * @param paymentMethodId
     * @param requestBody
     * @returns GenericBillingResponse Successful Response
     * @throws ApiError
     */
    public static updatePaymentMethodApiV1BillingPaymentMethodsPaymentMethodIdPut(
        paymentMethodId: string,
        requestBody: PaymentMethodUpdateRequest,
    ): CancelablePromise<GenericBillingResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/billing/payment-methods/{payment_method_id}',
            path: {
                'payment_method_id': paymentMethodId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete a payment method
     * @param paymentMethodId
     * @returns GenericBillingResponse Successful Response
     * @throws ApiError
     */
    public static deletePaymentMethodApiV1BillingPaymentMethodsPaymentMethodIdDelete(
        paymentMethodId: string,
    ): CancelablePromise<GenericBillingResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/billing/payment-methods/{payment_method_id}',
            path: {
                'payment_method_id': paymentMethodId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List invoices
     * @param limit Maximum invoices to return
     * @param offset Number of invoices to skip
     * @returns InvoicesListResponse Successful Response
     * @throws ApiError
     */
    public static listInvoicesApiV1BillingInvoicesGet(
        limit: number = 12,
        offset?: number,
    ): CancelablePromise<InvoicesListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/billing/invoices',
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
     * Download invoice
     * @param invoiceId
     * @returns InvoiceDownloadResponse Successful Response
     * @throws ApiError
     */
    public static downloadInvoiceApiV1BillingInvoicesInvoiceIdDownloadGet(
        invoiceId: string,
    ): CancelablePromise<InvoiceDownloadResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/billing/invoices/{invoice_id}/download',
            path: {
                'invoice_id': invoiceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get billing contact
     * @returns BillingContactResponse Successful Response
     * @throws ApiError
     */
    public static getBillingContactApiV1BillingContactGet(): CancelablePromise<BillingContactResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/billing/contact',
        });
    }
    /**
     * Update billing contact
     * @param requestBody
     * @returns BillingContactResponse Successful Response
     * @throws ApiError
     */
    public static updateBillingContactApiV1BillingContactPut(
        requestBody: BillingContactRequest,
    ): CancelablePromise<BillingContactResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/billing/contact',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get notification preferences
     * @returns NotificationPreferencesResponse Successful Response
     * @throws ApiError
     */
    public static getNotificationPreferencesApiV1BillingNotificationsGet(): CancelablePromise<NotificationPreferencesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/billing/notifications',
        });
    }
    /**
     * Update notification preferences
     * @param requestBody
     * @returns NotificationPreferencesResponse Successful Response
     * @throws ApiError
     */
    public static updateNotificationPreferencesApiV1BillingNotificationsPut(
        requestBody: NotificationPreferencesRequest,
    ): CancelablePromise<NotificationPreferencesResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/billing/notifications',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
