import "./_product.scss";

export default function Product() {
    const product =[
        {pname: "Jacket", price: 45, image: require("../../assets/images/shop/shop-1.jpg")},
        {pname: "Shoes", price: 60, image: require("../../assets/images/shop/shop-2.jpg")},
        {pname: "Watch", price: 120, image: require("../../assets/images/shop/shop-3.jpg")},
        {pname: "Bag", price: 80, image: require("../../assets/images/shop/shop-4.jpg")},
        {pname: "Sunglasses", price: 50, image: require("../../assets/images/shop/shop-5.jpg")},
    ]

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
