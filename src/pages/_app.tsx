import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import darkTheme from '@/theme/darkTheme'
import lightTheme from '@/theme/lightTheme'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import { ToggleProvider } from '@/context/ToggleContext'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const darkThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...darkTheme,
      }),
    [mode]
  )
  const lightThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...lightTheme,
      }),
    [mode]
  )

  return (
    <ToggleProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider
          theme={mode === 'dark' ? darkThemeChosen : lightThemeChosen}
        >
          <SessionProvider session={session}>
            <CssBaseline />
            <Header ColorModeContext={ColorModeContext} />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SessionProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ToggleProvider>
  )
}

export default App
