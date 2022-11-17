import Link from 'next/link';
import styles from '@styles/Nav.module.scss';

const Nav = () => {
    return (
        <ul className={styles.nav}>
            <li>
                <Link href="/">Go to /index.js</Link>
            </li>
            <li>
                <Link href="/post/abc">Go to pages/post/[pid].js</Link>
            </li>
            <li>
                <Link href="/post/abc?foo=bar">Also goes to pages/post/[pid].js</Link>
            </li>
            <li>
                <Link href="/post/abc/a-comment">
                    Go to pages/post/[pid]/[comment].js
                </Link>
            </li>
        </ul>
    )
}

export default Nav;