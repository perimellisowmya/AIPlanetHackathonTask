import React from "react";

const Hackathons = ({ hackathons }) => {
  const calculateTimeStatus = (startDate, endDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > now) {
      return { status: "upcoming" };
    } else if (end > now) {
      return { status: "active" };
    } else {
      return { status: "past" };
    }
  };

  return (
    <div className="hackathon-list">
      {hackathons.map((hackathon) => {
        const timeStatus = calculateTimeStatus(
          hackathon.startDate,
          hackathon.endDate
        );

        return (
          <div
            key={hackathon.id}
            className={`hackathon-card ${timeStatus.status} p-3 mb-3 border`}
          >
            <h3>{hackathon.challengeName}</h3>
            <p>{hackathon.description}</p>
            <p>
              Status: <strong>{timeStatus.status}</strong>
            </p>
            <p>Start Date: {hackathon.startDate}</p>
            <p>End Date: {hackathon.endDate}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Hackathons;
