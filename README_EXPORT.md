# Luxe Vita Store - Full-Stack Export

This is a complete, production-ready full-stack e-commerce application for wholesale B2B business. It includes a React frontend, Express backend, MySQL database, and all necessary configuration files for deployment.

## 📦 What's Included

✅ **Frontend** - React 19 + Tailwind CSS 4 + TypeScript
✅ **Backend** - Express 4 + tRPC 11 API
✅ **Database** - MySQL schema with migrations
✅ **Authentication** - Session-based auth with JWT
✅ **Pages** - Homepage, Catalog, Wholesale Info, Contact
✅ **Features** - Search, filtering, inquiry list, form submission, maps
✅ **Styling** - Modern design with animations and responsive layout
✅ **Scripts** - Database seeding and utility scripts
✅ **Config** - TypeScript, Vite, Tailwind, Drizzle ORM setup

## 🚀 Quick Start

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Set Up Environment
```bash
cp .env.example .env
# Edit .env with your database credentials
```

### 3. Set Up Database
```bash
# Create MySQL database
mysql -u root -p -e "CREATE DATABASE luxe_vita_store;"

# Run migrations
pnpm drizzle-kit generate
pnpm drizzle-kit migrate

# Seed sample data
node scripts/seed-products.mjs
```

### 4. Start Development
```bash
pnpm dev
```

Visit `http://localhost:3000`

## 📚 Documentation

- **DEPLOYMENT_GUIDE.md** - Complete deployment instructions for Railway, Render, Fly.io, etc.
- **package.json** - All dependencies and scripts
- **drizzle/schema.ts** - Database schema definition
- **client/src/App.tsx** - Frontend routing and layout
- **server/routers.ts** - Backend API procedures

## 🏗️ Project Structure

```
.
├── client/                    # React Frontend
│   ├── src/
│   │   ├── pages/            # Page components (Home, Catalog, Wholesale, Contact)
│   │   ├── components/       # Reusable UI components (Navigation, Footer, etc)
│   │   ├── App.tsx           # Main app with routing
│   │   ├── index.css         # Global styles and theme
│   │   └── lib/              # Utilities and tRPC client
│   ├── index.html            # HTML entry point
│   └── public/               # Static assets
├── server/                    # Express Backend
│   ├── routers.ts            # tRPC procedures (API endpoints)
│   ├── db.ts                 # Database query helpers
│   ├── storage.ts            # File storage helpers
│   └── _core/                # Framework internals (don't edit)
├── drizzle/                   # Database
│   ├── schema.ts             # Table definitions
│   ├── migrations/           # SQL migration files
│   └── relations.ts          # Table relationships
├── scripts/                   # Utility Scripts
│   └── seed-products.mjs     # Sample data seeding
├── shared/                    # Shared types and constants
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Frontend build configuration
├── vitest.config.ts          # Test configuration
├── drizzle.config.ts         # Database configuration
├── .env.example              # Environment variables template
├── DEPLOYMENT_GUIDE.md       # Deployment instructions
└── README_EXPORT.md          # This file
```

## 🎯 Key Features

### Homepage
- Hero banner with compelling headline
- Featured product categories
- Brand story section
- Call-to-action buttons (Explore Catalog, Chat on WhatsApp)
- Trust indicators (Verified Seller, Fast Delivery, Quality Assured)

### Product Catalog
- Browse 10 sample products across 5 categories
- Search functionality
- Category filtering
- Product cards with MOQ, materials, lead times
- "Add to Inquiry List" functionality
- Inquiry list management with localStorage

### Wholesale Information
- Partnership benefits
- Step-by-step ordering process
- MOQ and payment terms
- FAQ section
- Direct WhatsApp contact

### Contact & Inquiry Portal
- Comprehensive inquiry form
- Pre-fill from inquiry list
- Google Maps showing store location
- Quick contact sidebar with WhatsApp, email, phone

### Global Elements
- Sticky navigation with links to all pages
- Social media links (Instagram, TikTok)
- WhatsApp integration (07082769477)
- Professional footer with contact info
- Fully responsive design

## 🛠️ Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, TypeScript, Tailwind CSS 4 |
| **Backend** | Express 4, tRPC 11, Node.js 22 |
| **Database** | MySQL 8+, Drizzle ORM |
| **Build** | Vite, esbuild |
| **Testing** | Vitest |
| **Package Manager** | pnpm |

