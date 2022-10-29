import { useRouter } from 'next/router'

const Article = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <h3>
                Article id: {id}
            </h3>
        </>
    )
}

export default Article;