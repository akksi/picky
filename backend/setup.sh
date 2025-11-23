#!/bin/bash

echo "🐱 Setting up Picky Backend..."

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "❌ PostgreSQL is not installed. Please install it first:"
    echo "   brew install postgresql"
    exit 1
fi

# Check if database exists
if ! psql -lqt | cut -d \| -f 1 | grep -qw picky_db; then
    echo "📦 Creating database..."
    createdb picky_db
    echo "✅ Database created"
else
    echo "✅ Database already exists"
fi

# Run migrations
echo "📊 Running migrations..."
psql picky_db < src/config/schema.sql

echo "✅ Backend setup complete!"
echo ""
echo "🚀 To start the server, run:"
echo "   npm run dev"

