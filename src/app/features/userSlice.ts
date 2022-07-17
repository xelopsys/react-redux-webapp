import { createSlice } from "@reduxjs/toolkit";

interface UserState {
	user: any;
}

// The initial state of the user slice of the store. This is the state that will be used when the store is initialized.
const userSlice = createSlice({
	name: "user",
	initialState: {
		user: localStorage.getItem("token") || null,
	} as UserState,
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		register: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = localStorage.removeItem("token");
		},
	},
});

export const { login, logout, register } = userSlice.actions;

export const setUser = (state: any) => state.user.user;

export default userSlice.reducer;
