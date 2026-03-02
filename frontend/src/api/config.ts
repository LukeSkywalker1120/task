/**
 * API Configuration - initializes OpenAPI client with base URL and auth token
 */
import { OpenAPI } from './generated';

// Configure OpenAPI client with environment variables
export function initializeApiClient() {
  OpenAPI.BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
  OpenAPI.TOKEN = import.meta.env.VITE_API_TOKEN || undefined;
  OpenAPI.WITH_CREDENTIALS = true;
  OpenAPI.CREDENTIALS = 'include';
}

// Initialize on module load
initializeApiClient();
