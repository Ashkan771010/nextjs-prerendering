import styled from "styled-components";

const UserContainer = styled.div`
  width: 50%;
  padding: 10px;
  transition: all 0.4s;
  text-align: center;
  border: 1px solid black;
  margin: 50px auto 0px auto;
  border-radius: 5px;

  &:hover {
    box-shadow: 1px 1px 0px #999, 2px 2px 0px #999, 3px 3px 0px #999,
      4px 4px 0px #999, 5px 5px 0px #999, 6px 6px 0px #999;
  }

  &:last-child {
      margin-bottom: 40px;
  }

  p {
    color: red;
    font-size: 18px;
  }
`;

export default UserContainer;
