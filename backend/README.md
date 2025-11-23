# Picky Backend API

REST API for the Picky Cat Food Tracker mobile application.

## 🚀 Quick Start

### Prerequisites

- Node.js (v14+)
- PostgreSQL (v12+)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your database credentials
```

3. Create the database:
```bash
createdb picky_db
```

4. Run migrations:
```bash
npm run db:migrate
```

5. Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## 📚 API Documentation

### Authentication

#### Register
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Profile
```http
GET /api/auth/profile
Authorization: Bearer <token>
```

### Cats

#### Get All Cats
```http
GET /api/cats
Authorization: Bearer <token>
```

#### Get Cat by ID
```http
GET /api/cats/:id
Authorization: Bearer <token>
```

#### Create Cat
```http
POST /api/cats
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Whiskers",
  "breed": "Persian",
  "age": 3,
  "imageUrl": "https://..."
}
```

#### Update Cat
```http
PUT /api/cats/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Whiskers Updated",
  "breed": "Persian",
  "age": 4
}
```

#### Delete Cat
```http
DELETE /api/cats/:id
Authorization: Bearer <token>
```

### Foods

#### Get All Foods
```http
GET /api/foods
Authorization: Bearer <token>
```

#### Get Food by ID
```http
GET /api/foods/:id
Authorization: Bearer <token>
```

#### Create Food
```http
POST /api/foods
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Chicken Pate",
  "brand": "Fancy Feast",
  "type": "Wet"
}
```

#### Update Food
```http
PUT /api/foods/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Chicken Pate Deluxe",
  "brand": "Fancy Feast",
  "type": "Wet"
}
```

#### Delete Food
```http
DELETE /api/foods/:id
Authorization: Bearer <token>
```

### Ratings

#### Get All Ratings
```http
GET /api/ratings
Authorization: Bearer <token>
```

#### Get Ratings by Cat
```http
GET /api/ratings/cat/:catId
Authorization: Bearer <token>
```

#### Get Food Statistics
```http
GET /api/ratings/stats
Authorization: Bearer <token>
```

#### Create or Update Rating
```http
POST /api/ratings
Authorization: Bearer <token>
Content-Type: application/json

{
  "catId": 1,
  "foodId": 1,
  "liked": true,
  "notes": "Really enjoyed this!"
}
```

#### Delete Rating
```http
DELETE /api/ratings/:id
Authorization: Bearer <token>
```

## 🗄️ Database Schema

### Users
- id (serial, primary key)
- username (varchar, unique)
- email (varchar, unique)
- password_hash (varchar)
- created_at (timestamp)
- updated_at (timestamp)

### Cats
- id (serial, primary key)
- user_id (integer, foreign key)
- name (varchar)
- breed (varchar, optional)
- age (integer, optional)
- image_url (text, optional)
- created_at (timestamp)
- updated_at (timestamp)

### Foods
- id (serial, primary key)
- user_id (integer, foreign key)
- name (varchar)
- brand (varchar)
- type (varchar)
- created_at (timestamp)
- updated_at (timestamp)

### Ratings
- id (serial, primary key)
- user_id (integer, foreign key)
- cat_id (integer, foreign key)
- food_id (integer, foreign key)
- liked (boolean)
- notes (text, optional)
- created_at (timestamp)
- updated_at (timestamp)
- UNIQUE constraint on (cat_id, food_id)

## 🔧 Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run db:migrate` - Run database migrations

## 🔐 Environment Variables

```env
PORT=3000
NODE_ENV=development
DATABASE_URL=postgresql://username:password@localhost:5432/picky_db
JWT_SECRET=your-secret-key
FRONTEND_URL=http://localhost:19006
```

## 📦 Tech Stack

- **Node.js** - Runtime
- **Express** - Web framework
- **PostgreSQL** - Database
- **TypeScript** - Type safety
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## 🚢 Deployment

### Production Build

```bash
npm run build
npm start
```

### Environment Setup for Production

1. Set `NODE_ENV=production`
2. Use a strong `JWT_SECRET`
3. Configure PostgreSQL with SSL
4. Set up proper CORS origins

## 📝 License

MIT

