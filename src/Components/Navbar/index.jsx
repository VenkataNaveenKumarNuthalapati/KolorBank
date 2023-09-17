// import Container from "react-bootstrap/Container";
import { NavLink, Link } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";
import "./index.css";
function NavbarComponent() {
  return (
    <div className=" bg-dark sticky-top mt-2 p-2">
      <div className="d-flex flex-row justify-content-between align-items-center">
        <Link
          to="/"
          className="d-flex flex-row justify-content-center align-items-center text-decoration-none"
        >
          <img
            className="KBlogo logo-container ml-3"
            src="https://static.vecteezy.com/system/resources/previews/011/423/441/non_2x/kb-logo-k-b-design-white-kb-letter-kb-letter-logo-design-initial-letter-kb-linked-circle-uppercase-monogram-logo-vector.jpg"
            alt=""
          />
          <span className="heading">Welcome to Kolar Bank</span>
        </Link>
        <nav className="ml-auto d-none d-md-block">
          <NavLink className="navLink" to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink
            className="navLink"
            to="/adminLogin"
            activeClassName="active"
          >
            Admin Login
          </NavLink>
          <NavLink className="navLink" to="/register" activeClassName="active">
            User Register
          </NavLink>
          <NavLink className="navLink" to="/login" activeClassName="active">
            Login
          </NavLink>
          <NavLink className="navLink" to="/about" activeClassName="active">
            About
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default NavbarComponent;
