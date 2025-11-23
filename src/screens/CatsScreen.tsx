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
import { Cat } from '../types';
import { getCats, deleteCat } from '../utils/storage';

export default function CatsScreen({ navigation }: any) {
  const [cats, setCats] = useState<Cat[]>([]);

  const loadCats = async () => {
    const loadedCats = await getCats();
    setCats(loadedCats);
  };

  useFocusEffect(
    useCallback(() => {
      loadCats();
    }, [])
  );

  const handleDeleteCat = (catId: string, catName: string) => {
    Alert.alert(
      'Delete Cat',
      `Are you sure you want to delete ${catName}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            await deleteCat(catId);
            loadCats();
          },
        },
      ]
    );
  };

  const renderCatItem = ({ item }: { item: Cat }) => (
    <View style={styles.catCard}>
      <TouchableOpacity
        style={styles.catInfo}
        onPress={() => navigation.navigate('Ratings', { cat: item })}
      >
        <Text style={styles.catName}>{item.name}</Text>
        {item.breed && <Text style={styles.catDetail}>Breed: {item.breed}</Text>}
        {item.age !== undefined && <Text style={styles.catDetail}>Age: {item.age}</Text>}
        <Text style={styles.rateText}>Tap to rate foods</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteCat(item.id, item.name)}
      >
        <Text style={styles.deleteButtonText}>×</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cats}
        renderItem={renderCatItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No cats added yet. Add your first cat!</Text>
        }
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddCat')}
      >
        <Text style={styles.addButtonText}>+ Add Cat</Text>
      </TouchableOpacity>
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
    paddingBottom: 100,
  },
  catCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  catInfo: {
    flex: 1,
  },
  catName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  catDetail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  rateText: {
    fontSize: 12,
    color: '#007AFF',
    marginTop: 8,
    fontStyle: 'italic',
  },
  deleteButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ff3b30',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#999',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

