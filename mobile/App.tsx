import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CatsScreen from './src/screens/CatsScreen';
import AddCatScreen from './src/screens/AddCatScreen';
import FoodsScreen from './src/screens/FoodsScreen';
import AddFoodScreen from './src/screens/AddFoodScreen';
import RatingsScreen from './src/screens/RatingsScreen';
import CatalogueScreen from './src/screens/CatalogueScreen';

const Tab = createBottomTabNavigator();
const CatsStack = createNativeStackNavigator();
const FoodsStack = createNativeStackNavigator();

function CatsNavigator() {
  return (
    <CatsStack.Navigator>
      <CatsStack.Screen
        name="CatsList"
        component={CatsScreen}
        options={{ title: 'My Cats' }}
      />
      <CatsStack.Screen
        name="AddCat"
        component={AddCatScreen}
        options={{ title: 'Add Cat' }}
      />
      <CatsStack.Screen
        name="Ratings"
        component={RatingsScreen}
        options={{ title: 'Rate Foods' }}
      />
    </CatsStack.Navigator>
  );
}

function FoodsNavigator() {
  return (
    <FoodsStack.Navigator>
      <FoodsStack.Screen
        name="FoodsList"
        component={FoodsScreen}
        options={{ title: 'Cat Foods' }}
      />
      <FoodsStack.Screen
        name="AddFood"
        component={AddFoodScreen}
        options={{ title: 'Add Food' }}
      />
    </FoodsStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: {
            paddingBottom: 5,
            paddingTop: 5,
            height: 60,
          },
        }}
      >
        <Tab.Screen
          name="Cats"
          component={CatsNavigator}
          options={{
            headerShown: false,
            tabBarLabel: 'Cats',
            tabBarIcon: ({ color }) => <TabIcon icon="🐱" color={color} />,
          }}
        />
        <Tab.Screen
          name="Foods"
          component={FoodsNavigator}
          options={{
            headerShown: false,
            tabBarLabel: 'Foods',
            tabBarIcon: ({ color }) => <TabIcon icon="🍽️" color={color} />,
          }}
        />
        <Tab.Screen
          name="Catalogue"
          component={CatalogueScreen}
          options={{
            title: 'Food Catalogue',
            tabBarLabel: 'Catalogue',
            tabBarIcon: ({ color }) => <TabIcon icon="📊" color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function TabIcon({ icon }: { icon: string; color: string }) {
  return <Text style={{ fontSize: 24 }}>{icon}</Text>;
}
