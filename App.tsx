import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Routes } from './src/routes';
import { theme } from './src/theme';

export default function App() {
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
