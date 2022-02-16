import { useState, useEffect } from 'react';

export const useEndpoint = (url) => {
	const [res, setRes] = useState({
		data: null,
		pending: false,
		completed: false,
		error: false,
	});

	useEffect(() => {
		setRes({
			data: null,
			pending: true,
			completed: false,
			error: false,
		});
		fetch(url)
			.then((response) => response.json())
			.then((data) =>
				setRes({
					data,
					pending: false,
					error: false,
					complete: true
				}),
			)
			.catch(() =>
				setRes({
					data: null,
					pending: false,
					error: true,
					complete: true
				}),
			);
	}, [url]);
	console.log(res)
	return res;
}