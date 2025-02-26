import { View } from 'react-native';

import { Input, InputProps, Text } from '@rneui/themed';
import { Control, Controller } from 'react-hook-form';

type Props = {
  control?: Control<any>;
  errorMessage?: string;
  name: string;
} & InputProps;

export const RHFInput = ({
  name,
  control,
  errorMessage,
  ref,
  ...rest
}: Props) => {
  return (
    <View style={rest.style}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            value={value}
            onChangeText={(value) => {
              rest.keyboardType === 'numeric'
                ? onChange(Number(value))
                : onChange(value);
            }}
            onBlur={onBlur}
            {...rest}
          />
        )}
        name={name}
      />

      {errorMessage && <Text errorText>{errorMessage}</Text>}
    </View>
  );
};
