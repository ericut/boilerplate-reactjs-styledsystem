import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      primary: string;
      secondary: string;
    };
    text: string;
    colors: {
      primary: string;
      secondary: string;
    };
  }
}
