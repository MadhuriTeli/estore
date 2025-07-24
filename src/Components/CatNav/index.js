import { useEffect } from "react";
import "./_cat-nav.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Redux/Category/action";

export default function CatNav() {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getCategories());
  }, []);

  return (
    <>
      <div className="cat-nav-container">
        <ul>
          {categories.map((category, index) => {
            if (category.parent_category_id === null) {
             return (
               <li className="list-items" key={category.id}>
                 <a href="#">{category.category}</a>
               </li>
             );}
          })}
        </ul>
      </div>
    </>
  );
}
