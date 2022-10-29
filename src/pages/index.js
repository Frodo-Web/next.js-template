import Head from 'next/head';
import Hello from '../components/Hello.jsx';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Next.js template</title>
        <meta name='keywords' content='next next.js javascript template' />
      </Head>

      <Hello message={'Welcome to Next.js!'} />
    </div>
  )
}

export default HomePage;