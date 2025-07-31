import { useDispatch, useSelector } from "react-redux";
import "./_side-nav.scss";
import { useEffect, useState } from "react";
import { getCategories } from "../../Redux/Category/action";
import { filterProducts , filterByPrice} from "../../Redux/Product/productSlices";
export default function SideNav() {
  const accordionCategories = useSelector(
    (state) => state.categoryReducer.categories
  );
  const dispatch = useDispatch();
  const fetchProductData = useSelector((state) => state.productReducer);
  const [products, setProducts] = useState();
  const [minPriceLimit, setMinPriceLimit] = useState(10);
  const [maxPriceLimit, setMaxPriceLimit] = useState(130);


  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    setProducts(fetchProductData.products);
  }, [fetchProductData.status]);

  const filterData = (selectedCategory)=>{
    const payload = { selectedCategory, products };
    dispatch(filterProducts(payload));
  }

  const setPriceLimit = (e, stateFlag) => {
    if (stateFlag === 'min') {
      setMinPriceLimit(e.target.value);
    }
    else if (stateFlag === 'max') {
      setMaxPriceLimit(e.target.value)
    }
  };

  const applyFilterByPrice = () => {
    const payload = { products, minPriceLimit, maxPriceLimit }
    dispatch(filterByPrice(payload));
  }



  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Category</h3>
      </div>
      <div className="accordion my-3">
        {accordionCategories.map((accordionCategory, key) => {
          if (accordionCategory.parent_category_id === null) {
            return (
              <div
                className="accordion-item individual-category"
                key={accordionCategory.id}
              >
                <div className="accordion-header">
                  <button
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapsed${key}`}
                    aria-expanded="false"
                  >
                    <div className="category-title">
                      <a href="#">{accordionCategory.category}</a>
                    </div>
                  </button>
                </div>

                <div
                  className="accordion-collapse collapse"
                  id={`collapsed${key}`}
                >
                  <div className="accordion-body">
                    <ul>
                      {accordionCategories.map((subCategory) => {
                        if (
                          accordionCategory.id ===
                          subCategory.parent_category_id
                        ) {
                          return (
                            <li className="sub-items" key={subCategory.id}>
                              <a
                                href="#"
                                onClick={() => filterData(subCategory)}
                              >
                                {subCategory.category}
                              </a>{" "}
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

      <div className="price-filter-container">
        <div className="section-title">
          <h3>Filter by price</h3>
        </div>
        <div>
          <label>Min : {minPriceLimit} </label>
          <input
            className="form-range"
            type="range"
            min={10}
            max={130}
            step={10}
            onChange={(e) => setPriceLimit(e, 'min')}
          />
        </div>

        <div>
          <label>Max : {maxPriceLimit}</label>
          <input
            className="form-range"
            type="range"
            min={10}
            max={130}
            step={10}
            onChange={(e)=> setPriceLimit(e, 'max')}
          />
        </div>
        <button className="btn btn-outline-dark my-3" onClick={applyFilterByPrice}>Apply Filter</button>
      </div>
    </div>
  );
}
