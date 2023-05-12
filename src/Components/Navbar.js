import React from "react";
import logo from "../Asset/logo.png";

// import Styles from "../styles/Styles.module.css";

const Navbar = () => {
  return (
    <section className="navbar">
      <img src={logo} alt={logo} style={{ marginLeft: "5%" }} />
      <nav className="navChild">
        <div>
          <a href="#" style={{ color: "#FF7008", cursor: "pointer" }}>
            Product
          </a>
          <hr
            style={{
              color: "#FF7008",
              border: "1px solid #FF7008",
              marginTop: "18px",
            }}
          />
        </div>
        <a href="#" style={{ cursor: "pointer" }}>
          About Us
        </a>
        <a href="#" style={{ cursor: "pointer" }}>
          Contact
        </a>
      </nav>
    </section>
  );
};

export default Navbar;
