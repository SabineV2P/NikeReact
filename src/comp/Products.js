import { useEffect, useState } from "react";
import Card from "./Card";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <>
      <section id="products" className="container mt-5">
        <h2 className="mb-2">Casual Shoes</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Products;
