# Contributing to Picky

Thank you for your interest in contributing to Picky! 🎉

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Code Style](#code-style)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## 🚀 Getting Started

### Prerequisites

- Node.js 14+
- PostgreSQL 12+
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/akksi/picky.git
   cd picky
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up the backend**
   ```bash
   npm run backend:setup
   ```

4. **Start development**
   ```bash
   # Terminal 1 - Backend
   npm run backend

   # Terminal 2 - Mobile
   npm run mobile
   ```

## 📁 Project Structure

```
picky/
├── mobile/           # React Native mobile app
│   ├── src/
│   │   ├── screens/  # UI screens
│   │   ├── types/    # TypeScript types
│   │   └── utils/    # Utility functions
│   └── App.tsx
├── backend/          # Node.js/Express API
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── config/
│   └── server.ts
└── docs/            # Documentation
```

## 💻 Development Workflow

### Working on Mobile App

```bash
cd mobile

# Start Expo
npx expo start

# Run on specific platform
npm run ios
npm run android
npm run web

# Clear cache
npx expo start --clear
```

### Working on Backend

```bash
cd backend

# Start with hot reload
npm run dev

# Run database migrations
npm run db:migrate

# Build TypeScript
npm run build
```

## 🎨 Code Style

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type when possible
- Use meaningful variable names

### React Native

- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use proper navigation patterns

### Backend

- Follow REST API conventions
- Use async/await for promises
- Implement proper error handling
- Add validation for all inputs

### Example

```typescript
// Good ✅
interface Cat {
  id: string;
  name: string;
  breed?: string;
}

const getCatById = async (id: string): Promise<Cat | null> => {
  try {
    const result = await pool.query('SELECT * FROM cats WHERE id = $1', [id]);
    return result.rows[0] || null;
  } catch (error) {
    console.error('Error fetching cat:', error);
    throw error;
  }
};

// Bad ❌
const getCatById = (id: any) => {
  return pool.query('SELECT * FROM cats WHERE id = $1', [id]).then(r => r.rows[0]);
};
```

## 📝 Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Examples

```bash
feat(mobile): add cat photo upload

- Add image picker integration
- Implement photo storage
- Update cat profile UI

Closes #123
```

```bash
fix(backend): resolve rating duplicate issue

Fixed a bug where multiple ratings could be created
for the same cat-food combination.
```

## 🔄 Pull Request Process

1. **Fork the repository** and create your branch from `main`
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes**
   - Write clean, documented code
   - Add tests if applicable
   - Update documentation as needed

3. **Test your changes**
   ```bash
   # Mobile
   cd mobile && npm test

   # Backend
   cd backend && npm test
   ```

4. **Commit your changes**
   ```bash
   git commit -m "feat(mobile): add amazing feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Use a clear title and description
   - Reference any related issues
   - Add screenshots for UI changes
   - Wait for review

### PR Checklist

- [ ] Code follows the style guidelines
- [ ] Documentation updated
- [ ] No linter errors
- [ ] All tests pass
- [ ] Commits follow convention
- [ ] PR description is clear

## 🐛 Reporting Bugs

Use GitHub Issues to report bugs. Include:

- **Description** - Clear description of the bug
- **Steps to Reproduce** - How to reproduce the issue
- **Expected Behavior** - What should happen
- **Actual Behavior** - What actually happens
- **Screenshots** - If applicable
- **Environment** - OS, Node version, etc.

## 💡 Suggesting Features

Feature requests are welcome! Please include:

- **Use Case** - Why this feature is needed
- **Proposed Solution** - How it should work
- **Alternatives** - Other solutions considered
- **Mockups** - If applicable

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You!

Every contribution helps make Picky better for cat lovers everywhere! 🐱💕

