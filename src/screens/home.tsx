import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Button, Text, useTheme } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

import Logo from '../assets/logo.svg';
import { Recipe, getRecipes } from '../storage';

export const Home = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const getRecipesFromAsyncStorage = async () => {
    const data = await getRecipes();
    setRecipes(data);
  };

  useEffect(() => {
    getRecipesFromAsyncStorage();
  }, []);

  return (
    <SafeAreaView
      style={{
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 100,
      }}
    >
      <View style={{ alignItems: 'center', gap: 16 }}>
        <Logo color={theme.colors.primary} width={100} height={100} />
        <Text logo>fÜd</Text>
      </View>

      <View style={{ gap: 16 }}>
        <Button
          title="New recipe"
          onPress={() => navigation.navigate('new-recipe')}
        />
        <Button type="outline" title="View recipes" disabled={!recipes} />
      </View>
    </SafeAreaView>
  );
};
