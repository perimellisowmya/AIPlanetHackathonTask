import {configureStore} from '@reduxjs/toolkit'
import challangeReducer from './challangeSlice'
 
const store = configureStore({
  reducer: {
    challange: challangeReducer,
  },
});
export default store