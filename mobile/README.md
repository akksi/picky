# Picky Mobile App

React Native mobile application for tracking cat food preferences.

## 🚀 Quick Start

### Installation

```bash
cd mobile
npm install
```

### Running the App

#### On iOS Simulator
```bash
npx expo start --ios
```

#### On Android Emulator
```bash
npx expo start --android
```

#### On Web Browser
```bash
npx expo start --web
```

#### Using Expo Go (Phone)
```bash
npx expo start
```
Then scan the QR code with your phone using the Expo Go app.

## 📱 Features

- **Manage Cats** - Add cats with name, breed, and age
- **Food Database** - Add cat foods with brand and type
- **Rating System** - Rate foods with simple 👍/👎 for each cat
- **Catalogue** - View statistics showing food popularity
- **Data Persistence** - All data saved locally with AsyncStorage

## 🎨 Screens

1. **Cats Screen** - List and manage your cats
2. **Add Cat Screen** - Form to add new cats
3. **Foods Screen** - List and manage cat foods
4. **Add Food Screen** - Form to add new foods
5. **Ratings Screen** - Rate foods for a specific cat
6. **Catalogue Screen** - View food statistics and analytics

## 📁 Project Structure

```
mobile/
├── src/
│   ├── screens/           # App screens
│   │   ├── CatsScreen.tsx
│   │   ├── AddCatScreen.tsx
│   │   ├── FoodsScreen.tsx
│   │   ├── AddFoodScreen.tsx
│   │   ├── RatingsScreen.tsx
│   │   └── CatalogueScreen.tsx
│   ├── types/             # TypeScript types
│   │   └── index.ts
│   └── utils/             # Utility functions
│       └── storage.ts     # AsyncStorage helpers
├── assets/                # Images and icons
├── App.tsx                # Main app with navigation
├── app.json              # Expo configuration
└── package.json          # Dependencies
```

## 🛠️ Technologies

- **React Native** - Mobile framework
- **Expo SDK 54** - Development platform
- **TypeScript** - Type safety
- **React Navigation** - Bottom tabs + stack navigation
- **AsyncStorage** - Local data persistence

## 📝 Data Models

### Cat
```typescript
{
  id: string
  name: string
  breed?: string
  age?: number
  imageUrl?: string
}
```

### Food
```typescript
{
  id: string
  name: string
  brand: string
  type: string  // 'Wet', 'Dry', 'Treat', 'Raw', 'Other'
}
```

### Rating
```typescript
{
  id: string
  catId: string
  foodId: string
  liked: boolean
  notes?: string
  date: string
}
```

## 🧪 Development

### Clear Cache
```bash
npx expo start --clear
```

### Check for Issues
```bash
npx expo-doctor
```

### Build for Production
```bash
# iOS
eas build --platform ios

# Android
eas build --platform android
```

## 🔧 Configuration

Edit `app.json` to customize:
- App name and slug
- Bundle identifier
- App icons and splash screen
- Supported orientations
- Platform-specific settings

## 📦 Adding Dependencies

```bash
# For Expo-compatible packages
npx expo install package-name

# For npm packages
npm install package-name
```

## 🐛 Troubleshooting

### App won't start
- Clear cache: `npx expo start --clear`
- Reinstall: `rm -rf node_modules && npm install`

### Metro bundler issues
- Clear Metro cache: `npx react-native start --reset-cache`
- Kill port 8081: `lsof -ti:8081 | xargs kill`

### iOS Simulator issues
- Reset simulator: `xcrun simctl erase all`
- Check Xcode installation: `xcode-select -p`

## 📚 Resources

- [Expo Documentation](https://docs.expo.dev)
- [React Native Docs](https://reactnative.dev)
- [React Navigation](https://reactnavigation.org)

## 🔄 Next Steps

- [ ] Connect to backend API (see `/backend`)
- [ ] Add authentication screens
- [ ] Implement cloud sync
- [ ] Add photo upload for cats
- [ ] Create onboarding flow

---

For more details, see [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) and [QUICK_START.md](QUICK_START.md)

