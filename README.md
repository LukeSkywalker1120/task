# Technical Test: API Integration & Blockchain

This repo contains the **task description** and a **React frontend** implementation for the technical test.

## ✅ Status

- **Part 1: API Integration** - ✅ **COMPLETED**
- **Part 2: Blockchain Integration** - 🔄 In Progress

## Contents

| Item | Description | Status |
|------|-------------|--------|
| [TASK.md](./TASK.md) | Full task requirements and acceptance criteria | - |
| **frontend/** | React + TypeScript app with type-safe API client and Web3 integration | ✅ Part 1 Done |
| **frontend/API_INTEGRATION.md** | Detailed API integration documentation | ✅ Complete |
| **docs/api-spec.json** | OpenAPI 3.1.0 specification (LaRevela API) | ✅ Provided |
| **docs/SWAGGER.md** | Swagger/OpenAPI usage notes | ✅ Complete |

## Part 1: API Integration ✅

### Implementation Summary

- ✅ **Type-safe API client** auto-generated from OpenAPI 3.1.0 specification
- ✅ **115+ TypeScript models** and **14 service modules**
- ✅ **Full CRUD operations** implemented:
  - **GET**: List websites (paginated) + Get website detail
  - **POST**: Create new website
  - **PUT**: Update website metadata
  - **DELETE**: Remove website
- ✅ **Error handling** with user-friendly messages and retry capability
- ✅ **Loading states** for all operations
- ✅ **Configurable** via environment variables
- ✅ **React Query** integration for caching and state management

### Quick Start

```bash
cd frontend
npm install
cp .env.example .env
# Edit .env - set VITE_API_BASE_URL and VITE_API_TOKEN
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and navigate to **API Demo** to see the implementation.

Use this account below to login and start testing demo:
email: 770826899@qq.com
password: abc951120

### Key Files

- `frontend/src/api/generated/` - Auto-generated API client (do not edit)
- `frontend/src/hooks/useWebsites.ts` - React Query hooks for CRUD operations
- `frontend/src/pages/ApiDemo.tsx` - Full CRUD demonstration UI
- `frontend/API_INTEGRATION.md` - Detailed documentation

### API Services Available

The generated client includes 14 service modules:

1. **WebsitesService** ✓ *Fully implemented with CRUD demo*
2. AuthService - Authentication endpoints
3. AccountService - Account management
4. UsersService - User profiles
5. BillingService - Subscriptions and payments
6. TeamsService - Team management
7. AnalyticsService - Analytics data
8. LookupsService - Enumeration values
9. HealthService - Health checks
10. IdentitiesService - Identity management
11. PixelService - Pixel configuration
12. ContactMessagesService - Contact forms
13. DemoRequestsService - Demo requests
14. EventCollectionService - Event tracking

### Testing with Postman

1. Import `docs/api-spec.json` into Postman
2. Set environment variables:
   - `base_url`: Your API server URL
   - `api_token`: Your Bearer token
3. Test endpoints to verify request/response format

## Part 2: Blockchain Integration 🔄

### Current Implementation

The frontend includes a basic blockchain integration framework:

- Wallet connection (MetaMask)
- Contract read operations (example: `balanceOf`)
- Contract write operations (example: `transfer`)
- Transaction status tracking

### To Complete

1. Configure contract address and chain ID in `.env`
2. Replace example ABI with your contract's ABI
3. Implement required read/write operations per task requirements

## Project Structure

```
task/
├── frontend/                    # React + TypeScript application
│   ├── src/
│   │   ├── api/
│   │   │   ├── generated/      # ✨ Auto-generated from OpenAPI
│   │   │   │   ├── services/   # 14 API service classes
│   │   │   │   ├── models/     # 115+ TypeScript types
│   │   │   │   └── core/       # Request/error handling
│   │   │   ├── config.ts       # API client configuration
│   │   │   └── index.ts        # Public exports
│   │   ├── blockchain/         # Web3 integration (viem)
│   │   ├── components/         # Reusable UI components
│   │   ├── hooks/              # Custom React hooks
│   │   │   ├── useWebsites.ts  # ✨ Website CRUD operations
│   │   │   ├── useWallet.ts    # Wallet connection
│   │   │   └── useApi.ts       # Generic API hooks
│   │   ├── pages/
│   │   │   ├── ApiDemo.tsx     # ✨ Full CRUD demonstration
│   │   │   ├── BlockchainDemo.tsx
│   │   │   └── Home.tsx
│   │   └── types/              # Shared types
│   ├── API_INTEGRATION.md      # ✨ Detailed API docs
│   ├── README.md               # Frontend documentation
│   ├── .env.example            # ✨ Environment template
│   └── package.json
├── docs/
│   ├── api-spec.json           # OpenAPI 3.1.0 specification
│   └── SWAGGER.md              # OpenAPI usage notes
├── TASK.md                     # Task requirements
└── README.md                   # This file
```

## Technology Stack

- **React 19.2.0** - UI framework
- **TypeScript 5.9.3** - Type safety
- **Vite 7.3.1** - Build tool and dev server
- **TanStack React Query 5.90.21** - Data fetching and caching
- **Axios 1.13.6** - HTTP client
- **Viem 2.46.3** - Ethereum library
- **React Router DOM 7.13.1** - Client-side routing
- **openapi-typescript-codegen** - API client generation

## Documentation

- [TASK.md](./TASK.md) - Original task requirements
- [frontend/README.md](./frontend/README.md) - Frontend setup and overview
- [frontend/API_INTEGRATION.md](./frontend/API_INTEGRATION.md) - Detailed API integration guide
- [docs/SWAGGER.md](./docs/SWAGGER.md) - OpenAPI/Swagger notes

## Acceptance Criteria

### Part 1: API Integration ✅

- [x] API base URL and auth are configurable via environment variables
- [x] Types match the Swagger schema (auto-generated from OpenAPI spec)
- [x] User-facing errors are shown with dismissible messages
- [x] README explains how to run the app and configure the API
- [x] GET operations: List (paginated) and detail by ID
- [x] POST operation: Create new resource
- [x] PUT operation: Update existing resource
- [x] DELETE operation: Remove resource
- [x] Loading states for all operations
- [x] Error handling with retry capability

### Part 2: Blockchain Integration 🔄

- [ ] User can connect/disconnect wallet and see address
- [ ] At least one read from the contract is displayed
- [ ] At least one write (signed transaction) with status feedback
- [ ] README states chain ID, contract address, and setup instructions

## Regenerating the API Client

If the OpenAPI specification changes:

```bash
cd frontend
npx openapi-typescript-codegen \
  -i ../docs/api-spec.json \
  -o ./src/api/generated \
  --client fetch
```

**⚠️ Note**: After regeneration, fix the duplicate `origin` parameter issue in `PixelService.ts`. See [docs/KNOWN_ISSUES.md](docs/KNOWN_ISSUES.md) for details.

## Design Decisions

### API Client Generation

- **Choice**: `openapi-typescript-codegen` over manual implementation
- **Reason**: Ensures type safety, reduces boilerplate, stays in sync with API spec
- **Benefits**: 115+ models and 14 services generated automatically

### State Management

- **Choice**: React Query over Redux/Zustand
- **Reason**: Built-in caching, loading states, error handling, and request deduplication
- **Benefits**: Less boilerplate, automatic cache invalidation, optimistic updates support

### Code Organization

- **Generated code** isolated in `src/api/generated/` (never edited manually)
- **Custom hooks** wrap generated services for React Query integration
- **Pages** demonstrate usage without business logic
- **Components** are reusable and presentation-focused

## Improvements with More Time

1. **Testing**: Unit tests for hooks, integration tests for API calls
2. **Authentication**: Complete auth flow with token refresh
3. **Optimistic Updates**: Instant UI feedback before server response
4. **Request Interceptors**: Centralized logging and error handling
5. **More Services**: Implement hooks for all 14 API services
6. **Error Boundaries**: React error boundaries for graceful failure handling
7. **Accessibility**: ARIA labels, keyboard navigation, screen reader support
8. **Performance**: Code splitting, lazy loading, virtual scrolling for large lists

## Troubleshooting

### CORS Errors

Ensure your API server allows requests from `http://localhost:5173`.

### 401 Unauthorized

Verify `VITE_API_TOKEN` is set correctly in `.env`.

### API Connection Failed

Check that `VITE_API_BASE_URL` points to a running API server.

### Type Errors After Spec Update

Regenerate the API client using the command above.

## Contact

For questions about the implementation, see the detailed documentation in:
- [frontend/API_INTEGRATION.md](./frontend/API_INTEGRATION.md)
