import { useEffect } from "react";
import "./_product.scss";
import { useDispatch, useSelector } from "react-redux";
import {addCartItem} from '../../Redux/Cart/cartSlices';
import { getProducts } from "../../Redux/Product/productAction";

export default function Product() {
    const products = useSelector((state) => state.productReducer.products);
    const cart = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();
    
    useEffect(()=>{
      dispatch(getProducts());
    },[]);

    const addToCart = (product) => {
     dispatch(addCartItem(product));
    };

  return (
    <>
      <div className="products-container">
        {products.map((product, index) => (
          <div
            className="mx-5 p-3 col-lg-3 col-md-6 product-card"
            key={product.id}
          >
            <div className="product-image-container">
              <img
                src={require("../../assets/images/shop/" + product.product_img)}
                alt={product.product_name}
                className="product-image"
              />
            </div>
            <div className="product-info">
              <h5>
                <a href="#">{product.product_name}</a>
              </h5>
              <p className="product-price"> ${product.price}</p>
              <div className="product-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
            <div className="my-3">
              <div className="cart-button" onClick={() => addToCart(product)}>
                <div className="cart-icon-container">
                  <i className="fa fa-shopping-cart mx-4" />
                </div>
                <div className="cart-text-container mx-3">
                  <p> Add to Cart </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
