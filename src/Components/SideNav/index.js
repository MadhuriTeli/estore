import { useDispatch, useSelector } from "react-redux";
import "./_side-nav.scss";
import { useEffect } from "react";
import { getCategories } from "../../Redux/Category/action";
export default function SideNav() {
  const accordionCategories = useSelector(
    (state) => state.categoryReducer.categories
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Category</h3>
      </div>
      <div className="accordion">
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
                              <a href="#">{subCategory.category}</a>{" "}
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
    </div>
  );
}
