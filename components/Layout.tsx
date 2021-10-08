import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>비오키친</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;