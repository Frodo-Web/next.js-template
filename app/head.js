const Head = async ({ title, keywords, description }) => {
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </>
    )
}

Head.defaultProps = {
    title: 'Next.js template',
    keywords: 'next, next.js, javascript, template',
    description: 'A basic Next.js template',
}

export default Head;
// From documentation:

// async function getPost(slug) {
//     const res = await fetch('...');
//     return res.json();
//   }
  
//   export default async function Head({ params }) {
//     const post = await getPost(params.slug);
  
//     return (
//       <>
//         <title>{post.title}</title>
//       </>
//     )
//   }