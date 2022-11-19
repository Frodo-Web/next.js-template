import Meta from '../../../components/Meta';
import { server } from '../../../../config';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Article = ({ article }) => {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <Meta title={article.title} description={article.excerpt} />
            <h3>
                Article id: {id}
            </h3>
            <h3>
                Article title:
            </h3>
            <h3>{article.title}</h3>
            <h3>
                Article body:
            </h3>
            <p>{article.body}</p>
            <Link href='/'>Go Back</Link>
        </>
    )
}

// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();

//     return {
//         props: {
//             article
//         }
//     }
// }

export const getStaticProps = async (context) => {

    let article = null;

    if (server !== 'none') {
        // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
        const res = await fetch(`${server}/api/articles/${context.params.id}`);
        article = await res.json();
    } else {
        const articlesData = await import('../../../../data');
        const filtered = articlesData.articles.filter(article => article.id === context.params.id);
        article = filtered[0];
    }

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {

    let articles = null;

    if (server !== 'none') {
        // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
        const res = await fetch(`${server}/api/articles/`);
        const articles = await res.json();
    } else {
        const articlesData = await import('../../../../data');
        articles = articlesData.articles;
    }

    const ids = articles.map(article => article.id);
    const paths = ids.map(id => ({ params: { id: id.toString() } }));

    return {
        paths,
        fallback: false
    }
}

export default Article;