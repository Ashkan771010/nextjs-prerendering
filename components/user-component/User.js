import UserContainer from "./user.style";

const User = (props) => {
    const { userList } = props;
    return ( 
        <UserContainer>
            <p>{userList.name}</p>
            <p>{userList.email}</p>
        </UserContainer>
     );
}
 
export default User;