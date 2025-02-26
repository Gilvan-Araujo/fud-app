import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Button, Text, useTheme } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

import Logo from '../assets/logo.svg';
import { getRecipes } from '../storage';

export const Home = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const [viewRecipesButtonDisabled, setViewRecipesButtonDisabled] =
    useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      const getRecipesFromAsyncStorage = async () => {
        const recipes = await getRecipes();
        setViewRecipesButtonDisabled(!Boolean(recipes.length));
      };

      getRecipesFromAsyncStorage();

      return () => {
        console.log('Screen is unfocused!');
      };
    }, []),
  );

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
        <Button
          type="outline"
          title="View recipes"
          disabled={viewRecipesButtonDisabled}
        />
      </View>
    </SafeAreaView>
  );
};
