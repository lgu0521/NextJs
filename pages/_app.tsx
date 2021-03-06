import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalFonts from '../styles/fonts/fonts';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
export default MyApp
