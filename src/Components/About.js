import React from "react";
import skype from "../Asset/skype.png";
import visa from "../Asset/visa.png";
import cola from "../Asset/cola.png";
import google from "../Asset/google.png";
import puma from "../Asset/puma.png";
import adidas from "../Asset/adidas.png";
import samsung from "../Asset/samsung.png";
import elispe from "../Asset/elispe.png";
import pencil from "../Asset/pencil.png";
import vector from "../Asset/vector.png";
import fingerprint from "../Asset/fingerprint.png";

const About = () => {
  return (
    <section className="aboutMe">
      <div className="aboutMeChild">
        <p>Trusted by</p>
        <img src={skype} alt={skype} className="images" />
        <img src={visa} alt={visa} className="images" />
        <img src={cola} alt={cola} className="images" />
        <img src={google} alt={google} className="images" />
        <img src={puma} alt={puma} className="images" />
        <img src={adidas} alt={adidas} className="images" />
        <img src={samsung} alt={samsung} className="images" />
        <img src={elispe} alt={elispe} className="images" />
      </div>
      <h2 style={{ color: "#FF7008", marginTop: "100px" }}>Features</h2>
      <h1
        style={{
          color: "#000000",
          fontSize: "45px",
          marginBottom: "90px",
          fontWeight: "700",
        }}
      >
        Designed without everyone in mind
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "25%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={pencil}
            alt={pencil}
            style={{
              width: "50px",
              height: "50px",
            }}
          />
          <p style={{ fontWeight: "700", fontSize: "18px", marginTop: "20px" }}>
            Design with users in mind
          </p>
          <p
            style={{
              textAlign: "center",
              width: "300px",
              color: "#797979",
              marginTop: "20px",
            }}
          >
            Get curated content and design inspiration delivered straight to
            your inbox. Learn more
          </p>
          <h2
            style={{
              color: "#FF7008",
              textDecoration: "underline",
              textAlign: "center",
              marginTop: 45,
            }}
          >
            Learn More
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            width: "25%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={pencil}
            alt={pencil}
            style={{
              width: "50px",
              height: "50px",
            }}
          />
          <p style={{ fontWeight: "700", fontSize: "18px", marginTop: "20px" }}>
            Scalability
          </p>
          <p
            style={{
              textAlign: "center",
              width: "300px",
              color: "#797979",
              marginTop: "20px",
            }}
          >
            Get curated content and design inspiration delivered straight to
            your inbox. Learn more
          </p>
          <h2
            style={{
              color: "#FF7008",
              textDecoration: "underline",
              textAlign: "center",
              marginTop: 45,
            }}
          >
            Learn More
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            width: "25%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={pencil}
            alt={pencil}
            style={{
              width: "50px",
              height: "50px",
            }}
          />
          <p style={{ fontWeight: "700", fontSize: "18px", marginTop: "20px" }}>
            Security
          </p>
          <p
            style={{
              textAlign: "center",
              width: "300px",
              color: "#797979",
              marginTop: "20px",
            }}
          >
            Get curated content and design inspiration delivered straight to
            your inbox. Learn more
          </p>
          <h2
            style={{
              color: "#FF7008",
              textDecoration: "underline",
              textAlign: "center",
              marginTop: 45,
            }}
          >
            Learn More
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
