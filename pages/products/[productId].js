import { useRouter } from "next/router";

const ProductsDetail = (props) => {
  const { productDetail } = props;

  const router = useRouter();

  if(router.isFallback) {
      return <h2>Loading...</h2>
  }
  return (
    <>
      <h2>{productDetail.title}</h2>
      <hr />
      <p>{productDetail.description}</p>
      <hr />
      <p>{productDetail.price}</p>
    </>
  );
};

export default ProductsDetail;

export const getStaticPaths = async () => {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/posts"
  //   ).then((post) => post.json());
  //   const posts = response.slice(0, 50);

  //   const paths = posts.map((post) => ({
  //     params: { postId: JSON.stringify(post.id) },
  //   }));
  return {
    paths: [
        { params: { productId: "1" } },
    ],
    fallback: true,
  };
};

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:8000/products/${params.productId}`
  ).then((res) => res.json());

  return {
    props: {
      productDetail: response,
    },
    revalidate: 2,
  };
}