## 📋 Available Scripts

```bash
# Development
pnpm dev              # Start dev server (frontend + backend)
pnpm check            # Check TypeScript types

# Production
pnpm build            # Build for production
pnpm start            # Run production build

# Database
pnpm drizzle-kit generate   # Generate migrations
pnpm drizzle-kit migrate    # Apply migrations
node scripts/seed-products.mjs  # Seed sample data

# Testing
pnpm test             # Run tests
pnpm test --watch     # Run tests in watch mode

# Code Quality
pnpm format           # Format code with Prettier
```

## 🗄️ Database Schema

### Users Table
- `id` - Primary key
- `openId` - OAuth identifier
- `name`, `email` - User info
- `role` - 'user' or 'admin'
- `createdAt`, `updatedAt`, `lastSignedIn` - Timestamps

### Categories Table
- `id` - Primary key
- `name`, `slug` - Category name and URL slug
- `description` - Category description
- `icon` - Icon emoji or reference
- `createdAt` - Timestamp

### Products Table
- `id` - Primary key
- `categoryId` - Foreign key to categories
- `name`, `slug` - Product name and URL slug
- `description`, `detailedDescription` - Product info
- `imageUrl`, `additionalImages` - Product images
- `material`, `sizes`, `colors` - Product attributes
- `moq` - Minimum order quantity
- `pricePerUnit` - Price
- `bulkDiscountTiers` - Discount structure (JSON)
- `packagingDetails`, `leadTime` - Logistics info
- `inStock` - Availability flag
- `createdAt`, `updatedAt` - Timestamps

### WholesaleInquiries Table
- `id` - Primary key
- `companyName`, `contactPerson` - Company info
- `email`, `phone` - Contact details
- `businessType` - Type of business
- `productsOfInterest` - Requested products
- `desiredQuantity` - Requested quantity
- `message` - Additional message
- `status` - 'new', 'contacted', 'negotiating', 'converted', 'rejected'
- `createdAt`, `updatedAt` - Timestamps

## 🔐 Security Notes

1. **Environment Variables**: Never commit `.env` file. Use platform secrets.
2. **JWT Secret**: Generate a strong secret: `openssl rand -base64 32`
3. **Database**: Use strong passwords and restrict access
4. **CORS**: Configure for your domain only
5. **HTTPS**: Always use HTTPS in production
6. **API Keys**: Keep all API keys in environment variables

## 📱 Responsive Design

The application is fully responsive and tested on:
- **Mobile**: 375×812 (iPhone)
- **Tablet**: 768×1024 (iPad)
- **Desktop**: 1280×720 and larger

## 🌐 Deployment

See **DEPLOYMENT_GUIDE.md** for detailed instructions on deploying to:
- Railway (recommended - easiest)
- Render
- Fly.io
- AWS
- DigitalOcean
- Heroku
- Any Node.js hosting platform

## 🎨 Customization

### Change Colors
Edit `client/src/index.css` CSS variables in `:root` and `.dark` sections

### Change Branding
- Update `VITE_APP_TITLE` in `.env`
- Replace logo in `client/public/`
- Edit company info in `client/src/components/Footer.tsx`

### Add Products
```bash
# Edit scripts/seed-products.mjs and run:
node scripts/seed-products.mjs
```

### Modify Pages
Edit components in `client/src/pages/`:
- `Home.tsx` - Homepage
- `Catalog.tsx` - Product catalog
- `Wholesale.tsx` - Wholesale info
- `Contact.tsx` - Contact form

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process on port 3000
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9
```

### Database Connection Failed
- Check MySQL is running
- Verify DATABASE_URL in .env
- Ensure database exists: `mysql -u root -p -e "SHOW DATABASES;"`

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules .next dist
pnpm install
pnpm build
```

### TypeScript Errors
```bash
pnpm check
```

## 📞 Support

For issues or questions:
1. Check DEPLOYMENT_GUIDE.md
2. Review error messages in console
3. Check database logs
4. Verify environment variables

## 📄 License

This project is provided as-is for Luxe Vita Store.

---

**Version**: 1.0.0  
**Last Updated**: June 2026  
**Status**: Production Ready ✅

**Next Steps:**
1. Follow DEPLOYMENT_GUIDE.md to deploy
2. Customize branding and content
3. Add your own products
4. Configure payment processing (if needed)
5. Set up monitoring and backups
