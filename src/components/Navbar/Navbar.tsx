import React from "react";
import Logo from "./Logo/Logo";
import { NavLink } from "react-router-dom";

export default function Navbar() {
	const pages = [
		{
			id: 1,
			name: "Home",
			path: "/",
		},
		{
			id: 2,
			name: "Profile",
			path: "/profile",
		},
	];
	return (
		<nav className="bg-white border-gray-200 px-2 md:px-4 py-2.5 ">
			<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
				<a href="https://novalabtech.com/" className="flex items-center">
					<Logo />
				</a>
				<div className="flex items-center md:order-2">
					<NavLink
						to="/login"
						className="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2  cus:ring-gray-800"
					>
						Sign in
					</NavLink>
					<NavLink
						to="/register"
						className="text-white bg-[#1E6DEB] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none "
					>
						Sign up
					</NavLink>
				</div>
				<div className="hidden justify-between items-center w-full text-sm md:flex md:w-auto md:order-1">
					<ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
						{pages.map((page: any) => (
							<li key={page.id}>
								<NavLink
									to={page.path}
									className={({ isActive }) =>
										isActive ? `text-[#1E6DEB]` : `inherit`
									}
								>
									<p
										className={`block hover:bg-gray-50 md:hover:bg-transparent hover:text-[#1E6DEB] `}
									>
										{page.name}
									</p>
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
