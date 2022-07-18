import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Users/Card";
import axios from "axios";
export default function Home() {
	const [data, setData] = useState([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			await axios("https://reqres.in/api/users?page=1")
				.then((res) => {
					console.log(res.data.data);
					setData(res.data.data);
					setIsLoading(false);
				})
				.catch((err) => {
					setError(err.message);
					setIsLoading(false);
				});
		};
		fetchData();
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Error</div>;
	}

	return (
		<div>
			<Navbar />
			<div className="container flex flex-row flex-wrap justify-center items-center mx-auto px-4 mt-16">
				{data.map((user: any) => (
					<Link to={`/${user.id}/${user.first_name}`} key={user.id}>
						<Card {...user} />
					</Link>
				))}
			</div>
		</div>
	);
}
