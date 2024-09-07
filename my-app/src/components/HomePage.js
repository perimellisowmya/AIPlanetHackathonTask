import React from "react";
import "./Homepage.css";
import rocket1 from "../assets/rocket.png";
import aimodelimage from "../assets/icons/Group 1000002515.svg";
import dataimage from "../assets/icons/Group 1000002516.svg";
import aihostedimage from "../assets/icons/Group 1000002518.svg";
import Challanges from "./Challanges";
import ExploreChallenges from "./ExploreChallangesPage";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div
        className="container-fluid bg-navy text-white py-5 mt-5"
        style={{ minHeight: "570px" }}
      >
        <div className="row h-100 d-flex align-items-center justify-content-center">
          <div className="col-md-8 col-lg-5 mx-auto text-center text-md-start">
            <h1
              className="display-1 mb-4 fw-bold p-10"
              style={{ lineHeight: "1.2" }}
            >
              Accelerate Innovation <br /> with Global AI Challenges
            </h1>
            <div className="my-5">
              <p className="display-6 mb-4 p-8" style={{ lineHeight: "1.2" }}>
                AI Challenges at DPhi simulate real-world problems. It is a{" "}
                <br />
                great place to put your AI/Data Science skills to test on <br />{" "}
                diverse datasets allowing you to foster learning through <br />{" "}
                competitions.
              </p>
            </div>
            <Link to="/edit">
              <button
                className="btn btn-light btn-s mt-4 p-20px"
                style={{
                  fontSize: "1.5rem", // Larger font size
                  padding: "10px 30px", // Larger padding
                  borderRadius: "10px", // Rounded corners
                }}
              >
                Create Challenge
              </button>
            </Link>
          </div>
          <div className="col-md-4 text-center">
            <img src={rocket1} alt="Rocket" className="img-fluid" />
          </div>
        </div>
      </div>

      <div
        className="container-fluid text-white py-4 mt-6"
        style={{ backgroundColor: "#002A3B" }}
      >
        <div className="row text-center">
          <div className="col-md-4">
            <div className="d-flex align-items-center justify-content-center p-4">
              <img
                src={aimodelimage}
                alt="AI Models"
                className="me-4" // Adjust gap between image and text
                style={{
                  width: "70px",
                  height: "70px",
                }}
              />
              <div className="text-start">
                <h3 className="mb-1" style={{ fontSize: "3rem" }}>
                  100k+
                </h3>{" "}
                {/* Larger font size for '100k+' */}
                <p className="mb-0" style={{ fontSize: "1rem" }}>
                  AI model submissions
                </p>{" "}
                {/* Smaller font size for description */}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex align-items-center justify-content-center p-4">
              <img
                src={dataimage}
                alt="Data Scientists"
                className="me-4"
                style={{ width: "70px", height: "70px" }}
              />
              <div className="text-start">
                <h3 className="mb-1" style={{ fontSize: "3rem" }}>
                  50k+
                </h3>{" "}
                {/* Larger font size for '100k+' */}
                <p className="mb-0" style={{ fontSize: "1rem" }}>
                  Data Scientists
                </p>{" "}
                {/* Smaller font size for description */}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex align-items-center justify-content-center p-4">
              <img
                src={aihostedimage}
                alt="AI Challenges"
                className="me-4"
                style={{ width: "70px", height: "70px" }}
              />
              <div className="text-start">
                <h3 className="mb-1" style={{ fontSize: "3rem" }}>
                  100+
                </h3>{" "}
                {/* Larger font size for '100k+' */}
                <p className="mb-0" style={{ fontSize: "1rem" }}>
                  AI Challenges hosted
                </p>{" "}
                {/* Smaller font size for description */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Challanges />
      <ExploreChallenges />
    </div>
  );
}

export default HomePage;
