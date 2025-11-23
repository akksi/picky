# Cat Food Tracker

A mobile app that helps cat owners track their cats' food preferences.

## Features

- **Manage Cats**: Add and manage your cats with details like name, breed, and age
- **Food Database**: Add cat foods with brand, name, and type (wet, dry, treats, etc.)
- **Rating System**: Rate each food for each cat with a simple like/dislike system
- **Catalogue**: View statistics showing how many cats liked or disliked each food
- **Data Persistence**: All data is saved locally on your device

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo Go app on your mobile device (for testing)

### Installation

1. Navigate to the project directory:
```bash
cd CatFoodTracker
```

2. Install dependencies:
```bash
npm install
```

### Running the App

#### On iOS:
```bash
npm run ios
```

#### On Android:
```bash
npm run android
```

#### On Web:
```bash
npm run web
```

#### Using Expo Go:
```bash
npx expo start
```
Then scan the QR code with your phone using the Expo Go app.

## Usage

1. **Add Cats**: Go to the "Cats" tab and tap "+ Add Cat" to add your cats
2. **Add Foods**: Go to the "Foods" tab and tap "+ Add Food" to add cat foods
3. **Rate Foods**: From the Cats screen, tap on a cat to rate foods for that cat
4. **View Statistics**: Go to the "Catalogue" tab to see which foods are most liked

## Technologies Used

- React Native
- Expo
- TypeScript
- React Navigation
- AsyncStorage for local data persistence

## Project Structure

```
CatFoodTracker/
├── src/
│   ├── screens/         # App screens
│   │   ├── CatsScreen.tsx
│   │   ├── AddCatScreen.tsx
│   │   ├── FoodsScreen.tsx
│   │   ├── AddFoodScreen.tsx
│   │   ├── RatingsScreen.tsx
│   │   └── CatalogueScreen.tsx
│   ├── types/           # TypeScript type definitions
│   │   └── index.ts
│   └── utils/           # Utility functions
│       └── storage.ts   # AsyncStorage helpers
├── App.tsx              # Main app component with navigation
└── package.json
```

## License

MIT

