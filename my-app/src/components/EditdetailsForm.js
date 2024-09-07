import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { setChallangedetails } from "./Redux/challangeSlice";
import { updateChallenge,addChallenge } from "./Redux/challangeSlice";

function EditdetailsForm() {
  const location = useLocation();
//   const challange=location.state
  const dispatch = useDispatch();
  console.log(location)

  const [formData, setFormData] = useState({
    id: "",
    challengeName: "",
    startDate: "",
    endDate: "",
    description: "",
    levelType: "",
    image: null,
  });

  // Pre-fill formData when the component loads
 const [imagePreview, setImagePreview] = useState(null);

 // Pre-fill formData when the component loads
 useEffect(() => {
   if (location.state) {
     console.log("Received challenge data:", location.state);
     setFormData({
       id: location.state.id || "", // Ensure id is included
       challengeName: location.state.challengeName || "",
       startDate: location.state.startDate || "",
       endDate: location.state.endDate || "",
       description: location.state.description || "",
       levelType: location.state.levelType || "easy",
       image: location.state.image || null,
     });

     // Handle image preview
     if (location.state.image) {
       setImagePreview(URL.createObjectURL(location.state.image));
     }
   }
 }, [location.state]);


 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData({
     ...formData,
     [name]: value,
   });
 };

//  const [updatedChallenge, setUpdatedChallenge] = useState(location.state);

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setUpdatedChallenge({
//     ...updatedChallenge,
//     [name]: value, // Update the respective field in the state
//   });
// };

//  const handleSaveChanges = () => {
//    dispatch(setChallangedetails(updatedChallenge)); // Dispatch updated details
   
//  };

 const handleFileChange = (e) => {
   const file = e.target.files[0];
   setFormData({
     ...formData,
     image: file,
   });

   // Update the image preview
   if (file) {
     setImagePreview(URL.createObjectURL(file));
   }
 };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(setChallangedetails(formData));
  //   console.log(formData)
  //   // You can navigate back to the page or perform any action after saving
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      // Update existing challenge
      dispatch(updateChallenge(formData));
    } else {
      // Add new challenge
      dispatch(addChallenge(formData));
    }
    // navigate("/participate"); // Navigate after saving
  };

  return (
    <div>
      <div className="container bg-light p-5 rounded shadow-sm">
        <h2 className="text-center mb-4">Edit Challenge Details</h2>

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

          {/* Image Display */}
          {imagePreview && (
            <div className="mb-3">
              <div>
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{ maxWidth: "20%" }}
                />
              </div>
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="imageUpload" className="form-label">
              Change Image
            </label>
            <input
              type="file"
              className="form-control width-100px height-100px"
              id="imageUpload"
              onChange={handleFileChange}
              style={{
                maxWidth: "100px",
              }}
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
            <button
              type="submit"
              // onClick={handleSaveChanges}
              className="btn btn-success btn-lg"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditdetailsForm;


