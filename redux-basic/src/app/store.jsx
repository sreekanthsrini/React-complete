import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/Userslice";  // ✅ Correct default import




 const store=configureStore({
    reducer:{
        // userdefine name usersinfo
        usersInfo: userReducer,
    }
 })
 export default store;