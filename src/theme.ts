import { createTheme } from '@rneui/themed';

export const theme = createTheme({
  mode: 'dark',
  darkColors: {
    primary: '#0080FF',
    error: '#FF1000',
    warning: '##FFA000',
    disabled: '#A0A0A0',
    background: '#2B2F33',
  },
  lightColors: {
    primary: '#0080FF',
  },
  components: {
    Button(_props, _theme) {
      return {
        buttonStyle: {
          padding: 16,
          borderRadius: 8,
        },
        titleStyle: {
          fontSize: 16,
          fontFamily: 'Roboto_500Medium',
        },
      };
    },
    Text(props, _theme) {
      return {
        h3Style: { fontSize: 32 },
        style: {
          ...(props.logo && {
            fontSize: 40,
            fontFamily: 'RobotoMono_700Bold',
          }),
        },
      };
    },
    Input(_props, theme) {
      return {
        placeholderTextColor: theme.colors.disabled,
        inputStyle: { fontSize: 16 },
        containerStyle: { paddingLeft: 0, paddingRight: 0 },
        labelStyle: { color: theme.colors.black },
        inputContainerStyle: {
          height: 40,
          borderWidth: 1,
          paddingLeft: 8,
          paddingRight: 8,
          borderRadius: 10,
          borderColor: theme.colors.disabled,
        },
      };
    },
  },
});
