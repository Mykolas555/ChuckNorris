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
          <Route path="/ChuckNorris" element={<Home />} />
          <Route path="/ChuckNorris/home" element={<Home />} />
          <Route path="/ChuckNorris/categories" element={<Categories />} />
          <Route path="/ChuckNorris/joke" element={<Joke />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
