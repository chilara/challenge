import React from "react";

import headphones from "../Asset/headphones.png";

const Hero = () => {
  return (
    <>
      <section style={{}}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",

            alignItems: "flex-end",
            marginRight: "40px",
          }}
        >
          <div style={{}}>
            <img
              src={headphones}
              alt={headphones}
              style={{ width: "37px", height: "37px" }}
            />
          </div>
          <div style={{ width: "480px", height: "186px" }}>
            <h1
              style={{
                color: "#000000",
                fontSize: "45px",
                fontWeight: "700",
              }}
            >
              Guranteed to give you the best experience in
              <br />
              <span style={{ color: "#FF7008" }}>banking</span>
            </h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <h2 style={{ color: "#FF7008", textDecoration: "underline" }}>
              Get started
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
