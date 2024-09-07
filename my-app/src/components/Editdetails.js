import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addChallenge, updateChallenge } from "./Redux/challangeSlice";

function Editdetails() {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    id: "",
    challengeName: "",
    startDate: "",
    endDate: "",
    description: "",
    levelType: "easy",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Update time status whenever startDate or endDate changes
    if (name === "startDate" || name === "endDate") {
      const status = calculateTimeStatus(formData.startDate, formData.endDate);
      // Time status is calculated but not displayed in the UI
    }
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const calculateTimeStatus = (startDate, endDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > now) {
      const diffInMs = start - now;
      const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
      const days = Math.floor(diffInHours / 24);
      const hours = diffInHours % 24;

      return {
        status: "starts",
        days,
        hours,
      };
    } else if (end > now) {
      const diffInMs = end - now;
      const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
      const days = Math.floor(diffInHours / 24);
      const hours = diffInHours % 24;

      return {
        status: "ends in",
        days,
        hours,
      };
    } else {
      return {
        status: "Ended",
        endDate: end.toDateString(),
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make sure to update timeStatus
    const status = calculateTimeStatus(formData.startDate, formData.endDate);
    const dataWithTimeStatus = {
      ...formData,
      timeStatus:status, // Time status is still included in the data
    };

    if (formData.id) {
      dispatch(updateChallenge(dataWithTimeStatus));
      console.log("datatimewithstatus",dataWithTimeStatus);

    } else {
      dispatch(addChallenge(dataWithTimeStatus));
      console.log("datatimewithstatus",dataWithTimeStatus);

    }

    setFormData({
      challengeName: "",
      startDate: "",
      endDate: "",
      description: "",
      levelType: "easy",
      image: null,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  };

  return (
    <div>
      <div className="container bg-light p-5 rounded shadow-sm">
        <h2 className="text-center mb-4">Challenge Details</h2>

        <form onSubmit={handleSubmit}>
          {/* Challenge Name */}
          <div className="mb-3">
            <label htmlFor="challengeName" className="form-label">
              Challenge Name
            </label>
            <input
              type="text"
              className="form-control"
              id="challengeName"
              name="challengeName"
              value={formData.challengeName}
              onChange={handleChange}
            />
          </div>

          {/* Start and End Date */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="startDate" className="form-label">
                Start Date
              </label>
              <input
                type="date"
                className="form-control"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="endDate" className="form-label">
                End Date
              </label>
              <input
                type="date"
                className="form-control"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Change Image */}
          <div className="mb-3">
            <label htmlFor="imageUpload" className="form-label">
              Change Image
            </label>
            <input
              type="file"
              className="form-control"
              id="imageUpload"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </div>

          {/* Level Type */}
          <div className="mb-4">
            <label htmlFor="levelType" className="form-label">
              Level Type
            </label>
            <select
              className="form-select"
              id="levelType"
              name="levelType"
              value={formData.levelType}
              onChange={handleChange}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          {/* Save Changes Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-success btn-lg">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Editdetails;
