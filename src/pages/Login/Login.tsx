import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../app/features/userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const naigate = useNavigate();
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		console.log("email: ", email);
		console.log("password: ", password);
	}, [email, password]);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		console.log("Login");
		await axios
			.post("https://reqres.in/api/login", {
				email,
				password,
			})
			.then((res) => {
				console.log("res: ", res);

				console.log("res.data.token: ", res.data.token);
				localStorage.setItem("token", res.data.token);
				const token = localStorage.getItem("token");
				dispatch(
					login({
						token: token,
					})
				);
				naigate("/");
				console.log("currentUser: ", localStorage.getItem("currentUser"));
				setError("");
				setLoading(false);
			})
			.catch((err) => {
				console.log("err: ", err);
				setError(err.response.data.error);
				setLoading(false);
			});
	};

	return (
		<div>
			{error && <p>{error}</p>}
			{loading && <p>Loading...</p>}
			<h1>Login</h1>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
				/>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}
