import { View } from 'react-native';

import { Text, useTheme } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Home = () => {
  const { theme } = useTheme();

  return (
    <SafeAreaView
      style={{
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 142,
      }}
    >
      <Text>Home</Text>
    </SafeAreaView>
  );
};
