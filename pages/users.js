import User from "../components/user-component/User";

const UsersList = (props) => {
    const { users } = props;
    return ( 
        <>
            <h1>Users List</h1>
            {
                users.map(user => {
                    return <User key={user.id} userList={user} />;
                })
            }
        </>
     );
}
 
export default UsersList;


export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
    return{
        props: {
            users: response
        }
    }
}