import React from "react";
import headphones from "../Asset/headphones.png";

const Hero = () => {
  return (
    <section>
      <hr
        style={{
          border: "0.5px solid #9F9F9F",
          marginBottom: "20%",
        }}
      />
      <div className="hero1">
        <div style={{}}>
          <img
            src={headphones}
            alt={headphones}
            style={{ width: "37px", height: "37px", marginRight: "440px" }}
          />
        </div>
        <div className="heroChild">
          <h1 className="guranteed">
            Guranteed to give you the best experience in
            <br />
            <span style={{ color: "#FF7008" }}>banking</span>
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <h2
            style={{
              color: "#FF7008",
              textDecoration: "underline",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            Get started
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
