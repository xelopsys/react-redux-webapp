import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Users/Card";
import { useFetch } from "../../hooks/useFetch";

export default function Home() {
	const { data, isLoading, error } = useFetch(
		`https://reqres.in/api/users?page=1&per_page=10`,
		{
			method: "GET",
		}
	);

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
				{data.data.map((user: any) => (
					<Link to={`/${user.id}/${user.first_name}`} key={user.id}>
						<Card {...user} />
					</Link>
				))}
			</div>
		</div>
	);
}
