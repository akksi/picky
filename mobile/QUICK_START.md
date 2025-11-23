# Quick Start Guide - Cat Food Tracker

## 🚀 Get Started in 3 Steps

### 1. Navigate to the project
```bash
cd /tmp/CatFoodTracker
```

### 2. Start the development server
```bash
npx expo start
```

### 3. Run the app

Choose one of the following options:

**Option A: Mobile Device (Recommended)**
- Install "Expo Go" app from App Store (iOS) or Google Play (Android)
- Scan the QR code displayed in your terminal
- The app will open in Expo Go

**Option B: iOS Simulator**
```bash
npm run ios
```

**Option C: Android Emulator**
```bash
npm run android
```

**Option D: Web Browser**
```bash
npm run web
```

## 📱 How to Use the App

### Step 1: Add Your Cats
1. Open the **Cats** tab (🐱)
2. Tap the **"+ Add Cat"** button
3. Enter your cat's name (required)
4. Optionally add breed and age
5. Tap **"Save Cat"**

### Step 2: Add Cat Foods
1. Go to the **Foods** tab (🍽️)
2. Tap the **"+ Add Food"** button
3. Enter food name and brand (required)
4. Select the food type (Wet, Dry, Treat, etc.)
5. Tap **"Save Food"**

### Step 3: Rate Foods for Your Cats
1. Go back to the **Cats** tab
2. Tap on any cat card
3. You'll see all available foods
4. Tap **👍** if your cat liked it
5. Tap **👎** if your cat didn't like it
6. Ratings are saved automatically!

### Step 4: View the Catalogue
1. Go to the **Catalogue** tab (📊)
2. See all foods ranked by popularity
3. View statistics:
   - Number of likes vs dislikes
   - Total cats that tried each food
   - Percentage of cats that liked it
   - Visual progress bar

## 🎨 Features

✅ **Persistent Storage** - All data saved locally on your device
✅ **Simple Interface** - Easy to use with intuitive navigation
✅ **Visual Statistics** - Beautiful charts and numbers
✅ **Quick Rating** - One tap to rate foods
✅ **Delete Support** - Remove cats or foods when needed
✅ **Cross-Platform** - Works on iOS, Android, and Web

## 📦 Project Structure

```
CatFoodTracker/
├── App.tsx                    # Main navigation setup
├── src/
│   ├── screens/
│   │   ├── CatsScreen.tsx     # List all cats
│   │   ├── AddCatScreen.tsx   # Add new cat form
│   │   ├── FoodsScreen.tsx    # List all foods
│   │   ├── AddFoodScreen.tsx  # Add new food form
│   │   ├── RatingsScreen.tsx  # Rate foods for a cat
│   │   └── CatalogueScreen.tsx # View food statistics
│   ├── types/
│   │   └── index.ts           # TypeScript types
│   └── utils/
│       └── storage.ts         # AsyncStorage functions
```

## 🛠️ Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform
- **TypeScript** - Type safety
- **React Navigation** - Navigation library
- **AsyncStorage** - Local data storage

## 💡 Tips

- Rate foods consistently across all your cats for better statistics
- The catalogue sorts foods by most rated first
- You can delete a cat or food by tapping the × button
- Ratings can be changed at any time - just tap the opposite thumb!

## 🐛 Troubleshooting

**App won't start?**
- Make sure all dependencies are installed: `npm install`
- Clear cache: `npx expo start --clear`

**Data not saving?**
- Check that you have storage permissions
- Try restarting the app

**QR code not scanning?**
- Make sure Expo Go is installed
- Check that your phone and computer are on the same network

---

Enjoy tracking your cats' food preferences! 🐱💕

