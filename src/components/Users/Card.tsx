import React from "react";

export default function Card(props: any) {
	return (
		<div className="py-3 px-3 sm:py-4 w-[80vw] md:w-[60vw] lg:w-[30vw] xl:w-[30vw] 2xl:w-[20vw] m-3 border rounded-xl shadow-md hover:bg-gray-100 hover:shadow-lg">
			<div className="flex items-center space-x-4">
				<div className="flex-shrink-0">
					<img
						className="w-16 h-16 rounded-full"
						src={props.avatar}
						alt="avatar"
					/>
				</div>
				<div className="flex-1 min-w-0">
					<p className="text-xl font-medium text-gray-900 truncate">
						{props.first_name} {props.last_name}
					</p>
					<p className="text-sm text-gray-500 truncate dark:text-gray-400">
						{props.email}
					</p>
				</div>
			</div>
		</div>
	);
}
