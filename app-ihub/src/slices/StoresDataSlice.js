import { createSlice } from "@reduxjs/toolkit";


const storeDataSlice = createSlice({
      name: "storeData",
      initialState: {
            storeData: null,
      },

      reducers: {
            setStoreData: (state, action) => {
                  return {
                        ...state,
                        storeData: action.payload,
                  };
            },
            clearStoreData: (state, action) => {
                  return {
                        ...state,
                        storeData: null,
                  };
            }
      }
})


export const { setStoreData, clearStoreData } = storeDataSlice.actions;
export default storeDataSlice.reducer;