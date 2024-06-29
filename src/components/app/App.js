import Home from "../home/Home";
import Video from "../video/Video";
import Navigation from "../navigation/Navigation";
import Joke from "../joke/Joke";
import Categories from "../categories/Categories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Video/>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/joke" element={<Joke />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
