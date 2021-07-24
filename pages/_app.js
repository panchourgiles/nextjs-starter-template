import theme from '@rebass/preset';
import GlobalStyle from '@styles/globalStyle';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
