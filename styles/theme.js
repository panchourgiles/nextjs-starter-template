import { extendTheme } from '@chakra-ui/react';
const theme = extendTheme({
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    lime: {
      50: '#f2ffde',
      100: '#defcb2',
      200: '#caf884',
      300: '#b5f554',
      400: '#a1f226',
      500: '#88d90d',
      600: '#69a905',
      700: '#4a7801',
      800: '#2b4800',
      900: '#0b1900'
    },
    brand: {
      500: '#cc00cc',
      // ...
      900: '#cc00cc'
    },
    gray: {
      50: '#f7fafc',
      // ...
      900: '#171923'
    }
    // ...
  }
});
// as default export
export default theme;
// as named export
export { theme };
