# Postman Testing Guide

This guide explains how to use Postman to test the LaRevela API before and during frontend implementation.

## Import the OpenAPI Specification

### Method 1: Import from File

1. Open Postman
2. Click **Import** button (top left)
3. Select **File** tab
4. Click **Choose Files**
5. Navigate to `docs/api-spec.json`
6. Click **Import**

### Method 2: Import from Link

1. Open Postman
2. Click **Import** button
3. Select **Link** tab
4. Paste the URL to your hosted OpenAPI spec
5. Click **Continue** → **Import**

Postman will automatically generate a collection with all API endpoints organized by tags.

## Setup Environment

### Create Environment

1. Click the **Environments** icon (left sidebar)
2. Click **+** to create a new environment
3. Name it: `LaRevela Local` (or your preference)
4. Add the following variables:

| Variable | Initial Value | Current Value | Description |
|----------|--------------|---------------|-------------|
| `base_url` | `http://localhost:8000` | `http://localhost:8000` | API base URL |
| `api_token` | `` | `your_actual_token_here` | Bearer token for authentication |
| `account_id` | `acc_test123` | `acc_test123` | Test account ID |
| `website_id` | `` | `` | Created website ID (auto-populated) |

5. Click **Save**
6. Select the environment from the dropdown (top right)

## Example Requests

### 1. Health Check

**Endpoint**: `GET /health`

No authentication required. Use this to verify the API is running.

```
GET {{base_url}}/health
```

**Expected Response**:
```json
{
  "status": "ok"
}
```

### 2. List Websites (GET)

**Endpoint**: `GET /api/v1/websites`

```
GET {{base_url}}/api/v1/websites?limit=20&offset=0
Authorization: Bearer {{api_token}}
```

**Expected Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": "site_1234567890abcdef",
      "account_id": "acc_9876543210",
      "domain": "example.com",
      "status": "live",
      "platform": "shopify",
      "created_at": "2025-11-19T18:40:12Z",
      "last_seen_at": "2025-11-20T10:15:30Z",
      "privacy_acknowledged": "Yes"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 42,
    "has_next": true
  }
}
```

### 3. Create Website (POST)

**Endpoint**: `POST /api/v1/websites`

```
POST {{base_url}}/api/v1/websites
Authorization: Bearer {{api_token}}
Content-Type: application/json

{
  "account_id": "{{account_id}}",
  "domain": "test.example.com",
  "platform": "shopify"
}
```

**Expected Response**:
```json
{
  "success": true,
  "data": {
    "id": "site_abc123xyz",
    "account_id": "acc_test123",
    "domain": "test.example.com",
    "status": "pending",
    "created_at": "2025-11-20T14:30:00Z"
  }
}
```

**Post-request Script** (to save website_id):
```javascript
if (pm.response.code === 201 && pm.response.json().success) {
  pm.environment.set("website_id", pm.response.json().data.id);
  console.log("Saved website_id:", pm.response.json().data.id);
}
```

### 4. Get Website Detail (GET by ID)

**Endpoint**: `GET /api/v1/websites/{website_id}`

```
GET {{base_url}}/api/v1/websites/{{website_id}}
Authorization: Bearer {{api_token}}
```

**Expected Response**:
```json
{
  "success": true,
  "data": {
    "id": "site_abc123xyz",
    "account_id": "acc_test123",
    "domain": "test.example.com",
    "status": "live",
    "platform": "shopify",
    "created_at": "2025-11-20T14:30:00Z",
    "last_seen_at": "2025-11-20T15:45:22Z",
    "verification": {
      "status": "live"
    }
  }
}
```

### 5. Update Website (PUT)

**Endpoint**: `PUT /api/v1/websites/{website_id}`

```
PUT {{base_url}}/api/v1/websites/{{website_id}}
Authorization: Bearer {{api_token}}
Content-Type: application/json

{
  "display_name": "My Test Store",
  "platform": "woocommerce"
}
```

**Expected Response**:
```json
{
  "success": true,
  "data": {
    "id": "site_abc123xyz",
    "account_id": "acc_test123",
    "domain": "test.example.com",
    "status": "live",
    "platform": "woocommerce",
    "created_at": "2025-11-20T14:30:00Z",
    "last_seen_at": "2025-11-20T15:45:22Z",
    "verification": {
      "status": "live"
    }
  }
}
```

### 6. Delete Website (DELETE)

**Endpoint**: `DELETE /api/v1/websites/{website_id}`

```
DELETE {{base_url}}/api/v1/websites/{{website_id}}
Authorization: Bearer {{api_token}}
```

**Expected Response**:
```json
{
  "success": true,
  "data": {
    "deleted": true
  }
}
```

## Authentication Flow

### 1. Send Verification Code

```
POST {{base_url}}/api/v1/auth/send-verification-code
Content-Type: application/json

