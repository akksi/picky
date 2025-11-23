import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { FoodStats } from '../types';
import { getFoods, getRatings } from '../utils/storage';

export default function CatalogueScreen() {
  const [foodStats, setFoodStats] = useState<FoodStats[]>([]);

  const loadStats = async () => {
    const foods = await getFoods();
    const ratings = await getRatings();

    const stats: FoodStats[] = foods.map((food) => {
      const foodRatings = ratings.filter((r) => r.foodId === food.id);
      const likes = foodRatings.filter((r) => r.liked).length;
      const dislikes = foodRatings.filter((r) => !r.liked).length;

      return {
        food,
        likes,
        dislikes,
        total: foodRatings.length,
      };
    });

    // Sort by total ratings, then by likes
    stats.sort((a, b) => {
      if (b.total !== a.total) {
        return b.total - a.total;
      }
      return b.likes - a.likes;
    });

    setFoodStats(stats);
  };

  useFocusEffect(
    useCallback(() => {
      loadStats();
    }, [])
  );

  const renderStatItem = ({ item }: { item: FoodStats }) => {
    const likePercentage = item.total > 0
      ? Math.round((item.likes / item.total) * 100)
      : 0;

    return (
      <View style={styles.statCard}>
        <View style={styles.foodHeader}>
          <Text style={styles.foodName}>{item.food.name}</Text>
          <Text style={styles.foodBrand}>{item.food.brand}</Text>
          <Text style={styles.foodType}>{item.food.type}</Text>
        </View>

        {item.total > 0 ? (
          <>
            <View style={styles.statsContainer}>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>{item.likes}</Text>
                <Text style={styles.statLabel}>👍 Likes</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>{item.dislikes}</Text>
                <Text style={styles.statLabel}>👎 Dislikes</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>{item.total}</Text>
                <Text style={styles.statLabel}>Total Cats</Text>
              </View>
            </View>

            <View style={styles.progressBarContainer}>
              <View
                style={[
                  styles.progressBar,
                  {
                    width: `${likePercentage}%`,
                    backgroundColor: likePercentage >= 50 ? '#34c759' : '#ff9500',
                  },
                ]}
              />
            </View>
            <Text style={styles.percentageText}>{likePercentage}% liked</Text>
          </>
        ) : (
          <Text style={styles.noRatingsText}>No ratings yet</Text>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={foodStats}
        renderItem={renderStatItem}
        keyExtractor={(item) => item.food.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No foods in catalogue yet. Add some foods and rate them!
          </Text>
        }
      />
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
  statCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  foodHeader: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 12,
  },
  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  foodBrand: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  foodType: {
    fontSize: 12,
    color: '#999',
    textTransform: 'uppercase',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
  percentageText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    fontWeight: '600',
  },
  noRatingsText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    fontStyle: 'italic',
    paddingVertical: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#999',
    paddingHorizontal: 40,
  },
});

