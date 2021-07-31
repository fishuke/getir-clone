import Head from 'next/head'
import Layout from "../components/layout/layout";

import {createTheme, ThemeProvider} from '@material-ui/core/styles';

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
            black: '#191919'
        },
        warning: {
            main: '#ddf300'
        }
    },
});

export default function Home({children}: any) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Getir</title>
                <meta name="description" content="Getir clone made with NextJs"/>
                <link rel="icon" href="/icons/favicon.ico"/>
            </Head>
            <Layout>
                {children}
            </Layout>
        </ThemeProvider>
    )
}
