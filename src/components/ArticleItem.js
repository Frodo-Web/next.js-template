import Link from 'next/link';
import styles from '@styles/Article.module.scss';

const ArticleItem = ({ article }) => {
    return (
        <Link href='/article/[id]' as={`/article/${article.id}`}>
            <h3>{article.title}</h3>
        </Link>
    )
}

export default ArticleItem;
