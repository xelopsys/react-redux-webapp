import { createSlice } from "@reduxjs/toolkit";

interface UserState {
	user: any;
}

const userSlice = createSlice({
	name: "user",
	initialState: {
		user: localStorage.getItem("token") || null,
	} as UserState,
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = "";
		},
	},
});

export const { login, logout } = userSlice.actions;

export const setUser = (state: any) => state.user.user;

export default userSlice.reducer;
