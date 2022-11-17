import HomePage from './HomePage';

const getPosts = async () => {
    const res = await import('../data');
    const posts = res.articles;
    return posts;
}

const Page = async () => {
    const recentPosts = await getPosts();
    return <HomePage recentPosts={recentPosts} />;
}
export default Page;