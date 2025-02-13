import Resume from "./Resume";
import ShowPre from "./ShowPre";
import "./Nav.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Show = () => {
  return (
    <Router>
      <div className="Show">
        <nav className="navbar">
          <a href="#" className="logo">
            PortFolio.
          </a>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="https://mreusme15.netlify.app/" >Resume</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<ShowPre />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
};
export default Show;
