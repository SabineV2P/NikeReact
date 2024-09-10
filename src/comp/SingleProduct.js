import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function SingleProduct() {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <>
      <section id="home" className="container mt-5">
        <div className="row g-2 justify-content-around">
          <div className="col-md-6 d-flex justify-content-center align-items-center order-lg-2">
            <div className="p-3">
              <img
                src={product.thumbnail}
                alt=""
                className="mx-auto d-block w-100 img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center order-lg-2">
            <div className="p-3">
              <h1 className="custom-highlight">{product.title}</h1>
              <h3>$ {product.price}</h3>
              <p>{product.description}</p>
              <button
                className="btn btn-primary rounded-3_custom-btn"
                type="button"
              >
                <i className="fa fa-shopping-cart"></i> BUY NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProduct;
