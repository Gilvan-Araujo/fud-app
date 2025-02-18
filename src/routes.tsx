import { View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';

import { Home } from '@screens/home';

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
      </Stack.Navigator>
    </View>
  );
};