{
  "email": "user@example.com",
  "plan": "plan_starter_monthly"
}
```

### 2. Verify Email

```
POST {{base_url}}/api/v1/auth/verify-email
Content-Type: application/json

{
  "email": "user@example.com",
  "verification_id": "ver_9f3c12d9c7b4",
  "verification_code": "123456"
}
```

### 3. Login

```
POST {{base_url}}/api/v1/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "YourPassword123!",
  "remember_me": false
}
```

**Post-request Script** (to save token):
```javascript
if (pm.response.code === 200 && pm.response.json().success) {
  // Note: The actual token is in the HTTP-only cookie
  // You may need to extract it from the Set-Cookie header
  console.log("Login successful");
}
```

## Testing Workflow

### Complete CRUD Test Sequence

1. **Health Check** - Verify API is running
2. **Login** - Get authentication token
3. **List Websites** - See existing websites
4. **Create Website** - Create a test website (saves ID to environment)
5. **Get Website Detail** - Fetch the created website
6. **Update Website** - Modify the website
7. **Get Website Detail** - Verify the update
8. **Delete Website** - Remove the test website
9. **List Websites** - Verify deletion

### Run Collection

1. Select the imported collection
2. Click **Run** (top right)
3. Select the environment
4. Choose which requests to run
5. Click **Run [Collection Name]**
6. Review results

## Common Response Codes

| Code | Meaning | Description |
|------|---------|-------------|
| 200 | OK | Request succeeded |
| 201 | Created | Resource created successfully |
| 400 | Bad Request | Invalid request body or parameters |
| 401 | Unauthorized | Missing or invalid authentication token |
| 404 | Not Found | Resource not found |
| 422 | Validation Error | Request body failed validation |
| 500 | Internal Server Error | Server error |

## Error Response Format

All errors follow this structure:

```json
{
  "success": false,
  "data": null,
  "error": {
    "message": "Validation failed",
    "details": "Domain is required"
  }
}
```

For 422 validation errors:

```json
{
  "detail": [
    {
      "loc": ["body", "domain"],
      "msg": "field required",
      "type": "value_error.missing"
    }
  ]
}
```

## Tips

### Auto-save Variables

Add this to the **Tests** tab of any request to auto-save response data:

```javascript
// Save website ID from create response
if (pm.response.code === 201) {
  const response = pm.response.json();
  if (response.success && response.data.id) {
    pm.environment.set("website_id", response.data.id);
  }
}

// Save token from login response
if (pm.response.code === 200) {
  const response = pm.response.json();
  if (response.success && response.data.token) {
    pm.environment.set("api_token", response.data.token);
  }
}
```

### Pre-request Scripts

Add this to the **Pre-request Script** tab to log requests:

```javascript
console.log("Request:", pm.request.method, pm.request.url.toString());
console.log("Body:", pm.request.body);
```

### Collection Variables

For values that don't change often, use collection variables instead of environment variables:

1. Click the collection
2. Go to **Variables** tab
3. Add variables like `api_version`, `default_platform`, etc.

## Aligning with Frontend

When implementing in the frontend:

1. **Match request structure** - Use the same body format as in Postman
2. **Handle response structure** - Expect the same response format
3. **Check status codes** - Handle the same error codes
4. **Use same headers** - Include `Authorization: Bearer {token}`
5. **Test edge cases** - Try invalid data, missing fields, etc.

## Exporting Collection

To share your collection:

1. Right-click the collection
2. Click **Export**
3. Choose **Collection v2.1** format
4. Save as `LaRevela_API.postman_collection.json`
5. Share with team

## Next Steps

1. Test all CRUD operations in Postman
2. Verify request/response formats match OpenAPI spec
3. Document any discrepancies
4. Use the same structure in your frontend implementation
5. Add automated tests using Newman (Postman CLI)

## Resources

- [Postman Documentation](https://learning.postman.com/docs/)
- [OpenAPI Specification](https://swagger.io/specification/)
- [Newman (Postman CLI)](https://www.npmjs.com/package/newman)
