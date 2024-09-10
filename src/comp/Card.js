import { Link } from "react-router-dom";

function Card({ product }) {
  return (
    <>
      <div className="col">
        <div className="card h-100 shadow custom-card">
          <img
            src={product.thumbnail}
            alt=""
            className="card-img-top w-100 custom-bg"
          />
          <div className="card-body">
            <div className="card-title">
              <h3>{product.title}</h3>
            </div>
            <p className="card-text">{product.description}</p>
          </div>
          <div className="card-footer custom-footer">
            <div className="float-start">
              <h4 className="custom-highlight">${product.price}</h4>
            </div>
            <div className="float-end">
              <Link to={`/product/${product.id}`}>
                <button className="btn btn-primary rounded-3 custom-btn">
                  Buy
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
