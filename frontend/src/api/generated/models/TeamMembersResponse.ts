/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamMember } from './TeamMember';
export type TeamMembersResponse = {
    success: boolean;
    data: Array<TeamMember>;
    pagination: Record<string, (number | boolean)>;
    error?: (Record<string, string> | null);
};

