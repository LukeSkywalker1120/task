# API Integration Documentation

This document explains the API integration implementation for Part 1 of the technical test.

## Overview

The project uses a **type-safe, auto-generated API client** from the OpenAPI 3.1.0 specification using `openapi-typescript-codegen`. All API calls are wrapped in React Query hooks for optimal caching, loading states, and error handling.

## Architecture

```
src/
├── api/
│   ├── generated/          # Auto-generated from OpenAPI spec
│   │   ├── services/       # API service classes (14 services)
│   │   ├── models/         # TypeScript types (115+ models)
│   │   └── core/           # Request/error handling
│   ├── client.ts           # Legacy manual client (for reference)
│   ├── config.ts           # OpenAPI client configuration
│   └── index.ts            # Public API exports
├── hooks/
│   ├── useWebsites.ts      # Website CRUD operations
│   └── useApi.ts           # Generic API hooks (legacy)
└── pages/
    └── ApiDemo.tsx         # Full CRUD demonstration
```

## Configuration

### Environment Variables

Create a `.env` file in the `frontend/` directory:

```bash
# API Configuration
VITE_API_BASE_URL=http://localhost:8000
VITE_API_TOKEN=your_bearer_token_here

# Blockchain Configuration (for Part 2)
VITE_CHAIN_ID=11155111
VITE_CONTRACT_ADDRESS=0x0000000000000000000000000000000000000000
```

### API Client Initialization

The OpenAPI client is configured in `src/api/config.ts` and initialized in `src/main.tsx`:

```typescript
import { OpenAPI } from './generated';

export function initializeApiClient() {
  OpenAPI.BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
  OpenAPI.TOKEN = import.meta.env.VITE_API_TOKEN || undefined;
  OpenAPI.WITH_CREDENTIALS = false;
  OpenAPI.CREDENTIALS = 'include';
}
```

## API Services

The generated client includes 14 service modules:

1. **AuthService** - Authentication (login, register, password reset)
2. **AccountService** - Account metadata management
3. **UsersService** - User profile and settings
4. **WebsitesService** - Website CRUD operations ✓ *Implemented in demo*
5. **BillingService** - Subscription and payment management
6. **TeamsService** - Team member management
7. **AnalyticsService** - Analytics data
8. **LookupsService** - Enumeration values
9. **HealthService** - API health checks
10. **IdentitiesService** - Identity management
11. **PixelService** - Pixel configuration
12. **ContactMessagesService** - Contact form submissions
13. **DemoRequestsService** - Demo request handling
14. **EventCollectionService** - Event tracking

## Implemented CRUD Operations

### 1. GET - List (with pagination)

**Hook**: `useWebsitesList(limit, offset)`

```typescript
const { data, isLoading, error, refetch } = useWebsitesList(20, 0);

// Response type: WebsiteListResponse
// - data: WebsiteListItem[]
// - pagination: { page, limit, total, has_next }
```

**API Endpoint**: `GET /api/v1/websites?limit=20&offset=0`

### 2. GET - Detail (by ID)

**Hook**: `useWebsite(websiteId)`

```typescript
const { data, isLoading, error } = useWebsite('site_1234567890abcdef');

// Response type: WebsiteDetailResponse
// - data: WebsiteDetail (includes verification info, timestamps, etc.)
```

**API Endpoint**: `GET /api/v1/websites/{website_id}`

### 3. POST - Create

**Hook**: `useCreateWebsite()`

```typescript
const createWebsite = useCreateWebsite();

await createWebsite.mutateAsync({
  account_id: 'acc_9876543210',
  domain: 'example.com',
  platform: 'shopify'
});

// Automatically invalidates 'websites' query cache
```

**API Endpoint**: `POST /api/v1/websites`

**Request Body**:
```json
{
  "account_id": "acc_9876543210",
  "domain": "example.com",
  "platform": "shopify"
}
```

### 4. PUT - Update

**Hook**: `useUpdateWebsite(websiteId)`

```typescript
const updateWebsite = useUpdateWebsite('site_1234567890abcdef');

await updateWebsite.mutateAsync({
  display_name: 'My Store',
  platform: 'woocommerce'
});

// Automatically invalidates both list and detail caches
```

**API Endpoint**: `PUT /api/v1/websites/{website_id}`

**Request Body**:
```json
{
  "display_name": "My Store",
  "platform": "woocommerce"
}
```

### 5. DELETE - Remove

**Hook**: `useDeleteWebsite()`

```typescript
const deleteWebsite = useDeleteWebsite();

await deleteWebsite.mutateAsync('site_1234567890abcdef');

// Automatically invalidates 'websites' query cache
```

**API Endpoint**: `DELETE /api/v1/websites/{website_id}`

## Error Handling

All hooks provide comprehensive error handling:

```typescript
const { data, isLoading, error, refetch } = useWebsitesList();

if (error) {
  // error is typed as Error | null
  console.error('API Error:', error.message);
  
  // User can retry
  refetch();
}
```

