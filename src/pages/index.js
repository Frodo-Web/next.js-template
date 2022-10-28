import Link from 'next/link'
import Hello from '../components/Hello.jsx';

const HomePage = () => {
  return (
    <div>
      <Content />
      <Hello message={'Welcome to Next.js!'} />
    </div>
  )
}

export default HomePage

const Content = () => {
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