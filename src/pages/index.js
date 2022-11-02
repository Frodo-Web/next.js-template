import { server } from '../../config';
// import { articles as articlesData } from '../../data';
// import Head from 'next/head';
import Hello from '../components/Hello.jsx';
import ArticleList from '../components/ArticleList';

const HomePage = ({ articles }) => {
  return (
    <div>
      {/* <Head>
        <title>Next.js template</title>
        <meta name='keywords' content='next next.js javascript template' />
      </Head> */}

      <Hello message={'Welcome to Next.js!'} />
      <h1>Fetch articles:</h1>
      <ArticleList articles={articles} />
    </div>
  )
}

export default HomePage;

export const getStaticProps = async () => {
  let articles = null;

  if (server !== 'none') {
    const res = await fetch(`${server}/api/articles`);
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
     articles = await res.json();
  } else {
     const articlesData = await import('../../data');
     articles = articlesData.articles;
    // const ttt = await import('../../data');
    // console.log(ttt)
    // articles = articlesData;
     
  }

  return {
    props: {
      articles
    },
    revalidate: 10,
  }
}