import categorySlice from "../../store/slices/categorySlices";
import "./_cat-nav.scss";
import { useSelector } from "react-redux";

export default function CatNav() {
  const categories = useSelector(categorySlice.getInitialState);
  return (
    <>
      <div className="cat-nav-container">
        <ul>
          {categories.map((category, index) => 
            <li className="list-items">
              <a href="#">{category}</a>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
