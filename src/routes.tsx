import { View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';
import ToastManager from 'toastify-react-native';

import { Home } from '@screens/home';
import { NewRecipe } from '@screens/new-recipe';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors?.background }}>
      <Stack.Navigator
        id={undefined}
        screenOptions={() => ({
          headerShown: false,
          contentStyle: {
            flex: 1,
            backgroundColor: theme.colors?.background,
            padding: 16,
          },
          animation: 'slide_from_bottom',
        })}
        initialRouteName="home"
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="new-recipe" component={NewRecipe} />
      </Stack.Navigator>

      <ToastManager
        style={{ backgroundColor: theme.colors.grey5 }}
        textStyle={{ color: theme.colors.black }}
        position="bottom"
        animationStyle="rightInOut"
      />
    </View>
  );
};
