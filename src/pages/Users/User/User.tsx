import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../components/Navbar/Navbar";

export default function User() {
	const { id } = useParams();
	const [user, setUser] = useState<any>({});

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
						<button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Edit Profile
						</button>
						<a
							href="/"
							className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
						>
							Message
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
