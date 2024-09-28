import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userslice";

const appstore=configureStore({
    reducer:{
        user:userReducer,

    }
})
export default appstore