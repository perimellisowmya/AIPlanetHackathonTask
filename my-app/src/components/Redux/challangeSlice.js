


//   // const initialState = {
//   //   challengeName: "",
//   //   startDate: "",
//   //   endDate: "",
//   //   description: "",
//   //   levelType: "",
//   //   image: null,
//   //   timeStatus: { status: "", days: 0, hours: 0, endDate: "" }, // Include time status
//   // };

//   const initialState = [];


//   const challangeSlice = createSlice({
//     name: "challange",
//     initialState,
//     reducers: {
//       setChallangedetails: (state, action) => {
//         // return { ...state, ...action.payload };
//          state.push(action.payload);
//       },
//     },
//   });

// export const { setChallangedetails } = challangeSlice.actions;
// export default challangeSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

// const challangeSlice = createSlice({
//   name: "challange",
//   initialState,
//   reducers: {
//     setChallangedetails: (state, action) => {
//       const index = state.findIndex(
//         // (challange) => challange.challengeName === action.payload.challengeName
//         (challange) => challange.id === action.payload.id
//       );

//       if (index !== -1) {
//         state[index] = action.payload; // Update existing challenge
//       } else {
//         state.push(action.payload); // Add new challenge if it doesn't exist
//       }
//     },
//   },
// });

// export const { setChallangedetails } = challangeSlice.actions;
// export default challangeSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"; // Import UUID function

const initialState = [];

const challangeSlice = createSlice({
  name: "challange",
  initialState,
  reducers: {
    addChallenge: (state, action) => {
      const challengeWithId = { ...action.payload, id: uuidv4() }; // Add ID to challenge
      state.push(challengeWithId);
    },
    updateChallenge: (state, action) => {
      const { id, ...updatedData } = action.payload;
      const index = state.findIndex((challange) => challange.id === id);

      if (index !== -1) {
        state[index] = { ...state[index], ...updatedData }; // Update existing challenge
      }
    },
  },
});

export const { addChallenge, updateChallenge } = challangeSlice.actions;
export default challangeSlice.reducer;





