# Backend Setup Guide

## 🎯 Overview

Your Cat Food Tracker app now has a full-featured backend API with:
- ✅ User authentication (JWT)
- ✅ RESTful API endpoints
- ✅ PostgreSQL database
- ✅ CRUD operations for cats, foods, and ratings
- ✅ Food statistics and analytics
- ✅ TypeScript for type safety

## 📁 Backend Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── database.ts        # PostgreSQL connection
│   │   └── schema.sql         # Database schema
│   ├── controllers/           # Request handlers
│   │   ├── authController.ts
│   │   ├── catsController.ts
│   │   ├── foodsController.ts
│   │   └── ratingsController.ts
│   ├── routes/                # API routes
│   │   ├── auth.ts
│   │   ├── cats.ts
│   │   ├── foods.ts
│   │   └── ratings.ts
│   ├── middleware/
│   │   └── auth.ts            # JWT authentication
│   ├── utils/
│   │   └── setupDatabase.ts   # Database setup utility
│   └── server.ts              # Main server file
├── .env                       # Environment variables
├── .env.example               # Environment template
├── tsconfig.json              # TypeScript config
├── package.json               # Dependencies
├── setup.sh                   # Quick setup script
└── README.md                  # API documentation
```

## 🚀 Quick Start

### Step 1: Install PostgreSQL

If you don't have PostgreSQL installed:

```bash
# macOS
brew install postgresql
brew services start postgresql

# Ubuntu/Debian
sudo apt-get install postgresql postgresql-contrib
sudo systemctl start postgresql

# Windows
# Download from https://www.postgresql.org/download/windows/
```

### Step 2: Run Setup Script

```bash
cd ~/Dev/Projects/Personal/picky/backend
./setup.sh
```

This will:
- Create the `picky_db` database
- Run all migrations
- Set up tables

### Step 3: Start the Backend

```bash
npm run dev
```

The API will be running at: **http://localhost:3000**

### Step 4: Test the API

```bash
# Health check
curl http://localhost:3000/health

# Register a user
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@example.com","password":"password123"}'
```

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login
- `GET /api/auth/profile` - Get user profile (requires auth)

### Cats
- `GET /api/cats` - Get all cats
- `GET /api/cats/:id` - Get cat by ID
- `POST /api/cats` - Create cat
- `PUT /api/cats/:id` - Update cat
- `DELETE /api/cats/:id` - Delete cat

### Foods
- `GET /api/foods` - Get all foods
- `GET /api/foods/:id` - Get food by ID
- `POST /api/foods` - Create food
- `PUT /api/foods/:id` - Update food
- `DELETE /api/foods/:id` - Delete food

### Ratings
- `GET /api/ratings` - Get all ratings
- `GET /api/ratings/cat/:catId` - Get ratings for a cat
- `GET /api/ratings/stats` - Get food statistics
- `POST /api/ratings` - Create or update rating
- `DELETE /api/ratings/:id` - Delete rating

## 🛠️ Database Schema

### Users
```sql
id, username, email, password_hash, created_at, updated_at
```

### Cats
```sql
id, user_id, name, breed, age, image_url, created_at, updated_at
```

### Foods
```sql
id, user_id, name, brand, type, created_at, updated_at
```

### Ratings
```sql
id, user_id, cat_id, food_id, liked, notes, created_at, updated_at
UNIQUE(cat_id, food_id) -- One rating per cat-food combo
```

## 📱 Next Steps: Connect Mobile App

To connect your mobile app to the backend, you'll need to:

1. **Install axios** in the mobile app:
   ```bash
   cd ~/Dev/Projects/Personal/picky
   npm install axios @react-native-async-storage/async-storage
   ```

2. **Create an API client** (see `src/utils/api.ts` in mobile app)

3. **Update storage.ts** to use API calls instead of AsyncStorage

4. **Add authentication flow** (login/register screens)

Would you like me to update the mobile app to use the backend API?

## 🔧 Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build TypeScript
npm run build

# Start production server
npm start

# Run database migrations
npm run db:migrate

# Setup database
npm run db:setup
```

## 🌍 Environment Variables

Edit `.env` file:

```env
PORT=3000
NODE_ENV=development
DATABASE_URL=postgresql://localhost:5432/picky_db
JWT_SECRET=your-secret-key-here
FRONTEND_URL=http://localhost:19006
```

## 📊 Testing with Postman/Insomnia

1. Import the API endpoints
2. Register a user
3. Copy the JWT token from the response
4. Add to headers: `Authorization: Bearer <your-token>`
5. Make authenticated requests

## 🚢 Deployment Options

- **Heroku** - Easy PostgreSQL add-on
- **Railway** - Modern deployment platform
- **DigitalOcean** - VPS with more control
- **AWS** - EC2 + RDS
- **Vercel/Netlify** - Serverless functions

## 🐛 Troubleshooting

### Database connection error
```bash
# Make sure PostgreSQL is running
brew services list
brew services start postgresql
```

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill
```

### TypeScript errors
```bash
# Rebuild
npm run build
```

---

**Your backend is ready! 🎉**

The next step is to update the mobile app to use these API endpoints instead of local storage.

