import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useSelector } from "react-redux";
import { setUser } from "./app/features/userSlice";
import User from "./pages/User/User";
import Profile from "./pages/Profile/Profile";
import Error from "./pages/Error/Error";

export default function App() {
	const user = useSelector(setUser);

	//This will require a login to access the page if the user is not logged in yet, otherwise it will redirect to the user page
	const RequireAuth = ({ children }: { children: ReactElement<any, any> }) => {
		return user ? children : <Navigate to="/login" />;
	};

	return (
		<div>
			{/* Routing to all elements with React-router-dom */}
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route path=":id">
							<Route path=":name" element={<User />} />
						</Route>
						<Route index element={<Home />} />
						<Route path="register" element={<Register />} />
						<Route path="login" element={<Login />} />

						{/* And profile page will be seen only after successfully authentication,
						 otherwise you will be asked to authenticate in order to access*/}
						<Route
							path="profile"
							element={
								<RequireAuth>
									<Profile />
								</RequireAuth>
							}
						/>
					</Route>
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
