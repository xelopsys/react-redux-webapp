import { useState, useEffect } from "react";

//Simple hook to fetch data from an API
export const useFetch = (url: string, options: RequestInit = {}) => {
	const [data, setData] = useState<any>();
	const [error, setError] = useState<any>();
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url, options);
				const json = await response.json();
				setData(json);
				setIsLoading(false);
			} catch (error) {
				setError(error);
				setIsLoading(false);
			}
		};
		fetchData();
	}, [url, options]);
	return { data, error, isLoading };
};
