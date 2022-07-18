import { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
//Simple hook to fetch data from an API
export const useFetch = async (
	url: string,
	options: AxiosRequestConfig<any> = {}
) => {
	const [data, setData] = useState<any>();
	const [error, setError] = useState<any>();
	const [isLoading, setIsLoading] = useState(true);

	await axios(url, options)
		.then((res) => {
			setData(res.data);
			setIsLoading(false);
		})
		.catch((err) => {
			setError(err);
			setIsLoading(false);
		});

	return { data, error, isLoading };
};
