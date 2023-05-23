import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedConversation: null,
};

const messageSlice = createSlice({
  name: "selectedConversation",
  initialState,
  reducers: {
    setSelectedConversation: (state, action) => {
      state.selectedConversation = action.payload;
    },
    updateSelectedMessage: (state, action) => {
      state.selectedConversation = {
        ...state.selectedConversation,
        chats: [...state.selectedConversation.chats, action.payload],
      };
    },
    dropSelectedMessage: (state, action) => {
      state.selectedConversation = null;
    },
  },
});

export const { setSelectedConversation,updateSelectedMessage,dropSelectedMessage } = messageSlice.actions;
export default messageSlice.reducer;
