import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { EmotionCache, CacheProvider } from '@emotion/react';
import { createTheme, CssBaseline, darkScrollbar, useMediaQuery, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import createEmotionCache from '../src/createEmotionCache';
import { createContext, useMemo, useState } from 'react';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export const ColorModeContext = createContext({ toggleColorMode: () => {} });
export const DeviceContext = createContext<{isMobile: boolean}>({isMobile: false});

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // cant use because of ssr
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: mode === 'dark' ? darkScrollbar() : null,
            }
          }
        }
      }),
    [mode],
  );

  // these are for consumers
  // const theme = useTheme();
  // const colorMode = useContext(ColorModeContext);

  const isMobile = useMediaQuery('(max-width: 750px)');

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <DeviceContext.Provider value={{isMobile}}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline enableColorScheme />
            <Component {...pageProps} />
          </DeviceContext.Provider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}
