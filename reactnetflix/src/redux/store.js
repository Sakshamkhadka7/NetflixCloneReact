import { configureStore} from "@reduxjs/toolkit";
import useReducer from "./UserSlice";

const store=configureStore({
    reducer:{
        app:useReducer
    }
});

export default store;