import { ScrollView, TouchableOpacity, View } from 'react-native';

import { Button, Icon, Input, Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

export const NewRecipe = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
            gap: 16,
            alignItems: 'center',
            width: '100%',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <TouchableOpacity
              style={{
                position: 'absolute',
                left: 0,
                width: 48,
                height: '100%',
                flex: 1,
                justifyContent: 'center',
              }}
            >
              <Icon name="chevron-left" />
            </TouchableOpacity>

            <Text h3>New Recipe</Text>
          </View>

          <Input placeholder="Recipe name" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
