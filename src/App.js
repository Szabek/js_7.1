import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Main from "./components/Main";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Error from "./components/Error";

function App() {
  return (
      <Router>
          <nav>
              <Link to={"/"}>Home </Link>
              <Link to={"/about"}>About </Link>
              <Link to={"/services"}>services </Link>
              <Link to={"/contact/"}>contact </Link>
              <Link to={"/contact/pl"}>contact PL </Link>
              <Link to={"/contact/us"}>contact US </Link>
              <Link to={"/contact/de"}>contact DE </Link>
          </nav>
          <Routes>
              <Route path="/" exact element={<Main/>}/>
              <Route path="/about" exact element={<About/>}/>
              <Route path="/services" exact element={<Services/>}/>
              <Route path="/contact/" exact element={<Contact/>}/>
              <Route path="/contact/:lang" exact element={<Contact/>}/>
              <Route path="*" exact element={<Error/>}/>
          </Routes>
      </Router>
  );
}

export default App;
