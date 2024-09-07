



import React,{useState} from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ExploreChallenges = () => {
  const navigate = useNavigate();
  const challanges = useSelector((state) => state.challange || []);
  console.log(challanges)


 const [filter, setFilter] = useState({ status: "all", level: "all" });



 const handleFilterChange = (e) => {
   const { name, value } = e.target;
   setFilter((prev) => ({ ...prev, [name]: value }));
   console.log("Filter Updated:", filter); // Debugging: Check if filter is updating correctly
 };

 const filteredChallenges = challanges.filter((challenge) => {
   const statusMatches =
     filter.status === "all" ||
     (filter.status === "starts" && challenge.timeStatus.status === "starts") ||
     (filter.status === "ends in" &&
       challenge.timeStatus.status === "ends in") ||
     (filter.status === "Ended" && challenge.timeStatus.status === "Ended");

   const levelMatches =
     filter.level === "all" || challenge.level === filter.level;

   // Debugging: Check if the challenge matches both filters
   console.log(
     `Challenge: ${challenge.challengeName}, Status Matches: ${statusMatches}, Level Matches: ${levelMatches}`
   );

   return statusMatches && levelMatches;
 });
  
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
            onChange={handleFilterChange}
            style={{
              width: "150px",
              fontSize: "1rem",
              padding: "10px",
              borderRadius: "8px",

            }}
          >
            <option value="">Filter</option>
            <h5>Satus</h5>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
            <h5>Level</h5>
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
          {filteredChallenges.length > 0 ? (
            filteredChallenges.map((challenge, index) => (
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
                    {/* Card Title */}
                    <Card.Title
                      style={{
                        fontSize: "2rem",
                        marginTop: "20px", // Very large font size for the title
                      }}
                    >
                      {challenge.challengeName}
                    </Card.Title>
                    <Card.Text>
                      {challenge.timeStatus && (
                        <>
                          {challenge.timeStatus.status === "starts" && (
                            <div>
                              {/* Time format title */}
                              <h4>Upcoming</h4>
                              <p
                                style={{
                                  fontSize: "2rem",
                                  marginBottom: "20px",
                                }}
                              >
                                <h4>Starts in:</h4>
                                {challenge.timeStatus.days} days{" "}
                                {challenge.timeStatus.hours} hours
                              </p>
                            </div>
                          )}

                          {challenge.timeStatus.status === "ends in" && (
                            <div>
                              <h4>Active</h4>
                              <p style={{ fontSize: "2rem" }}>
                                <h4>Ends in:</h4>
                                {challenge.timeStatus.days} days{" "}
                                {challenge.timeStatus.hours} hours
                              </p>
                            </div>
                          )}

                          {challenge.timeStatus.status === "Ended" && (
                            <div>
                              <h4>Past</h4>
                              <p
                                style={{
                                  fontSize: "2rem",
                                  marginBottom: "25px",
                                }}
                              >
                                <h4>Ended on:</h4>
                                {challenge.timeStatus.endDate}
                              </p>
                            </div>
                          )}
                        </>
                      )}
                    </Card.Text>
                    {/* Participate Button */}
                    <Button
                      variant="success"
                      onClick={() => handleParticipate(challenge)}
                      style={{
                        fontSize: "2rem", // Bigger font size for button text
                        padding: "10px",
                        marginBottom: "20px",
                        alignItems: "center", // Align tick icon with text
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          marginRight: "8px",
                          display: "inline-block",
                          width: "1rem",
                          height: "1rem",
                          backgroundColor: "white",
                          maskImage:
                            "url('https://image.flaticon.com/icons/svg/190/190411.svg')",
                          maskSize: "contain",
                        }}
                      ></span>
                      Participate Now
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
