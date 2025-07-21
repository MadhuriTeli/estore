import './_side-nav.scss';
export default function SideNav() {
  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Category</h3>
      </div>
      <div className="accordion">
        <div className="accordion-item individual-category">
          <div className="accordion-header">
            <button
              className="accordion-button"
              data-bs-target="#accordion-heading-on"
              data-bs-toggle="collapse"
              aria-expanded="true"
            >
              <div className="category-title">
                <a href="#">Men</a>
              </div>
            </button>
          </div>

          <div
            className="accordion-collapse collapse show"
            id="accordion-heading-on"
          >
            <div className="accordion-body">
              <ul>
                <li className="sub-items">
                  {" "}
                  <a href="#">Coats</a>{" "}
                </li>
                <li className="sub-items">
                  {" "}
                  <a href="#">Boots</a>{" "}
                </li>
                <li className="sub-items">
                  {" "}
                  <a href="#">Part Wear</a>{" "}
                </li>
                <li className="sub-items">
                  {" "}
                  <a href="#">Shirts</a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
