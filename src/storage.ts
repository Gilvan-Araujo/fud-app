import { Alert } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export type Recipe = {
  name: string;
  ingredients: Array<{ name: string; quantity: number; measurement: string }>;
};

const RECIPES_KEY = 'fud:recipes';

export const createRecipe = async (value: Recipe) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(
      RECIPES_KEY,
      JSON.stringify([...((await getRecipes()) || []), jsonValue]),
    );
  } catch (e) {
    Alert.alert('Error', 'Failed to create recipe');
  }
};

export const getRecipes = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(RECIPES_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    Alert.alert('Error', 'Failed to get recipes');
  }
};

export const getAnyRecipeInStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(RECIPES_KEY);
    return jsonValue.length;
  } catch (e) {
    Alert.alert('Error', 'Failed to get recipes');
  }
};
