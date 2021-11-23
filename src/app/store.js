import { configureStore } from "@reduxjs/toolkit";
import cryptoSlice from "../features/crypto/cryptoSlice";
export const store = configureStore({
    reducer: {
        crypto: cryptoSlice
    }
})