import styles from '@styles/Article.module.scss';
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles }) => {
    return (
        <div className={styles.list}>
            {articles.map((article, idx) => {
                return <ArticleItem key={idx} article={article} />
            })}
        </div>
    )
}

export default ArticleList;