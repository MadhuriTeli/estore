import Product from "../Product";
import SideNav from "../SideNav";

export default function MainComponent() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {/* bootstrap-grid-system */}
          <div className="col-lg-2 col-md-3 col-sm-4">
            <SideNav />
          </div>
          <div className="col-lg-10 col-md-9 col-sm-8">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}
