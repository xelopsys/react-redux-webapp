import React, { useState } from "react";
import Logo from "./Logo/Logo";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../app/features/userSlice";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const dispatch = useDispatch();
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

	const handleLogOut = () => {
		dispatch(logout());
	};
	return (
		<nav className="bg-white border-gray-200 px-2 md:px-4 py-2.5 w-full h-auto flex flex-row justify-between items-center">
			<div className="flex flex-nowrap flex-row justify-between items-center">
				<a href="https://novalabtech.com/" className="flex items-center">
					<Logo />
				</a>
				<div className="lg:flex md:flex items-center hidden  md:order-2">
					{!localStorage.getItem("token") ? (
						<React.Fragment>
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
						</React.Fragment>
					) : (
						<button
							className="text-black bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none "
							onClick={handleLogOut}
						>
							Log out
						</button>
					)}
				</div>
				<div className="hidden justify-between items-center w-auto text-sm md:flex md:w-auto md:order-1">
					<ul className=" flex-col space-x-8 flex mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
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
			<div className="lg:hidden md:hidden inline-block order-3">
				<button
					aria-label="Open Menu"
					title="Open Menu"
					className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
					onClick={() => setIsMenuOpen(true)}
				>
					<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
						/>
						<path
							fill="currentColor"
							d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
						/>
						<path
							fill="currentColor"
							d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
						/>
					</svg>
				</button>
				{isMenuOpen && (
					<div className="absolute top-0 left-0 w-full">
						<div className="p-5 bg-white border rounded shadow-sm">
							<div className="flex items-center justify-end mb-4">
								<div>
									<button
										aria-label="Close Menu"
										title="Close Menu"
										className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
										onClick={() => setIsMenuOpen(false)}
									>
										<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
											<path
												fill="currentColor"
												d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
											/>
										</svg>
									</button>
								</div>
							</div>
							<nav>
								<ul className="space-y-4">
									{pages.map((page: any) => (
										<li key={page.id}>
											<NavLink
												to={page.path}
												className={({ isActive }) =>
													isActive ? `text-[#1E6DEB]` : `inherit`
												}
											>
												<p
													className={`block hover:bg-gray-50 p-2 md:hover:bg-transparent hover:text-[#1E6DEB] `}
												>
													{page.name}
												</p>
											</NavLink>
										</li>
									))}
								</ul>
								<div className="flex flex-row items-center justify-start mt-3">
									{!localStorage.getItem("token") ? (
										<React.Fragment>
											<NavLink
												to="/login"
												className="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-2 md:mr-2  cus:ring-gray-800"
											>
												Sign in
											</NavLink>
											<NavLink
												to="/register"
												className="text-white bg-[#1E6DEB] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none "
											>
												Sign up
											</NavLink>
										</React.Fragment>
									) : (
										<button
											className="text-black bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none "
											onClick={handleLogOut}
										>
											Log out
										</button>
									)}
								</div>
							</nav>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
