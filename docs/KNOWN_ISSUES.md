# Known Issues and Solutions

## API Code Generation Issues

### Issue 1: Duplicate Parameter Names in PixelService

**Problem**: The auto-generated `PixelService.ts` had duplicate `origin` parameters causing a TypeScript compilation error.

**Root Cause**: The OpenAPI specification defines both:
- Query parameter: `origin`
- Header parameter: `Origin`

When `openapi-typescript-codegen` generates the code, it lowercases header names, causing a collision.

**Solution**: Manually renamed parameters in `PixelService.ts`:
- Query parameter: `origin`
- Header parameter: `originHeader`
- Header parameter: `refererHeader`

**Location**: `frontend/src/api/generated/services/PixelService.ts` (lines 19-24)

**Fixed Code**:
```typescript
public static bootstrapPixelApiV1PixelBootstrapGet(
    origin?: (string | null),           // Query parameter
    env?: (string | null),
    originHeader?: (string | null),     // Header parameter (renamed)
    refererHeader?: (string | null),    // Header parameter (renamed)
): CancelablePromise<PixelBootstrapConfig>
```

**Important**: If you regenerate the API client, you'll need to apply this fix again.

### How to Avoid This Issue

#### Option 1: Fix the OpenAPI Spec

Edit `docs/api-spec.json` and change the parameter names in the Pixel bootstrap endpoint:

```json
{
  "name": "X-Origin",
  "in": "header",
  ...
}
```

Then regenerate:
```bash
npx openapi-typescript-codegen -i ../docs/api-spec.json -o ./src/api/generated
```

#### Option 2: Post-Generation Script

Create a script to automatically fix duplicate parameters after generation:

```bash
# fix-generated-code.sh
#!/bin/bash
sed -i 's/origin?: (string | null),        origin?:/originQuery?: (string | null),        originHeader?:/' \
  src/api/generated/services/PixelService.ts
```

Run after generation:
```bash
npx openapi-typescript-codegen -i ../docs/api-spec.json -o ./src/api/generated
./fix-generated-code.sh
```

#### Option 3: Manual Fix (Current Approach)

After any regeneration, manually fix the duplicate parameters in `PixelService.ts`.

## General Notes

### Generated Code Modifications

The following files have been manually modified and should be preserved if regenerating:

1. `frontend/src/api/generated/services/PixelService.ts` - Fixed duplicate parameters

### Regeneration Command

When regenerating the API client:

```bash
cd frontend
npx openapi-typescript-codegen \
  -i ../docs/api-spec.json \
  -o ./src/api/generated \
  --client fetch
```

**After regeneration**, check and fix:
- `PixelService.ts` - Duplicate `origin` parameters

## Other Potential Issues

### CORS Configuration

If you encounter CORS errors when connecting to the API:

**Problem**: Browser blocks requests due to CORS policy

**Solution**: Configure your API server to allow requests from the frontend origin:

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

### Authentication Token Storage

**Problem**: Token needs to be manually set in `.env`

**Solution**: For production, implement proper authentication:
1. Login flow to obtain token
2. Store in httpOnly cookies or secure localStorage
3. Add token refresh logic
4. Handle token expiration

### Large Response Payloads

**Problem**: Some API responses may be very large

**Solution**:
- Implement pagination
- Add infinite scroll
- Use virtual scrolling for large lists
- Add response size limits

## Workarounds

### Testing Without API Server

If you don't have access to the real API server:

1. **Use Mock Service Worker (MSW)**:
```bash
npm install msw --save-dev
```

2. **Create mock handlers**:
```typescript
// src/mocks/handlers.ts
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/v1/websites', (req, res, ctx) => {
    return res(ctx.json({ success: true, data: [] }));
  }),
];
```

3. **Start mock server in dev mode**

### Environment Variable Not Loading

**Problem**: Changes to `.env` not reflected in app

**Solution**:
1. Restart the dev server (`npm run dev`)
2. Ensure variables start with `VITE_`
3. Check `.env` is in the `frontend/` directory

## Future Improvements

1. **Automated tests** to catch generation issues early
2. **CI/CD pipeline** to validate generated code
3. **Custom generator templates** to avoid common issues
4. **Pre-commit hooks** to validate OpenAPI spec

## Resources

- [openapi-typescript-codegen Issues](https://github.com/ferdikoomen/openapi-typescript-codegen/issues)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [React Query Best Practices](https://tanstack.com/query/latest/docs/react/guides/best-practices)
