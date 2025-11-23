import AsyncStorage from '@react-native-async-storage/async-storage';
import { Cat, Food, Rating } from '../types';

const CATS_KEY = '@cats';
const FOODS_KEY = '@foods';
const RATINGS_KEY = '@ratings';

// Cats
export const getCats = async (): Promise<Cat[]> => {
  try {
    const data = await AsyncStorage.getItem(CATS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting cats:', error);
    return [];
  }
};

export const saveCat = async (cat: Cat): Promise<void> => {
  try {
    const cats = await getCats();
    const updatedCats = [...cats, cat];
    await AsyncStorage.setItem(CATS_KEY, JSON.stringify(updatedCats));
  } catch (error) {
    console.error('Error saving cat:', error);
  }
};

export const deleteCat = async (catId: string): Promise<void> => {
  try {
    const cats = await getCats();
    const updatedCats = cats.filter(c => c.id !== catId);
    await AsyncStorage.setItem(CATS_KEY, JSON.stringify(updatedCats));
  } catch (error) {
    console.error('Error deleting cat:', error);
  }
};

// Foods
export const getFoods = async (): Promise<Food[]> => {
  try {
    const data = await AsyncStorage.getItem(FOODS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting foods:', error);
    return [];
  }
};

export const saveFood = async (food: Food): Promise<void> => {
  try {
    const foods = await getFoods();
    const updatedFoods = [...foods, food];
    await AsyncStorage.setItem(FOODS_KEY, JSON.stringify(updatedFoods));
  } catch (error) {
    console.error('Error saving food:', error);
  }
};

export const deleteFood = async (foodId: string): Promise<void> => {
  try {
    const foods = await getFoods();
    const updatedFoods = foods.filter(f => f.id !== foodId);
    await AsyncStorage.setItem(FOODS_KEY, JSON.stringify(updatedFoods));
  } catch (error) {
    console.error('Error deleting food:', error);
  }
};

// Ratings
export const getRatings = async (): Promise<Rating[]> => {
  try {
    const data = await AsyncStorage.getItem(RATINGS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting ratings:', error);
    return [];
  }
};

export const saveRating = async (rating: Rating): Promise<void> => {
  try {
    const ratings = await getRatings();
    // Remove existing rating for same cat-food combo if exists
    const filteredRatings = ratings.filter(
      r => !(r.catId === rating.catId && r.foodId === rating.foodId)
    );
    const updatedRatings = [...filteredRatings, rating];
    await AsyncStorage.setItem(RATINGS_KEY, JSON.stringify(updatedRatings));
  } catch (error) {
    console.error('Error saving rating:', error);
  }
};

export const getRatingForCatFood = async (catId: string, foodId: string): Promise<Rating | undefined> => {
  try {
    const ratings = await getRatings();
    return ratings.find(r => r.catId === catId && r.foodId === foodId);
  } catch (error) {
    console.error('Error getting rating:', error);
    return undefined;
  }
};

