import Head from 'next/head';
import Link from 'next/link';
import Hello from '../components/Hello.jsx';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Next.js template</title>
        <meta name='keywords' content='next next.js javascript template' />
      </Head>

      <Navbar />
      <Hello message={'Welcome to Next.js!'} />
    </div>
  )
}

export default HomePage

const Navbar = () => {
  return (
    <ul>
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