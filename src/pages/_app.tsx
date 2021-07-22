import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { UploadProvider } from '../context/UploadContext';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <UploadProvider>
        <Component {...pageProps} />
      </UploadProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}
export default MyApp;
