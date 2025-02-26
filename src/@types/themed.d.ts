// themed.d.ts
import '@rneui/themed';

declare module '@rneui/themed' {
  export interface TextProps {
    logo?: boolean;
    errorText?: boolean;
  }

  export interface ComponentTheme {
    Text: Partial<TextProps>;
  }
}
