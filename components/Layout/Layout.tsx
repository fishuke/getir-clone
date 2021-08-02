import Head from 'next/head';
import { FC } from 'react';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';

export interface ILayoutProps {
    title: string;
    description?: string;
}

export const Layout: FC<ILayoutProps> = ({ children, title, description }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content={description || "Getir clone made with NextJs"}
                />
                <link rel="icon" href="/icons/favicon.ico" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};
