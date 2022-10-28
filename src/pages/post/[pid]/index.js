import Head from 'next/head';
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <>
    <Head>
      <title>Post: {pid}</title>
      <meta name='keywords' content={`next.js post ${pid}`} />
    </Head>

      <p>Post: {pid}</p>
    </>
  )
}

export default Post
