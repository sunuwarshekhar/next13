type Props = {
    data: Promise<Post[]>
}
export default async function UserPosts({data}: Props) {
  const posts = await data
  
  const content = posts.map(post => (
    <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <br/>
    </article>
  ))
    return content
}
