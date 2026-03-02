/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TeamInviteRequest = {
    /**
     * Email address to invite to the organisation.
     */
    email: string;
    /**
     * Team role slug (see /api/v1/lookups/team-roles).
     */
    role: string;
    /**
     * Optional personal message included in the invitation email.
     */
    message?: (string | null);
    /**
     * Force the invited user to enable 2FA on first login.
     */
    require_2fa?: boolean;
};

