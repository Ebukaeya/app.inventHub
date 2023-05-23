import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage"; // <-- this is the localStorage engine
import { encryptTransform } from "redux-persist-transform-encrypt";
import cartItemReducer from "../slices/cartSlice.js";
import profileReducer from "../slices/profileSlice.js";
import storeDataReducer from "../slices/StoresDataSlice.js";
import selectedConversationReducer from "../slices/messageSlice.js";

const reducers = combineReducers({
  cart: cartItemReducer,
  profile: profileReducer,
  storeData: storeDataReducer,
  selectedConversation: selectedConversationReducer,
});

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
