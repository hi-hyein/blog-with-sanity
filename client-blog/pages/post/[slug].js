import { useRouter } from "next/router"
import SanityService from '../../services/SanityService'
import styles from '../../styles/Home.module.css'
import Header from '../../components/Header'
import BlogMainPost from '../../components/BlogMainPost'
import BlogPostDetail from '../../components/BlogPostDetail'

export default function PostAll({slug, post}) {
    console.log(post)
    return <div className={styles.container}>
    <Header />
    <BlogMainPost {...post}/>
    <BlogPostDetail blocks={post.content}/>
  </div>
}

export async function getStaticPaths () {  
    const posts = await new SanityService().getPosts();  
    const paths = posts.map(post => {
        return {
            params: {
                slug: post.slug
            }
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps ({ params }) {
    const { slug } = params;

    const posts = await new SanityService().getPosts();  
    const post = await posts.find(p => p.slug === slug)

    return {
        props: {
            slug,
            post
        }
    }
}