import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import Loader from "./components/Loader";

function App() {
  return (
    <div className="App">
      <Loader />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
