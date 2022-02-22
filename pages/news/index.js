const NewsList = (props) => {
  const { news } = props;
  return (
    <>
      <h1>News List</h1>
      <hr />
      {news.map((items) => {
        return (
            <div key={items.id}>
          <h1>
            {items.id} {items.title} | {items.category}
          </h1>
        </div>
        )
      })}
    </>
  );
};

export default NewsList;

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:8000/news").then((res) =>
    res.json()
  );

  return {
    props: {
      news: response,
    },
  };
};
