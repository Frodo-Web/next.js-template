'use client';

const HomePage = ({ recentPosts }) => {
    return (
        <div>
            {recentPosts.map((post) => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    );
}
export default HomePage;