const NewsCategory = (props) => {
  const { fillterdList, category } = props;

  return (
    <>
      <h1>Showing News For Category {category}</h1>
      <hr />
      {fillterdList.map((item) => {
        return (
          <div key={item.id}>
            <h1>
              {item.id} {item.title}
            </h1>
            <p>{item.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default NewsCategory;

export const getServerSideProps = async (context) => {
  const { params, req, res, query } = context;
  res.setHeader('Set-Cookie', ['name=ashkan'])
  console.log(req)
  console.log(req.headers.cookie)
  console.log("query:", query)
  console.log("params:", params)
  const response = await fetch(
    `http://localhost:8000/news?category=${params.category}`
  ).then((res) => res.json());

  return {
    props: {
      fillterdList: response,
      category: params.category,
    },
  };
};
