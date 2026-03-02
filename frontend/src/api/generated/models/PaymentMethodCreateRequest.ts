/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PaymentMethodCreateRequest = {
    /**
     * Billing provider payment intent to confirm (e.g., Stripe PI).
     */
    payment_intent_id: string;
    /**
     * Flag the payment method as default immediately after attaching it.
     */
    set_as_default?: boolean;
};