Mutations also expose error state:

```typescript
const createWebsite = useCreateWebsite();

if (createWebsite.isError) {
  console.error('Create failed:', createWebsite.error);
  createWebsite.reset(); // Clear error state
}
```

## Loading States

All operations provide loading indicators:

```typescript
// Query loading
if (isLoading) return <Loading />;

// Mutation loading
<button disabled={createWebsite.isPending}>
  {createWebsite.isPending ? 'Creating...' : 'Create'}
</button>
```

## Type Safety

All API calls are fully type-safe with auto-generated TypeScript types:

```typescript
import type {
  WebsiteCreateRequest,
  WebsiteUpdateRequest,
  WebsiteListResponse,
  WebsiteDetailResponse,
} from '../api/generated';

// TypeScript will catch errors at compile time
const request: WebsiteCreateRequest = {
  account_id: 'acc_123',
  domain: 'example.com',
  platform: 'shopify', // Must be valid platform value
};
```

## Request Cancellation

All requests support cancellation via React Query:

```typescript
const queryClient = useQueryClient();

// Cancel all queries for 'websites'
queryClient.cancelQueries({ queryKey: ['websites'] });
```

## Cache Invalidation Strategy

Mutations automatically invalidate related queries:

- **Create**: Invalidates `['websites']` (list)
- **Update**: Invalidates `['websites']` (list) and `['websites', id]` (detail)
- **Delete**: Invalidates `['websites']` (list)

This ensures the UI always shows fresh data after mutations.

## Testing with Postman

### Import the API Spec

1. Open Postman
2. Click **Import** → **Link**
3. Enter: `file:///path/to/docs/api-spec.json`
4. Or drag and drop `docs/api-spec.json`

### Set Environment Variables

Create a Postman environment with:

```
base_url = http://localhost:8000
api_token = your_bearer_token
```

### Example Requests

**List Websites**:
```
GET {{base_url}}/api/v1/websites?limit=20
Authorization: Bearer {{api_token}}
```

**Create Website**:
```
POST {{base_url}}/api/v1/websites
Authorization: Bearer {{api_token}}
Content-Type: application/json

{
  "account_id": "acc_9876543210",
  "domain": "test.example.com",
  "platform": "shopify"
}
```

## Regenerating the API Client

If the OpenAPI spec changes, regenerate the client:

```bash
cd frontend
npx openapi-typescript-codegen \
  -i ../docs/api-spec.json \
  -o ./src/api/generated \
  --client fetch
```

**⚠️ Important**: After regeneration, you need to fix a known issue in `PixelService.ts` where `origin` parameter is duplicated. See [../docs/KNOWN_ISSUES.md](../docs/KNOWN_ISSUES.md) for details and the fix.

## Acceptance Criteria ✓

- [x] **API base URL and auth are configurable** via `.env` variables
- [x] **Types match the Swagger schema** - auto-generated from OpenAPI spec
- [x] **User-facing errors are shown** - ErrorMessage component displays all errors
- [x] **README explains setup** - this document + main README
- [x] **GET operations** - List and detail implemented
- [x] **POST operation** - Create website implemented
- [x] **PUT operation** - Update website implemented
- [x] **DELETE operation** - Delete website implemented
- [x] **Loading states** - All operations show loading indicators
- [x] **Error handling** - Comprehensive error handling with retry capability

## Additional Features

### Optimistic Updates (Optional)

Can be added to mutations for instant UI feedback:

```typescript
const updateWebsite = useMutation({
  mutationFn: (data) => WebsitesService.updateWebsite(id, data),
  onMutate: async (newData) => {
    // Cancel outgoing refetches
    await queryClient.cancelQueries(['websites', id]);
    
    // Snapshot previous value
    const previous = queryClient.getQueryData(['websites', id]);
    
    // Optimistically update
    queryClient.setQueryData(['websites', id], newData);
    
    return { previous };
  },
  onError: (err, newData, context) => {
    // Rollback on error
    queryClient.setQueryData(['websites', id], context.previous);
  },
});
```

### Request Retry

React Query automatically retries failed requests:

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Retry once on failure
      refetchOnWindowFocus: false,
    },
  },
});
```

## Troubleshooting

### CORS Errors

If you see CORS errors, ensure your API server allows requests from `http://localhost:5173`:

```python
# FastAPI example
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### 401 Unauthorized

Ensure `VITE_API_TOKEN` is set in `.env` with a valid Bearer token.

### Network Errors

Check that `VITE_API_BASE_URL` points to a running API server.

## Next Steps

To extend the API integration:

1. Add more service hooks (Auth, Billing, Teams, etc.)
2. Implement authentication flow with token refresh
3. Add request/response interceptors for logging
4. Implement optimistic updates for better UX
5. Add unit tests for hooks using `@testing-library/react-hooks`
