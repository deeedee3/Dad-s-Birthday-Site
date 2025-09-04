import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Wishes from "./pages/Wishes";

import MainLayout from "./components/MainLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="wishes" element={<Wishes />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
