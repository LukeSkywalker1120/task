# Frontend – API & Blockchain Technical Test

React + TypeScript frontend with **type-safe API integration** and blockchain (Web3) support.

## ✅ Part 1: API Integration - COMPLETED

This project implements a complete REST API integration using:
- **OpenAPI 3.1.0** specification (LaRevela API)
- **Auto-generated TypeScript client** (115+ models, 14 services)
- **React Query** for data fetching, caching, and state management
- **Full CRUD operations**: GET (list/detail), POST, PUT, DELETE

See [API_INTEGRATION.md](./API_INTEGRATION.md) for detailed documentation.

## Structure

```
src/
  api/
    generated/   # ✨ Auto-generated from OpenAPI spec
      services/  # 14 API service classes
      models/    # 115+ TypeScript types
      core/      # Request/error handling
    config.ts    # OpenAPI client configuration
    client.ts    # Legacy manual client (for reference)
    index.ts     # Public API exports
  blockchain/    # Contract config, read/write helpers (viem)
  components/    # Layout, ErrorMessage, Loading
  hooks/
    useWebsites.ts  # ✨ Website CRUD operations (demo)
    useApi.ts       # Generic API hooks (legacy)
    useWallet.ts    # Wallet connection and transactions
  pages/
    Home.tsx           # Landing page
    ApiDemo.tsx        # ✨ Full CRUD demonstration
    BlockchainDemo.tsx # Web3 wallet and contract interaction
  types/         # Shared types
```

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
```

Edit `.env`:

```bash
# API Configuration
VITE_API_BASE_URL=http://localhost:8000
VITE_API_TOKEN=your_bearer_token_here

# Blockchain Configuration (for Part 2)
VITE_CHAIN_ID=11155111
VITE_CONTRACT_ADDRESS=0x0000000000000000000000000000000000000000
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## API Integration (Part 1)

### Features Implemented ✓

- ✅ **Type-safe API client** generated from OpenAPI 3.1.0 spec
- ✅ **GET operations**: List websites (paginated) + Get website detail
- ✅ **POST operation**: Create new website
- ✅ **PUT operation**: Update website metadata
- ✅ **DELETE operation**: Remove website
- ✅ **Error handling**: User-friendly error messages with retry
- ✅ **Loading states**: Visual feedback for all operations
- ✅ **Configurable**: Base URL and auth token via environment variables
- ✅ **Cache management**: Automatic invalidation on mutations

### API Services Available

The generated client includes 14 service modules:

1. **WebsitesService** ✓ *Implemented in demo*
2. **AuthService** - Login, register, password reset
3. **AccountService** - Account metadata
4. **UsersService** - User profiles and settings
5. **BillingService** - Subscriptions and payments
6. **TeamsService** - Team member management
7. **AnalyticsService** - Analytics data
8. **LookupsService** - Enumeration values
9. **HealthService** - API health checks
10. **IdentitiesService** - Identity management
11. **PixelService** - Pixel configuration
12. **ContactMessagesService** - Contact forms
13. **DemoRequestsService** - Demo requests
14. **EventCollectionService** - Event tracking

### Testing with Postman

1. Import `../docs/api-spec.json` into Postman
2. Set environment variables:
   - `base_url`: `http://localhost:8000`
   - `api_token`: Your Bearer token
3. Test endpoints before implementing in the app

See [API_INTEGRATION.md](./API_INTEGRATION.md) for detailed examples.

### Regenerating the API Client

If the OpenAPI spec changes:

```bash
npx openapi-typescript-codegen \
  -i ../docs/api-spec.json \
  -o ./src/api/generated \
  --client fetch
```

## Blockchain Integration (Part 2)

### Features

- **Wallet**: Connect via MetaMask (or other injected provider)
- **Config**: Chain ID and contract address from `.env`
- **Read**: Example `balanceOf` in `blockchain/contract.ts`
- **Write**: Example `transfer` with transaction status tracking

### Configuration

- `VITE_CHAIN_ID`: Chain ID (e.g. `1` for mainnet, `11155111` for Sepolia)
- `VITE_CONTRACT_ADDRESS`: Your smart contract address
- Replace the example ABI in `blockchain/contract.ts` with your contract's ABI

## Scripts

- `npm run dev` – Start development server (Vite)
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Run ESLint

## Project Structure Details

### API Layer

- **Generated code** (`src/api/generated/`): Never edit manually
- **Configuration** (`src/api/config.ts`): Initialize OpenAPI client
- **Hooks** (`src/hooks/useWebsites.ts`): React Query wrappers

### Components

- **Layout**: Navigation and page structure
- **ErrorMessage**: Dismissible error display with retry
- **Loading**: Loading spinner component

### Pages

- **Home**: Landing page with navigation
- **ApiDemo**: Full CRUD demonstration with:
  - List view with pagination
  - Detail view
  - Create form
  - Update form
  - Delete action
- **BlockchainDemo**: Wallet connection and contract interaction

## Acceptance Criteria (Part 1) ✓

- [x] API base URL and auth are configurable via `.env`
- [x] Types match the Swagger schema (auto-generated)
- [x] User-facing errors are shown with retry capability
- [x] README explains how to run and configure the app
- [x] At least GET (list/detail), POST, PUT/PATCH, and DELETE implemented
- [x] Loading and error states in the UI
- [x] Request cancellation support (via React Query)

## Technology Stack

- **React 19.2.0** - UI framework
- **TypeScript 5.9.3** - Type safety
- **Vite 7.3.1** - Build tool
- **TanStack React Query 5.90.21** - Data fetching and caching
- **Axios 1.13.6** - HTTP client
- **Viem 2.46.3** - Ethereum library
- **React Router DOM 7.13.1** - Routing

## Documentation

- [API_INTEGRATION.md](./API_INTEGRATION.md) - Detailed API integration guide
- [../docs/SWAGGER.md](../docs/SWAGGER.md) - OpenAPI/Swagger notes
- [../TASK.md](../TASK.md) - Original task requirements

## Troubleshooting

### CORS Errors

Ensure your API server allows requests from `http://localhost:5173`.

### 401 Unauthorized

Check that `VITE_API_TOKEN` is set correctly in `.env`.

### API Not Found (404)

Verify `VITE_API_BASE_URL` points to a running API server.

### Type Errors

If you see TypeScript errors after updating the OpenAPI spec, regenerate the client.

## Next Steps

1. **Part 2**: Complete blockchain smart contract integration
2. **Authentication**: Implement login/logout flow
3. **More Services**: Add hooks for Auth, Billing, Teams, etc.
4. **Testing**: Add unit and integration tests
5. **Optimistic Updates**: Improve UX with instant feedback
