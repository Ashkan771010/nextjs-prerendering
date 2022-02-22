import styled from 'styled-components';

const PostContainer = styled.div`
  width: 70%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: 50px auto 0 auto;
  padding: 25px 15px;
  transition: box-shadow .3s;

  &:hover {
    box-shadow: 0 0 10px rgba(33, 33, 33, 0.4);
  }

  h1 {
    /* font-size: 17px; */
    color: black;
  }

  p {
    color: gray;
  }
`;

export default PostContainer;