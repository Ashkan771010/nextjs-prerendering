import { useState, useEffect } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState(null);

  const fetchDashboardData = async () => {
    const response = await fetch("http://localhost:8000/dashboard").then(
      (res) => res.json()
    );
    setFetchedData(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <div>Laoding...</div>;
  }

  return (
    <div>
      <h1>Account Info</h1>
      <p>Posts: {fetchedData.posts}</p>
      <p>Likes: {fetchedData.likes}</p>
      <p>followers: {fetchedData.followers}</p>
      <p>following: {fetchedData.following}</p>
    </div>
  );
};

export default Dashboard;
