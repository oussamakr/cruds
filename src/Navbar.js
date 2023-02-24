import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [state, setstate] = useState("");
  return (
    <nav className="navbar navbar-expand-lg  bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
          <div className="navbar-nav ms-5    " style={{ display: state }}>
            <NavLink
              to="/"
              className="nav-link  text-white"
              aria-current="page"
            >
              Home
            </NavLink>
            <Link
              to="/mylist"
              className="nav-link inactive text-white"
              aria-current="page"
            >
              My Product List
            </Link>
            <Link
              to="/addlist"
              className="nav-link active text-white"
              aria-current="page"
            >
              Add Product
            </Link>
          </div>

          <div className="d-flex ms-auto ">
            <Link to="/login" className="nav-link active text-white me-3 ">
              Login
            </Link>
            <Link to="/register" className="nav-link active text-white">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
