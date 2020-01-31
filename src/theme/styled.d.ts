import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: {
      default: string;
      alt: string;
      border: string;
      disabled: string;
    };
    colors: {
      white: string;
      brightpink: string;
      pink: string;
      darkpink: string;
      purple: string;
    };
    text: {
      default: string;
      secondary: string;
      alt: string;
      reverse: string;
    };
    radio: {
      dark: string;
      secondary: string;
    };
  }
}
