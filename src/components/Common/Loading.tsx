import { useEffect, useState } from "react";
import "../../assets/CSS/table.css";

export function Loading() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsLoading(false);
		}, 3);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<img
			className="loading"
			src="https://www.gifcen.com/wp-content/uploads/2022/04/among-us-gif-1.gif"
			alt="Among Us GIF"
		/>
	);
}
