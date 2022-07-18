import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // <-- this is the localStorage engine
import { encryptTransform } from "redux-persist-transform-encrypt";
import cartItemReducer from "../slices/cartSlice.js";

const reducers = combineReducers({
  cart: cartItemReducer,
});

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: "process.env.REACT_APP_SECRET_KEY",
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
