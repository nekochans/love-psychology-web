import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: {
      default: string;
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
  }
}
