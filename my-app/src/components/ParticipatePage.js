// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";

// function ParticipatePage() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // const challange=location.state
//   // console.log(location.state)
//   // console.log(challange)

 
//   // Access the Redux state for challenge details
//   const challanges = useSelector((state) => state.challange); // Fetch from Redux
//   // const challengeId = location.state?.challengeId;
//   const challengeId =
//     location.state?.challengeId || "defaultIdFromReduxOrParams";

//    console.log("Challenge ID from location:", challengeId);
//   // const challange =challanges.find((c) => c.challengeName === challengeName) || location.state;
//   // const challange = challanges.find((c) => c.id === challengeId) || location.state; // Use id to find the challenge
//   const challange = challanges.find((c) => c.id === challengeId) || null;


//   console.log("challanges", challanges);
//   console.log("challange", challange);

//   useEffect(() => {
//     console.log("Component re-rendered with challenges:", challanges);
//   }, [challanges]);

//   const handleParticipate = (challange) => {
//     console.log("Navigating with data:", challange);
//     navigate(`/editdetails`, { state: challange });
//   };
//   return (
//     <div>
//       <div
//         className="container-fluid bg-navy text-white py-5 mt-5"
//         style={{ minHeight: "500px" }}
//       >
//         <div
//           className="mr-5"
//           style={{ paddingTop: "100px", marginLeft: "100px" }}
//         >
//           <div
//             className="d-inline-block  display-6  px-3 py-2"
//             style={{ borderRadius: "8px", backgroundColor: "#FFCE5C" }}
//           >
//             <p className="text-black mb-0" style={{ lineHeight: "1.5" }}>
//               Starts on {challange?.startDate} (India Standard Time)
//             </p>
//           </div>
//           <h1
//             className="mb-4 display-1"
//             style={{ lineHeight: "2", fontWeight: "20px" }}
//           >
//             {challange?.challengeName}
//           </h1>
//           <p className="display-6" style={{ lineHeight: "2" }}>
//             {challange?.description}
//           </p>
//           <div
//             className="d-inline-block   bg-white px-2 py-2"
//             style={{ borderRadius: "8px" }}
//           >
//             <p className="text-black display-6">{challange?.levelType}</p>
//           </div>
//         </div>
//       </div>
//       <div
//         className="bg-white d-flex justify-content-between align-items-center p-3 shadow-sm"
//         style={{
//           borderRadius: "20px",
//           paddingLeft: "70px",
//           paddingRight: "20px",
//         }}
//       >
//         <div className="text-dark ">
//           <h4
//             className="mb-0 display-5"
//             style={{
//               borderRadius: "20px",
//               paddingLeft: "90px",
//             }}
//           >
//             Overview
//           </h4>
//         </div>
//         <div
//           className="d-flex"
//           style={{
//             borderRadius: "20px",
//             paddingRight: "100px",
//           }}
//         >
//           {/* <Link
//             to={{
//               pathname: "/editdetails",
//               state: challange, // pass challenge data to Edit page
//             }}
//           >
//             <button className="btn btn-success me-3 btn-lg p-20">Edit</button>
//           </Link> */}
//           <button onClick={() => handleParticipate(challange)}>Edit</button>
//           <button className="btn btn-outline-danger btn-lg">Delete</button>
//         </div>
//       </div>
//       <p className="display-4" style={{ fontSize: "10px" }}>
//         Butterflies are the adult flying stage of certain insects belonging to
//         an order or group called Lepidoptera. The word "Lepidoptera" means
//         "scaly wings" in Greek. This name perfectly suits the insects in this
//         group because their wings are covered with thousands of tiny scales
//         overlapping in rows.{" "}
//       </p>
//       <p>
//         An agency of the Governmental Wildlife Conservation is planning to
//         implement an automated system based on computer vision so that it can
//         identify butterflies based on captured images. As a consultant for this
//         project, you are responsible for developing an efficient model.
//       </p>{" "}
//       <p>
//         Your Task is to build an Image Classification Model using CNN that
//         classifies to which class of weather each image belongs to.
//       </p>
//     </div>
//   );
// }

// export default ParticipatePage;



import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ParticipatePage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Access the Redux state for challenge details
  const challanges = useSelector((state) => state.challange); // Fetch from Redux
  const challengeId = location.state?.id || "defaultIdFromReduxOrParams";

  // Local state to hold challenge data
  const [challange, setChallange] = useState(
    challanges.find((c) => c.id === challengeId) || location.state || null
  );

  // Re-render the component when the Redux state changes
  useEffect(() => {
    const updatedChallange = challanges.find((c) => c.id === challengeId);
    if (updatedChallange) {
      setChallange(updatedChallange); // Set the updated challenge
    }
  }, [challanges, challengeId]); // Re-run effect when 'challanges' or 'challengeId' changes


  

  const handleParticipate = (challange) => {
    navigate(`/editdetails`, { state: challange });
  };

  return (
    <div>
      <div
        className="container-fluid bg-navy text-white py-5 mt-5"
        style={{ minHeight: "500px" }}
      >
        <div
          className="mr-5"
          style={{ paddingTop: "100px", marginLeft: "100px" }}
        >
          <div
            className="d-inline-block  display-6  px-3 py-2"
            style={{ borderRadius: "8px", backgroundColor: "#FFCE5C" }}
          >
            <p className="text-black mb-0" style={{ lineHeight: "1.5" }}>
              Starts on {challange?.startDate} (India Standard Time)
            </p>
          </div>
          <h1
            className="mb-4 display-1"
            style={{ lineHeight: "2", fontWeight: "20px" }}
          >
            {challange?.challengeName}
          </h1>
          <p className="display-6" style={{ lineHeight: "2" }}>
            {challange?.description}
          </p>
          <div
            className="d-inline-block   bg-white px-2 py-2"
            style={{ borderRadius: "8px" }}
          >
            <p className="text-black display-6">{challange?.levelType}</p>
          </div>
        </div>
      </div>

      <div
        className="bg-white d-flex justify-content-between align-items-center p-3 shadow-sm"
        style={{
          borderRadius: "20px",
          paddingLeft: "70px",
          paddingRight: "20px",
        }}
      >
        <div className="text-dark ">
          <h4
            className="mb-0 display-5"
            style={{
              borderRadius: "20px",
              paddingLeft: "90px",
            }}
          >
            Overview
          </h4>
        </div>
        <div
          className="d-flex"
          style={{
            borderRadius: "20px",
            paddingRight: "100px",
          }}
        >
          <button
            className="btn btn-success me-3 btn-lg"
            onClick={() => handleParticipate(challange)}
          >
            Edit
          </button>
          <button className="btn btn-outline-danger btn-lg">Delete</button>
        </div>
      </div>

      <p className="display-4" style={{ fontSize: "10px" }}>
        Butterflies are the adult flying stage of certain insects belonging to
        an order or group called Lepidoptera. The word "Lepidoptera" means
        "scaly wings" in Greek. This name perfectly suits the insects in this
        group because their wings are covered with thousands of tiny scales
        overlapping in rows.
      </p>

      <p>
        An agency of the Governmental Wildlife Conservation is planning to
        implement an automated system based on computer vision so that it can
        identify butterflies based on captured images. As a consultant for this
        project, you are responsible for developing an efficient model.
      </p>

      <p>
        Your task is to build an Image Classification Model using CNN that
        classifies to which class of weather each image belongs to.
      </p>
    </div>
  );
}

export default ParticipatePage;

