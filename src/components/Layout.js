import Nav from './Nav';
import Header from './Header';
import styles from '@styles/Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <>
            <h1>Nav: </h1>
            <Nav />

            <div className={styles.container}>
                <Header />
                
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout;