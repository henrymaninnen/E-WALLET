import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "../components/cardsSlice";

const store = configureStore({
    reducer: {
        user: cardsSlice
    }
})

export default store;