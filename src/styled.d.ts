import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      family: {
        regular: string;
        bold: string;
      },
      size: {
        small: number;
        normal: number;
        bigger: number;
      }
    },
    color: {
      white: string;
      black: string;
      yellow: string;
      gray: string;
      lightGray: string;
      green: string;
      blue: string;
      red: string;
    }
  }
}
