const PostDetail = (props) => {
  const { postDetail } = props;
  return (
    <>
      <h2>{postDetail.title}</h2>
      <p>{postDetail.body}</p>
    </>
  );
};

export default PostDetail;

export const getStaticPaths = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts").then(post => post.json());
    const posts = response.slice(0, 50);

   const paths = posts.map((post) => ({
     params: { postId: JSON.stringify(post.id) },
   }));
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  ).then((res) => res.json());

  return {
    props: {
      postDetail: response,
    },
  };
}
