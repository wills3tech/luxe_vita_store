# Luxe Vita Store - Quick Start Guide

Get your Luxe Vita Store running in 5 minutes!

## 🚀 Prerequisites

- **Node.js 22+** - [Download](https://nodejs.org/)
- **MySQL 8+** - [Download](https://dev.mysql.com/downloads/mysql/)
- **pnpm** - Install with: `npm install -g pnpm`

## ⚡ 5-Minute Setup

### Step 1: Install Dependencies (1 min)
```bash
pnpm install
```

### Step 2: Create Database (1 min)
```bash
# Open MySQL
mysql -u root -p

# Create database
CREATE DATABASE luxe_vita_store;
EXIT;
```

### Step 3: Configure Environment (1 min)
```bash
cp .env.example .env

# Edit .env and update DATABASE_URL:
# DATABASE_URL="mysql://root:yourpassword@localhost:3306/luxe_vita_store"
```

### Step 4: Setup Database (1 min)
```bash
pnpm drizzle-kit generate
pnpm drizzle-kit migrate
node scripts/seed-products.mjs
```

### Step 5: Start Development (1 min)
```bash
pnpm dev
```

**Done!** 🎉 Open http://localhost:3000

---

## 📁 What You Get

| Feature | Status |
|---------|--------|
| Homepage with hero banner | ✅ Ready |
| Product catalog (10 products) | ✅ Ready |
| Search & filtering | ✅ Ready |
| Wholesale information page | ✅ Ready |
| Contact form with inquiry list | ✅ Ready |
| Google Maps integration | ✅ Ready |
| WhatsApp integration | ✅ Ready |
| Responsive design | ✅ Ready |
| Admin authentication | ✅ Ready |

## 🌐 Deploy to Production

### Option A: Railway (Easiest)
1. Push code to GitHub
2. Connect GitHub to Railway
3. Add MySQL database
4. Set environment variables
5. Deploy!

[Railway Docs](https://railway.app/docs)

### Option B: Render
1. Connect GitHub repository
2. Create Web Service
3. Add MySQL database
4. Configure environment
5. Deploy!

[Render Docs](https://render.com/docs)

### Option C: Fly.io
```bash
flyctl launch
flyctl secrets set DATABASE_URL=...
flyctl deploy
```

[Fly.io Docs](https://fly.io/docs)

**See DEPLOYMENT_GUIDE.md for detailed instructions**

---

## 🛠️ Common Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm check            # Check TypeScript

# Production
pnpm build            # Build for production
pnpm start            # Run production build

# Database
pnpm drizzle-kit generate   # Generate migrations
pnpm drizzle-kit migrate    # Apply migrations

# Testing
pnpm test             # Run tests
pnpm format           # Format code
```

## 📝 Environment Variables

**Minimum required:**
```env
DATABASE_URL="mysql://user:password@localhost:3306/luxe_vita_store"
JWT_SECRET="generate-with-openssl-rand-base64-32"
```

**Optional (for advanced features):**
- OAuth integration
- Analytics
- API keys

See `.env.example` for all options.

## 🎨 Customize

### Change Site Title
Edit `client/index.html`:
```html
<title>Your Store Name</title>
```

### Change Colors
Edit `client/src/index.css` CSS variables

### Add Products
Edit `scripts/seed-products.mjs` and run:
```bash
node scripts/seed-products.mjs
```

### Update Contact Info
Edit `client/src/components/Footer.tsx`

## 🐛 Troubleshooting

### "Port 3000 already in use"
```bash
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9
```

### "Database connection failed"
- Ensure MySQL is running
- Check DATABASE_URL in .env
- Verify database exists

### "npm/pnpm not found"
- Install Node.js from https://nodejs.org/
- Install pnpm: `npm install -g pnpm`

### "TypeScript errors"
```bash
pnpm check
```

## 📚 Documentation

- **DEPLOYMENT_GUIDE.md** - Production deployment
- **README_EXPORT.md** - Full documentation
- **QUICK_START.md** - This file

## 🎯 Next Steps

1. ✅ Get it running locally
2. ✅ Customize branding
3. ✅ Add your products
4. ✅ Deploy to production
5. ✅ Set up custom domain

## 📞 Need Help?

1. Check the documentation files
2. Review error messages
3. Check database logs
4. Verify environment variables

---

**Ready to launch?** 🚀

```bash
pnpm install
cp .env.example .env
# Edit .env with your database
pnpm drizzle-kit migrate
node scripts/seed-products.mjs
pnpm dev
```

Visit http://localhost:3000 and start building!
