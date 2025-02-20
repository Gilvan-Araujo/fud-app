import { ActivityIndicator, StatusBar } from 'react-native';

import {
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts,
} from '@expo-google-fonts/roboto';
import { RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Routes } from './src/routes';
import { theme } from './src/theme';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    RobotoMono_700Bold,
  });

  if (!fontsLoaded) return <ActivityIndicator />;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <StatusBar />

          <Routes />
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
