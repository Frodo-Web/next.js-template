import Head from 'next/head';
import Hello from '../components/Hello.jsx';
import ArticleList from '../components/ArticleList';

const HomePage = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>Next.js template</title>
        <meta name='keywords' content='next next.js javascript template' />
      </Head>

      <Hello message={'Welcome to Next.js!'} />
      <h1>Fetch articles:</h1>
      <ArticleList articles={articles} />
    </div>
  )
}

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}