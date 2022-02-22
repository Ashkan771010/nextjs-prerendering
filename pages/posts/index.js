import Post from "../../components/post-component/Post";

const PostList = (props) => {
    const { posts } = props;
    return (
      <>
        <h1>Post List</h1>
        {posts.map((item) => {
          return <Post key={item.id} postList={item} />;
        })}
      </>
    );
}
export default PostList;


export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts").then(post => post.json());

    return {
        props: {
            posts: response.slice(0, 50)
        },
    }
}