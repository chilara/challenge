import React from "react";
import logo from "../Asset/logo.png";

// import Styles from "../styles/Styles.module.css";

const Navbar = () => {
  return (
    <section
      style={{
        display: "flex",
        padding: "8px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img src={logo} alt={logo} />
      <nav
        style={{
          display: "flex",
          width: "20%",
          justifyContent: "space-around",
          alignContent: "space-between",
        }}
      >
        <a>Product</a>
        <a>About Us</a>
        <a>Contact</a>
      </nav>
    </section>
  );
};

export default Navbar;
