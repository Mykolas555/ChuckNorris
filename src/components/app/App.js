import Home from "../home/Home";
import "../app/app.scss"
import Navigation from "../navigation/Navigation";
import Joke from "../joke/Joke";
import Categories from "../categories/Categories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/joke" element={<Joke />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
