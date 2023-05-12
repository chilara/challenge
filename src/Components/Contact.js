import React from "react";
import logo from "../Asset/logo.png";

const Contact = () => {
  return (
    <section
      style={{
        height: "528px",
        backgroundColor: "#F8F8F8",
        padding: "50px 50px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img src={logo} alt={logo} className="images" />
        <div>
          <h2 style={{ fontWeight: "700", fontSize: "18px" }}>Get Started</h2>
          <p style={{ color: "#797979" }}>Documentations</p>
          <p style={{ color: "#797979" }}>Pricing</p>
          <p style={{ color: "#797979" }}>Tutorials</p>
          <p style={{ color: "#797979" }}>Guides</p>
        </div>
        <div>
          <h2 style={{ fontWeight: "700", fontSize: "18px" }}>Platform</h2>
          <p style={{ color: "#797979" }}>Available on IOS</p>
          <p style={{ color: "#797979" }}>Available on Android</p>
          <p style={{ color: "#797979" }}>Available on Web</p>
          <p style={{ color: "#797979" }}>Guides</p>
        </div>
        <div>
          <h2 style={{ fontWeight: "700", fontSize: "18px" }}>NewsLetter</h2>
          <p style={{ width: "400px", color: "#797979" }}>
            Get curated content and design inspiration delivered straight to
            your inbox. <span style={{ color: "#FF7008" }}>Learn More</span>
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 40,
            }}
          >
            <input
              style={{
                border: "1px solid red",
                padding: "10px",
                width: "80%",
                border: "1px solid #BBBBBB",
              }}
              placeholder="Email"
            />
            <div
              style={{
                backgroundColor: "#FF7008",
                color: "white",
                padding: "10px",
              }}
            >
              Submit
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "20%",
          marginTop: 90,
          justifyContent: "space-between",
        }}
      >
        <div>Instagram</div>
        <div>Facebook</div>
        <div>Twitter</div>
      </div>
    </section>
  );
};

export default Contact;
