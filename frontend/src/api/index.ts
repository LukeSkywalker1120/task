/**
 * API module – export client and (when available) generated types from Swagger/OpenAPI.
 */

export { api, apiRequest, type RequestConfig } from './client';
export * from './generated';
export { initializeApiClient } from './config';

// When you have OpenAPI types/codegen, re-export here, e.g.:
// export * from './generated';
