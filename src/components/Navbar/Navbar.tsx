import React, { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
	const [active, setActive] = useState(false);

	const handleClick = (id: number) => {
		id ? setActive(true) : setActive(false);
	};

	return (
		<nav className="bg-white border-gray-200 px-2 md:px-4 py-2.5 ">
			<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
				<a href="https://flowbite.com" className="flex items-center">
					<Logo />
				</a>
				<div className="flex items-center md:order-2">
					<a
						href="/login"
						className="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2  cus:ring-gray-800"
					>
						Sign in
					</a>
					<a
						href="/register"
						className="text-white bg-[#1E6DEB] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none "
					>
						Sign up
					</a>
				</div>
				<div className="hidden justify-between items-center w-full text-sm md:flex md:w-auto md:order-1">
					<ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
						<li>
							<a
								href="/"
								className="block py-2 pr-4 pl-3 text-[#1E6DEB] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#1E6DEB] md:p-0"
							>
								Home
							</a>
						</li>

						<li>
							<a
								href="/"
								className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#1E6DEB] md:p-0"
							>
								Team
							</a>
						</li>
						<li>
							<a
								href="/"
								className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#1E6DEB] md:p-0"
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
