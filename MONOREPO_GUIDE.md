# Monorepo Organization Guide

## 📁 New Structure

Your Picky project is now organized as a clean, professional monorepo:

```
picky/
├── 📱 mobile/                    # React Native mobile app
│   ├── src/
│   │   ├── screens/             # All app screens
│   │   ├── types/               # TypeScript types
│   │   └── utils/               # Storage & utilities
│   ├── assets/                  # Images & icons
│   ├── App.tsx                  # Main app component
│   ├── package.json             # Mobile dependencies
│   ├── README.md                # Mobile documentation
│   ├── QUICK_START.md           # Quick start guide
│   └── PROJECT_SUMMARY.md       # Detailed summary
│
├── 🔧 backend/                   # Node.js/Express API
│   ├── src/
│   │   ├── controllers/         # Request handlers
│   │   ├── routes/              # API routes
│   │   ├── middleware/          # Auth & validation
│   │   ├── config/              # Database config
│   │   └── utils/               # Helper functions
│   ├── package.json             # Backend dependencies
│   ├── README.md                # API documentation
│   └── setup.sh                 # Setup script
│
├── 📚 Root Files
│   ├── README.md                # Monorepo overview
│   ├── CONTRIBUTING.md          # Contribution guidelines
│   ├── BACKEND_SETUP.md         # Backend setup guide
│   ├── MONOREPO_GUIDE.md        # This file
│   ├── package.json             # Workspace configuration
│   └── .gitignore               # Ignore patterns
│
└── 🗂️ Git
    └── .git/                    # Single Git repository
```

## ✅ Benefits of This Structure

### Clear Separation
- ✅ Mobile and backend are in separate directories
- ✅ Each has its own `package.json` and dependencies
- ✅ No confusion about which files belong where

### Easy Navigation
- ✅ Developers know exactly where to find code
- ✅ Mobile team works in `/mobile`
- ✅ Backend team works in `/backend`

### Workspace Management
- ✅ Root `package.json` defines workspaces
- ✅ Convenient scripts at root level
- ✅ Can install all dependencies at once

### Single Git History
- ✅ One repository for the entire project
- ✅ Atomic commits across frontend and backend
- ✅ Easier to keep API and client in sync

## 🚀 Working with the Monorepo

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/akksi/picky.git
cd picky

# Install all dependencies
npm run install:all
```

### Running the Mobile App

```bash
# From root
npm run mobile

# Or navigate to mobile
cd mobile
npx expo start
```

### Running the Backend

```bash
# From root
npm run backend

# Or navigate to backend
cd backend
npm run dev
```

### Running Both Together

```bash
# Terminal 1
npm run backend

# Terminal 2
npm run mobile
```

## 📦 Root Package.json Scripts

These convenient scripts work from the repository root:

```json
{
  "mobile": "cd mobile && npm start",
  "mobile:ios": "cd mobile && npm run ios",
  "mobile:android": "cd mobile && npm run android",
  "mobile:web": "cd mobile && npm run web",
  "backend": "cd backend && npm run dev",
  "backend:setup": "cd backend && ./setup.sh",
  "install:all": "Install dependencies for mobile and backend",
  "clean": "Remove all node_modules"
}
```

## 🔄 Git Workflow

### Making Changes

```bash
# Make changes in either mobile/ or backend/
git add .
git commit -m "feat(mobile): add new feature"
git push
```

### Commit Convention

Use prefixes to indicate which part changed:

- `feat(mobile): ...` - Mobile app feature
- `feat(backend): ...` - Backend feature
- `fix(mobile): ...` - Mobile bug fix
- `fix(backend): ...` - Backend bug fix
- `refactor: ...` - Affects both
- `docs: ...` - Documentation only
- `chore: ...` - Build/tooling changes

## 📝 When to Work in Each Directory

### Work in `/mobile` when:
- Creating new screens
- Updating UI components
- Modifying navigation
- Changing mobile app logic
- Updating Expo configuration

### Work in `/backend` when:
- Creating API endpoints
- Modifying database schema
- Updating authentication
- Adding business logic
- Configuring server settings

### Work in root when:
- Updating monorepo configuration
- Adding documentation
- Managing Git
- Setting up CI/CD

## 🛠️ IDE Setup

### VS Code

Create `.vscode/settings.json`:

```json
{
  "typescript.tsdk": "mobile/node_modules/typescript/lib",
  "search.exclude": {
    "**/node_modules": true,
    "mobile/node_modules": true,
    "backend/node_modules": true
  }
}
```

Open workspace folders:
1. File → Add Folder to Workspace → Select `mobile`
2. File → Add Folder to Workspace → Select `backend`

### WebStorm/IntelliJ

Mark `mobile` and `backend` as separate modules for better TypeScript support.

## 🔍 Finding Things

### Mobile App Code
```bash
# Screens
mobile/src/screens/

# Types
mobile/src/types/

# Storage utilities
mobile/src/utils/
```

### Backend Code
```bash
# API routes
backend/src/routes/

# Controllers
backend/src/controllers/

# Database
backend/src/config/
```

### Documentation
```bash
# Monorepo overview
./README.md

# Mobile docs
mobile/README.md
mobile/QUICK_START.md

# Backend docs
backend/README.md
BACKEND_SETUP.md

# Contributing
CONTRIBUTING.md
```

## 📊 Project Stats

Current structure:
- **2 main directories** (`mobile/`, `backend/`)
- **~25 TypeScript/TSX files**
- **3,000+ lines of code**
- **Single Git repository**
- **3 commits** in history

## 🎯 Best Practices

### DO ✅
- Keep mobile and backend code separated
- Use the root scripts for convenience
- Document changes in the right README
- Test both mobile and backend after changes
- Keep dependencies up to date in both

### DON'T ❌
- Mix mobile and backend code
- Install backend packages in mobile (or vice versa)
- Commit node_modules
- Forget to test both parts
- Skip documentation updates

## 🔮 Future Improvements

Possible enhancements:
- [ ] Add shared TypeScript types package
- [ ] Set up Turbo repo for faster builds
- [ ] Add GitHub Actions CI/CD
- [ ] Create Docker compose for easy setup
- [ ] Add Lerna for dependency management
- [ ] Create shared utilities package

## 📖 More Resources

- [Monorepo Overview](README.md)
- [Mobile Documentation](mobile/README.md)
- [Backend Documentation](backend/README.md)
- [Contributing Guide](CONTRIBUTING.md)
- [Backend Setup](BACKEND_SETUP.md)

---

**Your monorepo is now clean, organized, and ready for development!** 🎉

