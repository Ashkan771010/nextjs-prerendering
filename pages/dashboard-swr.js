import useSWR from "swr";

const DashboardSwr = () => {

  const fetcher = async () => {
    const response = await fetch("http://localhost:8000/dashboard").then(
      (res) => res.json()
    );
    return response;
  };

   const { data, error } = useSWR("dashboard", fetcher);

   if(error) {
       return "Error Happend"
   }

   if(!data) {
       return "Loading..."
   }

  return (
    <div>
      <h1>Account Info</h1>
      <p>Posts: {data.posts}</p>
      <p>Likes: {data.likes}</p>
      <p>followers: {data.followers}</p>
      <p>following: {data.following}</p>
    </div>
  );
};

export default DashboardSwr;
