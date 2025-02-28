import { ScrollView, TouchableOpacity, View } from 'react-native';

import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon, Text, useTheme } from '@rneui/themed';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import uuid from 'react-native-uuid';
import { Toast } from 'toastify-react-native';
import { z } from 'zod';

import { RHFInput } from '@components/rhf--input';

import { createRecipe } from '../storage';

const schema = z.object({
  name: z.string().min(2, { message: 'Name is too short' }),
  items: z.array(
    z
      .object({
        name: z.string().min(2, { message: 'Name is too short' }),
        quantity: z.string(),
        measurement: z.string(),
      })
      .required(),
  ),
});

export const NewRecipe = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      items: [{ name: 'Chicken', quantity: '300', measurement: 'g' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const onSubmit = async (data) => {
    await createRecipe({
      name: data.name,
      ingredients: data.items,
      id: uuid.v4(),
    });

    Toast.success('Recipe created!');
    navigation.navigate('home');
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: 32,
          gap: 16,
          flexDirection: 'column',
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
            onPress={() => navigation.goBack()}
          >
            <Icon name="chevron-left" />
          </TouchableOpacity>

          <Text h3>New recipe</Text>
        </View>

        <RHFInput
          control={control}
          name="name"
          style={{ width: '100%' }}
          placeholder="Recipe name"
          errorMessage={errors.name?.message}
        />

        <View style={{ gap: 16, marginBottom: 16 }}>
          {fields.map((field, index) => (
            <View
              key={field.id}
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <RHFInput
                style={{ width: '45%' }}
                control={control}
                name={`items.${index}.name`}
                placeholder="Name"
                errorMessage={errors.items?.[index]?.name?.message}
              />

              <RHFInput
                style={{ width: '20%' }}
                control={control}
                keyboardType="numeric"
                placeholder="Qty"
                name={`items.${index}.quantity`}
                errorMessage={errors.items?.[index]?.quantity?.message}
              />

              <Controller
                control={control}
                name={`items.${index}.measurement`}
                render={({ field: { onChange, value } }) => {
                  const options = ['tsp', 'g', 'ml'];
                  const nextOption =
                    options[(options.indexOf(value) + 1) % options.length];

                  return (
                    <Button
                      buttonStyle={{ padding: 8 }}
                      containerStyle={{ width: '12%', height: 40 }}
                      type="outline"
                      title={value}
                      onPress={() => onChange(nextOption)}
                    />
                  );
                }}
              />

              <Button
                onPress={() => remove(index)}
                buttonStyle={{ padding: 8 }}
                containerStyle={{ width: '12%', height: 40 }}
                type="clear"
                icon={
                  <Icon
                    size={24}
                    name="remove-circle-outline"
                    color={theme.colors.error}
                  />
                }
              />
            </View>
          ))}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
          }}
        >
          <Button
            containerStyle={{ width: '40%' }}
            onPress={() => append({ measurement: 'g' })}
          >
            Add item
          </Button>

          <Button
            onPress={handleSubmit(onSubmit)}
            loading={isSubmitting}
            containerStyle={{ width: '40%' }}
          >
            Create recipe
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
