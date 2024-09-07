import React, { useState } from "react";
import Editdetails from "./Editdetails";
import HackathonList from "./HackathonList";

function ParentComponent() {
  const [hackathons, setHackathons] = useState([]);

  const handleFormSubmit = (newHackathon) => {
    setHackathons((prevHackathons) => {
      const existingHackathonIndex = prevHackathons.findIndex(
        (hack) => hack.id === newHackathon.id
      );
      if (existingHackathonIndex !== -1) {
        // Update existing hackathon
        const updatedHackathons = [...prevHackathons];
        updatedHackathons[existingHackathonIndex] = newHackathon;
        return updatedHackathons;
      }
      // Add new hackathon
      return [...prevHackathons, newHackathon];
    });
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Add or Edit Hackathon</h2>
      <Editdetails onSubmit={handleFormSubmit} />

      <h2 className="mt-5 mb-4">Hackathon List</h2>
      <HackathonList hackathons={hackathons} />
    </div>
  );
}

export default ParentComponent;
