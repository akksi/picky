import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { Food } from '../types';
import { saveFood } from '../utils/storage';

export default function AddFoodScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');

  const foodTypes = ['Wet', 'Dry', 'Treat', 'Raw', 'Other'];

  const handleSave = async () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Please enter a food name');
      return;
    }
    if (!brand.trim()) {
      Alert.alert('Error', 'Please enter a brand name');
      return;
    }
    if (!type) {
      Alert.alert('Error', 'Please select a food type');
      return;
    }

    const newFood: Food = {
      id: Date.now().toString(),
      name: name.trim(),
      brand: brand.trim(),
      type: type,
    };

    await saveFood(newFood);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Food Name *</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="e.g., Chicken Pate"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Brand *</Text>
        <TextInput
          style={styles.input}
          value={brand}
          onChangeText={setBrand}
          placeholder="e.g., Fancy Feast"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Type *</Text>
        <View style={styles.typeContainer}>
          {foodTypes.map((foodType) => (
            <TouchableOpacity
              key={foodType}
              style={[
                styles.typeButton,
                type === foodType && styles.typeButtonSelected,
              ]}
              onPress={() => setType(foodType)}
            >
              <Text
                style={[
                  styles.typeButtonText,
                  type === foodType && styles.typeButtonTextSelected,
                ]}
              >
                {foodType}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Food</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  typeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  typeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  typeButtonSelected: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  typeButtonText: {
    fontSize: 14,
    color: '#666',
  },
  typeButtonTextSelected: {
    color: 'white',
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 32,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

