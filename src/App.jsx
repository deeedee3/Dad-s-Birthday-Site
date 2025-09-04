import {Home} from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import{Gallery} from "./pages/Gallery";
import {About } from "./pages/About";
import {Wishes} from "./pages/Wishes";

const App = ()=> {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/gallery" element={<Gallery />} />
        <Route path ="about" element={<About />} />
        <Route path ="wishes" element={<Wishes/>}/>
      </Routes>
    </Router> 
  )
}

export default App;