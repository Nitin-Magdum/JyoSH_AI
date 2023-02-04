import React from 'react'
import "../../App.css";
import Robot from "../Images/Robot.png"
import DPIIT from "../Images/DPIIT-certificate.png";
export default function Home() {
  return (
    <div
      className="App"
      sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
    >
      <h1 style={{ color: "#12CFF3" }}>JyoSH AI Solutions</h1>
      <br />
      <br />
      <h3 style={{ color: "Black" }}>
        Leveraging Artificial Intelligence for benefits of farmers and society
      </h3>
      <br />
      <br />
      <h2 style={{ color: "#12CFF3" }}>
        Our Mission is to build Integrated Agriculture Robot for Cotton
        Cultivation Automation
      </h2>
      <img src={Robot} />
      <br />
      <h2 style={{ color: "#12CFF3" }}>Recognition by</h2>
      <h2 style={{ color: "#12CFF3" }}>
        Department for Promotion of Industry and Internal Trade
      </h2>
      <img src={DPIIT} />
    </div>
  );
}
