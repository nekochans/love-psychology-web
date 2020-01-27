import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: {
      default: string;
      alt: string;
    };
    colors: {
      white: string;
      brightpink: string;
      pink: string;
      darkpink: string;
      purple: string;
      disabled: string;
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
