import '@styles/global.scss';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Layout>
                <h1>Layout children:</h1>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp;