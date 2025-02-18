import { StatusBar } from 'react-native';

import { Text, ThemeProvider } from '@rneui/themed';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { theme } from './src/theme';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <StatusBar />

          <Text>Universal React with Expo</Text>
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
