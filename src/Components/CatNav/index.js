import "./_cat-nav.scss";

export default function CatNav() {
  return (
    <>
      <div className="cat-nav-container">
        <ul>
          <li className="list-items">
            <a href="#">Men</a>
          </li>
          <li className="list-items">
            <a href="#">Women</a>
          </li>
          <li className="list-items">
            <a href="#">Kids</a>
          </li>
          <li className="list-items">
            <a href="#">Best of Offer</a>
          </li>
        </ul>
      </div>
    </>
  );
}
