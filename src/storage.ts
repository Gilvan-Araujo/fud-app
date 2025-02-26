import AsyncStorage from '@react-native-async-storage/async-storage';

export type Recipe = {
  name: string;
  ingredients: Array<{ name: string; quantity: number; measurement: string }>;
};

const STORAGE_KEY = '@fud:recipes';

export const createRecipe = async (newRecipe: Recipe) => {
  const storage = await getRecipes();

  storage.push(newRecipe);

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
};

export const getRecipes = async (): Promise<Recipe[]> => {
  const storage = await AsyncStorage.getItem(STORAGE_KEY);

  const response = storage ? JSON.parse(storage) : [];

  return response;
};
