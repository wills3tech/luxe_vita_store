# Luxe Vita Store - Deployment Guide

This is a complete full-stack e-commerce application built with React, Express, and MySQL. Follow this guide to deploy on platforms like Railway, Render, Fly.io, or any Node.js hosting service.

## 📋 Project Overview

**Tech Stack:**
- **Frontend**: React 19 + Tailwind CSS 4 + TypeScript
- **Backend**: Express 4 + tRPC 11
- **Database**: MySQL 8+
- **Runtime**: Node.js 22+

**Features:**
- Product catalog with search and filtering
- Wholesale inquiry management
- Google Maps integration
- WhatsApp contact integration
- Responsive design (mobile, tablet, desktop)

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 22+ ([download](https://nodejs.org/))
- MySQL 8+ ([download](https://dev.mysql.com/downloads/mysql/))
- pnpm 10+ (install via `npm install -g pnpm`)

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Set Up Database

Create a MySQL database:
```sql
CREATE DATABASE luxe_vita_store;
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:
```env
# Database
DATABASE_URL="mysql://username:password@localhost:3306/luxe_vita_store"

# Authentication
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"

# OAuth (optional - for Manus OAuth integration)
VITE_APP_ID="your-app-id"
OAUTH_SERVER_URL="https://api.manus.im"
VITE_OAUTH_PORTAL_URL="https://portal.manus.im"

# Owner Info
OWNER_NAME="Luxe Vita Store"
OWNER_OPEN_ID="owner-id"

# Analytics (optional)
VITE_ANALYTICS_ENDPOINT="https://analytics.example.com"
VITE_ANALYTICS_WEBSITE_ID="your-website-id"

# API Keys
BUILT_IN_FORGE_API_KEY="your-api-key"
BUILT_IN_FORGE_API_URL="https://api.example.com"
VITE_FRONTEND_FORGE_API_KEY="your-frontend-api-key"
VITE_FRONTEND_FORGE_API_URL="https://api.example.com"
```

### 4. Run Database Migrations

```bash
pnpm drizzle-kit generate
pnpm drizzle-kit migrate
```

### 5. Seed Sample Data

```bash
node scripts/seed-products.mjs
```

### 6. Start Development Server

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## 🌐 Deployment Options

### Option 1: Railway (Recommended - Easiest)

1. **Sign up** at [railway.app](https://railway.app)
2. **Connect your GitHub repository** or upload the code
3. **Create a MySQL database** plugin
4. **Set environment variables** in Railway dashboard
5. **Deploy** - Railway auto-detects Node.js and builds/runs the app

**Build Command**: `pnpm build`
**Start Command**: `pnpm start`
**Port**: `3000` (Railway auto-detects)

### Option 2: Render

1. **Sign up** at [render.com](https://render.com)
2. **Create a new Web Service**
3. **Connect your GitHub repository**
4. **Create a MySQL database** (or use external MySQL)
5. **Set environment variables**
6. **Configure build/start commands**

**Build Command**: `pnpm install && pnpm build`
**Start Command**: `pnpm start`

### Option 3: Fly.io

1. **Install Fly CLI**: `curl -L https://fly.io/install.sh | sh`
2. **Sign up**: `flyctl auth signup`
3. **Create app**: `flyctl launch`
4. **Add MySQL** (via Fly Postgres or external MySQL)
5. **Set secrets**: `flyctl secrets set DATABASE_URL=...`
6. **Deploy**: `flyctl deploy`

### Option 4: AWS, DigitalOcean, or Heroku

Use similar steps:
1. Create a Node.js app/dyno
2. Set up MySQL database
3. Configure environment variables
4. Deploy using Git or CLI

## 📦 Build & Production

### Build the Application

```bash
pnpm build
```

This creates:
- `dist/public/` - Optimized frontend (HTML, CSS, JS)
- `dist/index.js` - Production server bundle

### Run Production Build Locally

```bash
pnpm start
```

## 🔐 Environment Variables for Production

**Critical Security Notes:**
- **Never commit `.env` file** to version control
- Use your hosting platform's secrets/environment variables feature
- Generate a strong `JWT_SECRET` (use `openssl rand -base64 32`)
- Keep API keys and database credentials secure

**Required Variables:**
- `DATABASE_URL` - MySQL connection string
- `JWT_SECRET` - Session signing key (generate new one)
- `NODE_ENV` - Set to `production`

**Optional Variables:**
- OAuth, analytics, and API integrations (only if using those features)

## 🗄️ Database Setup

### Initial Schema

The database schema is defined in `drizzle/schema.ts`. It includes:
- `users` - User accounts and authentication
- `categories` - Product categories
- `products` - Product listings
- `wholesaleInquiries` - Customer inquiry submissions

### Running Migrations

```bash
# Generate migration from schema changes
pnpm drizzle-kit generate

# Apply migrations
pnpm drizzle-kit migrate
```

### Seeding Data

```bash
# Populate sample products and categories
node scripts/seed-products.mjs
```

## 📁 Project Structure

```
luxe-vita-store/
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable UI components
│   │   ├── App.tsx        # Main app with routing
│   │   └── index.css      # Global styles
│   ├── index.html         # HTML entry point
│   └── public/            # Static assets
├── server/                # Express backend
│   ├── routers.ts         # tRPC procedures
│   ├── db.ts              # Database queries
│   └── _core/             # Framework internals
├── drizzle/               # Database schema & migrations
│   ├── schema.ts          # Table definitions
│   └── migrations/        # SQL migrations
├── scripts/               # Utility scripts
│   └── seed-products.mjs  # Database seeding
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── vite.config.ts         # Frontend build config
└── vitest.config.ts       # Test config
```

## 🧪 Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test --watch
```

## 🎨 Customization

### Update Branding

1. **Site Title**: Edit `client/index.html` `<title>` tag
2. **Logo**: Replace files in `client/public/`
3. **Colors**: Edit `client/src/index.css` CSS variables
4. **Content**: Edit page components in `client/src/pages/`

### Add Products

1. **Via Database**: Use `scripts/seed-products.mjs` as a template
2. **Via Admin UI**: Create an admin panel (future enhancement)

### Modify Features

1. **Database Schema**: Edit `drizzle/schema.ts`, generate migration
2. **Backend Logic**: Edit `server/routers.ts` tRPC procedures
3. **Frontend UI**: Edit components in `client/src/pages/` and `client/src/components/`

## 🐛 Troubleshooting

### Build Fails

- Check Node.js version: `node --version` (should be 22+)
- Clear cache: `rm -rf node_modules && pnpm install`
- Check for TypeScript errors: `pnpm check`

### Database Connection Error

- Verify `DATABASE_URL` is correct
- Ensure MySQL server is running
- Check firewall/network access to database

### Port Already in Use

- Change port in `server/_core/index.ts`
- Or kill process: `lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9`

### WhatsApp Links Not Working

- Verify phone number format: `07082769477`
- Test link: `https://wa.me/2347082769477`

## 📊 Monitoring & Logs

Most hosting platforms provide:
- **Logs**: View application output and errors
- **Metrics**: CPU, memory, request counts
- **Alerts**: Notifications for errors/downtime

Check your platform's dashboard for details.

## 🔄 Continuous Deployment

### GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Railway

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '22'
      - run: npm install -g pnpm && pnpm install
      - run: pnpm build
      - uses: railwayapp/deploy-action@v1
        env:
          RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}
```

## 📞 Support & Resources

- **Documentation**: See README.md
- **Issues**: Check GitHub Issues
- **Hosting Platforms**:
  - Railway: https://railway.app/docs
  - Render: https://render.com/docs
  - Fly.io: https://fly.io/docs

## 📝 License

This project is provided as-is for Luxe Vita Store.

---

**Last Updated**: June 2026
**Version**: 1.0.0
