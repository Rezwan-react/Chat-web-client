import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { chatServices } from "../../services/api";

// ============================ fetchConversations part start
export const fetchConversations = createAsyncThunk(
    "/chat/conversationlist",
    async () => {
        try {
            const res = await chatServices.ConversationList();
            return res;
        } catch (error) {
            return Promise.reject(error);
        }
    }
);
// ======================== fetchMessages part start
export const fetchMessages = createAsyncThunk(
    "/chat/getmessage",
    async (conversationID) => {
        try {
            const res = await chatServices.getMessages(conversationID);
            return res;
        } catch (error) {
            return Promise.reject(error);
        }
    }
);
// ======================== sendMessage part start
export const sendMessage = createAsyncThunk(
    "/chat/send",
    async (data) => {
        try {
            const res = await chatServices.sendmessage(data);
            return res;
        } catch (error) {
            return Promise.reject(error);
        }
    }
);

const conversationSlice = createSlice({
    name: "conversation",
    initialState: {
        conversation: [],
        status: "active",
        selectedConversation: null,
        messages: [],
        error: null,
    },
    reducers: {
        selectConversation: (state, actions) => {
            state.selectedConversation = actions.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchConversations.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchConversations.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.conversation = action.payload;
            })
            .addCase(fetchConversations.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error;
            })
            .addCase(fetchMessages.fulfilled, (state, action) => {
                state.messages = action.payload;
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.messages.push(action.payload);
            })
    },
});

export const { selectConversation } = conversationSlice.actions;
export default conversationSlice.reducer;