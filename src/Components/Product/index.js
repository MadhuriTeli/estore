import productSlice from "../../Redux/Product/productSlices";
import "./_product.scss";
import { useSelector } from "react-redux";

export default function Product() {
    const product = useSelector(productSlice.getInitialState);

  return (
    <>
      <div className="products-container">
        {product.map((item, index) => (
          <div className="mx-5 p-3 col-lg-3 col-md-6 product-card">
            <div className="product-image-container">
              <img src={item.image} alt="product" className="product-image" />
            </div>
            <div className="product-info">
              <h5>
                <a href="#">{item.pname}</a>
              </h5>
              <p className="product-price"> ${item.price}</p>
              <div className="product-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
