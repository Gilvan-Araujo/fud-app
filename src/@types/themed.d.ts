// themed.d.ts
import '@rneui/themed';

declare module '@rneui/themed' {
  export interface TextProps {
    logo: boolean;
  }

  export interface ComponentTheme {
    Text: Partial<TextProps>;
  }
}
