import "./App.css";
import CatNav from "./Components/CatNav";
import Header from "./Components/Header/Header";
import MainComponent from "./Components/MainComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <CatNav />
      <MainComponent />
    </div>
  );
}

export default App;
