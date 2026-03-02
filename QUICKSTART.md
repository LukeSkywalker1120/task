# Quick Start Guide - Part 1 API Integration

## 🚀 Get Started in 3 Minutes

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- (Optional) A running API server at the configured URL

### Step 1: Install Dependencies

```bash
cd frontend
npm install
```

### Step 2: Configure Environment

```bash
# Copy the example environment file
cp .env.example .env
```

Edit `.env` file:

```bash
# API Configuration
VITE_API_BASE_URL=http://localhost:8000
VITE_API_TOKEN=

# Blockchain Configuration (for Part 2)
VITE_CHAIN_ID=11155111
VITE_CONTRACT_ADDRESS=0x0000000000000000000000000000000000000000
```

**Note**: If you don't have an API server running, the app will still work but will show connection errors. The error handling is designed to handle this gracefully.

### Step 3: Start Development Server

```bash
npm run dev
```

The app will start at **http://localhost:5173**

### Step 4: Explore the Demo

1. Open http://localhost:5173 in your browser
2. Click **"API Demo"** in the navigation
3. Try the CRUD operations:
   - **Create**: Fill the form and create a website
   - **List**: See all websites (will be empty if no API server)
   - **Detail**: Click a website to view details
   - **Update**: Select a website and modify it
   - **Delete**: Remove a website

## 📁 What's Included

### ✅ Completed Features

- **Type-safe API client** (auto-generated from OpenAPI spec)
- **Full CRUD operations** (GET, POST, PUT, DELETE)
- **Error handling** with user-friendly messages
- **Loading states** for all operations
- **React Query integration** for caching and state management
- **Comprehensive documentation**

### 📂 Key Files

```
frontend/
├── src/
│   ├── api/
│   │   ├── generated/         # Auto-generated API client (115+ types)
│   │   └── config.ts          # API configuration
│   ├── hooks/
│   │   └── useWebsites.ts     # Website CRUD hooks
│   ├── pages/
│   │   └── ApiDemo.tsx        # Full CRUD demo
│   └── main.tsx               # App entry point
├── .env.example               # Environment template
├── API_INTEGRATION.md         # Detailed API docs
└── README.md                  # Frontend documentation
```

## 🧪 Testing Without API Server

If you don't have an API server running:

1. The app will display connection errors (this is expected)
2. You can still explore the UI and see how error handling works
3. The error messages will show "Failed to fetch" or similar
4. You can click "Dismiss" to clear errors

**To test with a real API:**
- Set `VITE_API_BASE_URL` to your API server URL
- Set `VITE_API_TOKEN` if authentication is required
- Restart the dev server (`npm run dev`)

## 📖 Documentation

- **[API_INTEGRATION.md](frontend/API_INTEGRATION.md)** - Detailed API integration guide
- **[POSTMAN_GUIDE.md](docs/POSTMAN_GUIDE.md)** - Testing with Postman
- **[PART1_COMPLETION.md](PART1_COMPLETION.md)** - Implementation report
- **[frontend/README.md](frontend/README.md)** - Frontend documentation

## 🎯 Next Steps

### For Evaluation

1. Review the code structure in `frontend/src/`
2. Check the API integration in `ApiDemo.tsx`
3. Examine the generated types in `src/api/generated/models/`
4. Read the documentation files

### For Development

1. Implement more API services (Auth, Billing, etc.)
2. Add authentication flow
3. Complete Part 2: Blockchain integration
4. Add unit and integration tests

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is already in use:

```bash
# Kill the process using the port (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or change the port in vite.config.ts
```

### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# Regenerate the API client
npx openapi-typescript-codegen \
  -i ../docs/api-spec.json \
  -o ./src/api/generated \
  --client fetch
```

### CORS Errors

If you see CORS errors when connecting to an API:
- Ensure your API server allows requests from `http://localhost:5173`
- Add CORS headers to your API server
- Or use a proxy in `vite.config.ts`

## 📞 Support

For questions about the implementation:
- See [API_INTEGRATION.md](frontend/API_INTEGRATION.md) for detailed docs
- Check [PART1_COMPLETION.md](PART1_COMPLETION.md) for implementation details
- Review the inline code comments

## ✅ Acceptance Criteria

All Part 1 requirements have been completed:

- ✅ API client generated from OpenAPI spec
- ✅ Types match Swagger schema
- ✅ GET operations (list + detail)
- ✅ POST operation (create)
- ✅ PUT operation (update)
- ✅ DELETE operation
- ✅ Error handling with user feedback
- ✅ Loading states
- ✅ Configurable via environment variables
- ✅ Documentation

**Status: Part 1 COMPLETE** ✅

---

**Time to complete**: ~3 minutes for setup, then explore at your own pace!
