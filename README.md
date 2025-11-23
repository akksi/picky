# Picky - Cat Food Tracker 🐱

A full-stack mobile application that helps cat owners track their cats' food preferences with ratings and analytics.

## 📦 Monorepo Structure

This repository contains both the mobile app and backend API:

```
picky/
├── mobile/           # React Native mobile app (iOS, Android, Web)
├── backend/          # Node.js/Express REST API + PostgreSQL
├── docs/             # Documentation (coming soon)
└── README.md         # This file
```

## 🚀 Quick Start

### Mobile App

```bash
cd mobile
npm install
npx expo start
```

**Options:**
- Press `i` for iOS Simulator
- Press `a` for Android Emulator
- Press `w` for Web Browser
- Scan QR code with Expo Go app

**Full guide:** See [mobile/README.md](mobile/README.md)

### Backend API

```bash
cd backend
npm install
./setup.sh          # Set up PostgreSQL database
npm run dev         # Start API server on http://localhost:3000
```

**Full guide:** See [BACKEND_SETUP.md](BACKEND_SETUP.md)

## ✨ Features

### Mobile App
- 🐱 **Cat Management** - Add and manage multiple cats with details
- 🍽️ **Food Database** - Track different cat foods by brand and type
- 👍👎 **Rating System** - Simple like/dislike interface for each cat
- 📊 **Analytics** - View which foods are most popular across all cats
- 💾 **Data Persistence** - Local storage (ready for cloud sync)
- 🎨 **Modern UI** - Beautiful iOS-inspired design

### Backend API
- 🔐 **User Authentication** - JWT-based secure login/registration
- 📡 **RESTful API** - Clean endpoints for all operations
- 🗄️ **PostgreSQL Database** - Robust data storage
- 📈 **Statistics** - Aggregated food popularity data
- 🔒 **Authorization** - Users can only access their own data
- 📝 **TypeScript** - Full type safety

## 🛠️ Tech Stack

### Mobile (`/mobile`)
| Technology | Purpose |
|------------|---------|
| React Native | Cross-platform mobile framework |
| Expo | Development platform & build tool |
| TypeScript | Type safety |
| React Navigation | Navigation library |
| AsyncStorage | Local data persistence |

### Backend (`/backend`)
| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript runtime |
| Express | Web framework |
| PostgreSQL | Database |
| TypeScript | Type safety |
| JWT | Authentication |
| bcryptjs | Password hashing |

## 📱 Screenshots

*Coming soon - add screenshots of the mobile app in action!*

## 🗺️ Roadmap

- [ ] Connect mobile app to backend API
- [ ] Add login/register screens
- [ ] Cloud data synchronization
- [ ] Photo upload for cats
- [ ] Share food recommendations
- [ ] Dark mode support
- [ ] Push notifications
- [ ] Export data as CSV

## 📖 Documentation

- **[Mobile App README](mobile/README.md)** - Mobile app setup and usage
- **[Quick Start Guide](QUICK_START.md)** - Get the mobile app running fast
- **[Backend Setup](BACKEND_SETUP.md)** - API and database setup
- **[Backend API Docs](backend/README.md)** - API endpoints reference
- **[Project Summary](PROJECT_SUMMARY.md)** - Detailed project overview

## 🤝 Contributing

This is currently a personal project, but contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Workflow

### Working on Mobile App
```bash
cd mobile
npm run ios     # or android, or web
```

### Working on Backend
```bash
cd backend
npm run dev     # Hot reload enabled
```

### Running Both Together
```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Mobile
cd mobile && npx expo start
```

## 🐛 Troubleshooting

### Mobile App Issues
- Clear Expo cache: `cd mobile && npx expo start --clear`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Backend Issues
- Check PostgreSQL is running: `brew services list`
- Reset database: `cd backend && npm run db:migrate`

### Monorepo Issues
- Make sure you're in the right directory (`mobile/` or `backend/`)
- Each has its own `node_modules` and `package.json`

## 📄 License

MIT

## 🙏 Acknowledgments

Built with love for cat owners everywhere! 🐱💕

---

**Repository:** [github.com/akksi/picky](https://github.com/akksi/picky)
