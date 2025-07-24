import { useSelector } from 'react-redux';
import './_side-nav.scss';
import accordionSlice from "../../Redux/Accordion/accordionSlices";
export default function SideNav() {

  const accordionCategories = useSelector(accordionSlice.getInitialState);

  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Category</h3>
      </div>

      {accordionCategories.map((accordionCategory, key) => (
        <div className="accordion" key={key}>
          <div className="accordion-item individual-category">
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

            <div className="accordion-collapse collapse" id={`collapsed${key}`}>
              <div className="accordion-body">
                <ul>
                  {accordionCategory.items.map((item, index) => (
                    <li className="sub-items" key={index}>
                      <a href="#">{item}</a>{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
