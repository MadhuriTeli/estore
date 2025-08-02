import { Route, Routes } from "react-router-dom";
import "./App.css";
import CatNav from "./Components/CatNav";
import Header from "./Components/Header/Header";
import MainComponent from "./Components/MainComponent";
import ProuductDetails from "./Components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <CatNav />
      <Routes>
        <Route path="/" Component={MainComponent} />
        <Route path="/productDetails" Component={ProuductDetails} />
      </Routes>
    </div>
  );
}

export default App;
