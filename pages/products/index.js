import Link from "next/link";

const ProductsList = (props) => {
  const { products } = props;
  return (
    <>
      <h1>Products List</h1>
      {products.map((item) => {
        return (
          <Link key={item.id} href={`products/${item.id}`} passHref>
            <div>
              <h2>
                {item.id} {item.title} {item.price}
              </h2>
            </div>
          </Link>
        );
      })}
    </>
  );
};
export default ProductsList;

export async function getStaticProps() {
  const response = await fetch("http://localhost:8000/products").then((item) =>
    item.json()
  );
  console.log("Regeneration Done");
  
  return {
    props: {
      products: response,
    },
    revalidate: 1,
  };
}
