import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Cat, Food, Rating } from '../types';
import { getFoods, getRatings, saveRating } from '../utils/storage';

export default function RatingsScreen({ route, navigation }: any) {
  const cat: Cat = route.params.cat;
  const [foods, setFoods] = useState<Food[]>([]);
  const [ratings, setRatings] = useState<Rating[]>([]);

  const loadData = async () => {
    const loadedFoods = await getFoods();
    const loadedRatings = await getRatings();
    setFoods(loadedFoods);
    setRatings(loadedRatings);
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  const getRatingForFood = (foodId: string): Rating | undefined => {
    return ratings.find((r) => r.catId === cat.id && r.foodId === foodId);
  };

  const handleRate = async (food: Food, liked: boolean) => {
    const rating: Rating = {
      id: `${cat.id}-${food.id}`,
      catId: cat.id,
      foodId: food.id,
      liked,
      date: new Date().toISOString(),
    };

    await saveRating(rating);
    loadData();
  };

  const renderFoodItem = ({ item }: { item: Food }) => {
    const rating = getRatingForFood(item.id);

    return (
      <View style={styles.foodCard}>
        <View style={styles.foodInfo}>
          <Text style={styles.foodName}>{item.name}</Text>
          <Text style={styles.foodDetail}>{item.brand} • {item.type}</Text>
        </View>
        <View style={styles.ratingButtons}>
          <TouchableOpacity
            style={[
              styles.likeButton,
              rating?.liked === false && styles.dislikeButtonActive,
            ]}
            onPress={() => handleRate(item, false)}
          >
            <Text
              style={[
                styles.buttonText,
                rating?.liked === false && styles.buttonTextActive,
              ]}
            >
              👎
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.likeButton,
              rating?.liked === true && styles.likeButtonActive,
            ]}
            onPress={() => handleRate(item, true)}
          >
            <Text
              style={[
                styles.buttonText,
                rating?.liked === true && styles.buttonTextActive,
              ]}
            >
              👍
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: `Rate Foods for ${cat.name}`,
    });
  }, [navigation, cat.name]);

  return (
    <View style={styles.container}>
      {foods.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No foods added yet.</Text>
          <Text style={styles.emptySubtext}>Add some foods first!</Text>
        </View>
      ) : (
        <FlatList
          data={foods}
          renderItem={renderFoodItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    padding: 16,
  },
  foodCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  foodInfo: {
    flex: 1,
    marginRight: 12,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  foodDetail: {
    fontSize: 14,
    color: '#666',
  },
  ratingButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  likeButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
  },
  likeButtonActive: {
    backgroundColor: '#34c759',
    borderColor: '#34c759',
  },
  dislikeButtonActive: {
    backgroundColor: '#ff3b30',
    borderColor: '#ff3b30',
  },
  buttonText: {
    fontSize: 24,
  },
  buttonTextActive: {
    fontSize: 26,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#999',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
});

