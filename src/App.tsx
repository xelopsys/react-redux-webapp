import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useSelector } from "react-redux";
import { setUser } from "./app/features/userSlice";

export default function App() {
	// const token = useSelector(setUser);
	// console.log("user: ", isLoggedIn);
	const user = useSelector(setUser);
	console.log(user ? "user: " : "no user");
	// const currentUser = localStorage.getItem("currentUser");
	const RequireAuth = ({ children }: { children: ReactElement<any, any> }) => {
		return user ? children : <Navigate to="/login" />;
	};

	// const LoggedIn = ({ children }: { children: ReactElement<any, any> }) => {
	// 	return user ? <Navigate to="/" /> : <Navigate to="/login" />;
	// };

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route path="register" element={<Register />} />
						<Route
							index
							element={
								<RequireAuth>
									<Home />
								</RequireAuth>
							}
						/>
						<Route
							path="login"
							element={user ? <Navigate to="/" /> : <Login />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
