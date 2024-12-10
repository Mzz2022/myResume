import Resume from "./Resume";
import ShowPre from "./ShowPre";
import "./Show.css";
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
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="#">PortFolio</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<ShowPre />} />
        <Route path="/about" element={<Resume />} />
      </Routes>
    </Router>
  );
};
export default Show;
