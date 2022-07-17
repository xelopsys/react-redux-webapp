import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

export default function User() {
	const { id } = useParams();
	const [user, setUser] = useState<any>({});
	const [isEditing, setIsEditing] = useState(false);
	const [editedName, setEditedName] = useState("");
	const [editedEmail, setEditedEmail] = useState("");
	const inputValue = useRef<any>("");

	const handleEdit = () => {
		setIsEditing(!isEditing);
	};

	//focusing on input field
	useEffect(() => {
		if (isEditing) {
			inputValue.current.focus();
		}
	}, [isEditing]);

	//Updating user data within axios.patch and updating the state with the new data
	const handleUpdate = async () => {
		await axios
			.patch(`https://reqres.in/api/users/${id}`, {
				id: id,
				first_name: editedName.split(" ")[0],
				last_name: editedName.split(" ")[1],
				email: editedEmail,
			})
			.then((res) => {
				setUser((prevValues: any) => {
					return {
						id: prevValues.id,
						avatar: prevValues.avatar,
						email: res.data.email,
						first_name: res.data.first_name,
						last_name: res.data.last_name,
					};
				});
			})
			.catch((err) => {
				console.log(err.message);
			});

		setEditedEmail("");
		setEditedName("");
		setIsEditing(false);
	};

	//Fetching user data from axios.get with specific id and updating the state with the new data
	useEffect(() => {
		const findUser = async () => {
			await axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
				setUser(res.data.data);
			});
		};

		findUser();
	}, [id]);

	return (
		<div>
			<Navbar />

			{isEditing ? (
				<div className="w-full mt-24 flex flex-col justify-center items-center ">
					<div className="w-[80vw] md:w-[40vw] lg:w-[30vw] xl:w-[30vw] 2xl:w-[40vw] border rounded-xl shadow-md flex flex-col items-center pb-10">
						<img
							className="mb-3 mt-4 w-24 h-24 rounded-full shadow-lg"
							src={user.avatar}
							alt="avatar"
						/>

						<input
							className="w-60% h-auto py-2 px-3 text-md"
							placeholder="Enter your full name"
							ref={inputValue}
							value={editedName}
							required
							onChange={(e) => {
								setEditedName(e.target.value);
							}}
						/>
						<input
							className="w-60% h-auto py-2 px-3 text-md mt-3"
							placeholder="Enter your email"
							value={editedEmail}
							onChange={(e) => {
								setEditedEmail(e.target.value);
							}}
						/>

						<div className="flex mt-4 space-x-3 lg:mt-6">
							<button
								className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4"
								onClick={handleUpdate}
							>
								Update Profile
							</button>
							<button
								className="inline-flex items-center py-3 px-6 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none "
								onClick={handleEdit}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className="w-full mt-24 flex flex-col justify-center items-center ">
					<div className="w-[80vw] md:w-[40vw] lg:w-[30vw] xl:w-[30vw] 2xl:w-[40vw] border rounded-xl shadow-md flex flex-col items-center pb-10">
						<img
							className="mb-3 mt-4 w-24 h-24 rounded-full shadow-lg"
							src={user.avatar}
							alt="avatar"
						/>
						<h5 className="mb-1 text-xl font-medium text-gray-900 ">
							{user.first_name} {user.last_name}
						</h5>
						<span className="text-sm text-gray-500 dark:text-gray-400">
							{user.email}
						</span>
						<div className="flex mt-4 space-x-3 lg:mt-6">
							<button
								className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								onClick={handleEdit}
							>
								Edit Profile
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
