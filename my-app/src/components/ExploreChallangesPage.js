// import React from "react";
// import { Card, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// const ExploreChallenges = () => {

//   const navigate=useNavigate()
//   // const challanges = useSelector((state) => state.challange);

//   const challanges = useSelector((state) => state.challange || []);
//   console.log(challanges); // Check if this is an array


//   const handleParticipate = (challange) => {
//     navigate(`/participate/${challange.challengeName}`, { state: challange });
//     console.log(challange)
//   };

//   return (
//     <div>
//       <div
//         className="container-fluid my-5"
//         style={{
//           backgroundColor: "#002A3B",
//           minHeight: "400px",
//         }}
//       >
//         <div className="text-center">
//           <h2 className="text-white" style={{ padding: "70px" }}>
//             Explore Challenges
//           </h2>
//         </div>
//         <div className="d-flex justify-content-center mb-4">
//           <input
//             type="text"
//             className="form-control me-2"
//             placeholder="Search Challenges"
//             style={{
//               width: "600px",
//               fontSize: "1.25rem",
//               padding: "0px",
//               borderRadius: "8px",
//             }}
//           />
//           <select
//             className="form-select"
//             style={{
//               width: "150px",
//               fontSize: "1rem",
//               padding: "10px",
//               borderRadius: "8px",
//             }}
//           >
//             <option value="">Filter</option>
//             <p>status</p>
//             <hr></hr>
//             <option value="option1">All</option>
//             <option value="option2">Active</option>
//             <option value="option2">UpComing</option>
//             <option value="option2">Past</option>
//             <p>Level</p>
//             <hr></hr>
//             <option>Easy</option>
//             <option>Medium</option>
//             <option>Hard</option>
//           </select>
//         </div>
//       </div>

//       {/* Cards */}
//       <div
//         className="container-fluid my-5"
//         style={{ backgroundColor: "#003145" }}
//       >
//         <div className="row justify-content-center my-5 g-3">
//           {challanges &&
//             challanges.map((challange, index) => (
//               <div
//                 key={index}
//                 className="col-md-4 d-flex justify-content-center"
//               >
//                 <Card
//                   className="text-center"
//                   style={{ width: "60%", height: "400px" }}
//                 >
//                   {challange.image && (
//                     <Card.Img
//                       variant="top"
//                       src={URL.createObjectURL(challange.image)}
//                       alt="Challenge"
//                       style={{ height: "170px", objectFit: "cover" }}
//                     />
//                   )}
//                   <Card.Body>
//                     <Card.Title>{challange.challengeName}</Card.Title>
//                     <Card.Text>
//                       {challange.timeStatus.status === "starts in" && (
//                         <Card.Text>
//                           Starts in: {challange.timeStatus.days} days{" "}
//                           {challange.timeStatus.hours} hours
//                         </Card.Text>
//                       )}

//                       {challange.timeStatus.status === "ends in" && (
//                         <Card.Text>
//                           Ends in: {challange.timeStatus.days} days{" "}
//                           {challange.timeStatus.hours} hours
//                         </Card.Text>
//                       )}

//                       {challange.timeStatus.status === "ended on" && (
//                         <Card.Text>
//                           Ended on: {challange.timeStatus.endDate}
//                         </Card.Text>
//                       )}
//                     </Card.Text>
//                     <Button
//                       variant="success"
//                       onClick={() => handleParticipate(challange)}
//                     >
//                       Participate now
//                     </Button>
//                   </Card.Body>
//                 </Card>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExploreChallenges;



import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ExploreChallenges = () => {
  const navigate = useNavigate();
  const challanges = useSelector((state) => state.challange || []);
  console.log(challanges)
  
  const handleParticipate = (challenge) => {
    navigate(`/participate/${challenge.challengeName}`, { state: challenge });
    console.log(challenge);
  };

  return (
    <div>
      <div
        className="container-fluid my-5"
        style={{
          backgroundColor: "#002A3B",
          minHeight: "400px",
        }}
      >
        <div className="text-center">
          <h2 className="text-white" style={{ padding: "70px" }}>
            Explore Challenges
          </h2>
        </div>
        <div className="d-flex justify-content-center mb-4">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search Challenges"
            style={{
              width: "600px",
              fontSize: "1.25rem",
              padding: "0px",
              borderRadius: "8px",
            }}
          />
          <select
            className="form-select"
            style={{
              width: "150px",
              fontSize: "1rem",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <option value="">Filter</option>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>

      {/* Cards */}
      <div
        className="container-fluid my-5"
        style={{ backgroundColor: "#003145" }}
      >
        <div className="row justify-content-center my-5 g-3">
          {challanges.length > 0 ? (
            challanges.map((challenge, index) => (
              <div
                key={index}
                className="col-md-4 d-flex justify-content-center"
              >
                <Card
                  className="text-center"
                  style={{ width: "60%", height: "400px" }}
                >
                  {challenge.image && (
                    <Card.Img
                      variant="top"
                      src={URL.createObjectURL(challenge.image)}
                      alt="Challenge"
                      style={{ height: "170px", objectFit: "cover" }}
                    />
                  )}
                  <Card.Body>
                    <Card.Title>{challenge.challengeName}</Card.Title>
                    <Card.Text>
                      {challenge.timeStatus && (
                        <>
                          {challenge.timeStatus.status === "starts in" && (
                            <Card.Text>
                              Starts in: {challenge.timeStatus.days} days{" "}
                              {challenge.timeStatus.hours} hours
                            </Card.Text>
                          )}

                          {challenge.timeStatus.status === "ends in" && (
                            <Card.Text>
                              Ends in: {challenge.timeStatus.days} days{" "}
                              {challenge.timeStatus.hours} hours
                            </Card.Text>
                          )}

                          {challenge.timeStatus.status === "ended on" && (
                            <Card.Text>
                              Ended on:{" "}
                              {challenge.timeStatus.endDate ||
                                "Date not available"}
                            </Card.Text>
                          )}
                        </>
                      )}
                    </Card.Text>
                    <Button
                      variant="success"
                      onClick={() => handleParticipate(challenge)}
                    >
                      Participate now
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <div className="text-center text-white">
              <p>No challenges available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreChallenges;
