import PostContainer from "./post.style";
import Link from "next/Link";

const Post = (props) => {
    const { postList } = props;
    return (
      <PostContainer>
        <Link href={`posts/${postList.id}`}>
          <h2>{postList.title}</h2>
        </Link>
        {/* <p>{postList.body}</p> */}
      </PostContainer>
    );
}
 
export default Post;