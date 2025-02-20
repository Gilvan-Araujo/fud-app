import { createTheme } from '@rneui/themed';

export const theme = createTheme({
  mode: 'dark',
  darkColors: {
    primary: '#0080FF',
    background: '#121212',
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
        style: {
          ...(props.logo && {
            fontSize: 40,
            fontFamily: 'RobotoMono_700Bold',
          }),
        },
      };
    },
  },
});
