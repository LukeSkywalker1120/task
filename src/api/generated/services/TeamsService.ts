/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenericSuccessResponse } from '../models/GenericSuccessResponse';
import type { TeamInviteRequest } from '../models/TeamInviteRequest';
import type { TeamInviteResponse } from '../models/TeamInviteResponse';
import type { TeamMembersResponse } from '../models/TeamMembersResponse';
import type { TeamMemberUpdateRequest } from '../models/TeamMemberUpdateRequest';
import type { TeamSecuritySettingsRequest } from '../models/TeamSecuritySettingsRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TeamsService {
    /**
     * List account members
     * @param limit Maximum members to return
     * @param offset Records to skip before returning results
     * @returns TeamMembersResponse Successful Response
     * @throws ApiError
     */
    public static listTeamMembersApiV1TeamsMembersGet(
        limit: number = 20,
        offset?: number,
    ): CancelablePromise<TeamMembersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/teams/members',
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
     * Invite a new member
     * @param requestBody
     * @returns TeamInviteResponse Successful Response
     * @throws ApiError
     */
    public static inviteTeamMemberApiV1TeamsInvitePost(
        requestBody: TeamInviteRequest,
    ): CancelablePromise<TeamInviteResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/teams/invite',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update an existing member
     * @param memberId
     * @param requestBody
     * @returns GenericSuccessResponse Successful Response
     * @throws ApiError
     */
    public static updateTeamMemberApiV1TeamsMembersMemberIdPut(
        memberId: string,
        requestBody: TeamMemberUpdateRequest,
    ): CancelablePromise<GenericSuccessResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/teams/members/{member_id}',
            path: {
                'member_id': memberId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Remove a member from the account
     * @param memberId
     * @returns GenericSuccessResponse Successful Response
     * @throws ApiError
     */
    public static removeTeamMemberApiV1TeamsMembersMemberIdDelete(
        memberId: string,
    ): CancelablePromise<GenericSuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/teams/members/{member_id}',
            path: {
                'member_id': memberId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update account security settings
     * @param requestBody
     * @returns GenericSuccessResponse Successful Response
     * @throws ApiError
     */
    public static updateSecuritySettingsApiV1TeamsSettingsPost(
        requestBody: TeamSecuritySettingsRequest,
    ): CancelablePromise<GenericSuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/teams/settings',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
