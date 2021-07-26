// import preset from '@rebass/preset';
import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';
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
