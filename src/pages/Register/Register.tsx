import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../app/features/userSlice";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
	const naigate = useNavigate();
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	//Submitting the form data to the server and storing the response in the local storage
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		await axios
			.post("https://reqres.in/api/register", {
				email,
				password,
			})
			.then((res) => {
				localStorage.setItem("token", res.data.token);
				localStorage.setItem("id", res.data.id);
				const token = localStorage.getItem("token");
				const id = localStorage.getItem("id");
				dispatch(
					register({
						id: id,
						token: token,
					})
				);
				naigate("/");
				setError("");
				setLoading(false);
			})
			.catch((err) => {
				setError(err.response.data.error);
				setLoading(false);
			});
		setEmail("");
		setPassword("");
	};

	return (
		<div className="w-full h-[100vh] flex flex-col justify-center items-center">
			{loading && <p>Loading...</p>}
			<h1 className="text-4xl">Sign up</h1>
			<form
				onSubmit={(e) => handleSubmit(e)}
				className="w-[70vw] md:w-[30vw] lg:w-[30vw] xl:w-[20vw] 2xl:w-[20vw]"
			>
				<label
					htmlFor="input-group-1"
					className="block mb-2 text-sm font-medium text-gray-900 "
				>
					Your Email
				</label>
				<div className="relative mb-6">
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-gray-500 "
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
					</div>
					<input
						type="text"
						id="input-group-1"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
						placeholder="example@gmail.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<label
					htmlFor="website-admin"
					className="block mb-2 text-sm font-medium text-gray-900"
				>
					Password
				</label>
				<div className="flex">
					<input
						type="password"
						id="website-admin"
						className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
						placeholder="********"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				{error && (
					<p className="my-3 text-red-400">{error}. Please try again.</p>
				)}

				<button
					type="submit"
					className=" mt-8   rounded-lg bg-blue-500 hover:bg-blue-400 border text-white block flex-1 min-w-0 w-full text-md p-2.5  "
				>
					Sign up
				</button>
				<div className="w-full h-auto flex flex-row justify-between items-center">
					<Link to="/">
						<p className="text-left text-sm w-full my-4 hover:text-blue-500">
							Home page {"->"}
						</p>
					</Link>
					<Link to="/login">
						<p className="text-left text-sm w-full my-4 text-blue-600 hover:text-blue-500">
							Sign in.
						</p>
					</Link>
				</div>
			</form>
		</div>
	);
}
