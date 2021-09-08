import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import '../styles/global.scss'
import 'tailwindcss/tailwind.css'

const theme = createTheme({
    palette: {
        primary: {
            dark: '#4c3398',
            main: '#5d3ebc',
            light: '#f3f0fe',
            contrastText: '#fff',
        },
        secondary: {
            main: '#7849f7',
            contrastText: '#fff',
        },
        common: {
            black: '#191919',
        },
        warning: {
            main: '#ddf300',
        },
    },
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
