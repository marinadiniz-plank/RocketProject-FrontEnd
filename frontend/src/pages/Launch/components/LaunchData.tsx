export type Data = {
	id: number;
	launchCode: number;
	date: string;
	success: boolean;
	rocket: {
		id: number;
		name: string;
	};
	crew: {
		id: number;
		name: string;
		crewman: {
			id: number;
			name: string;
			patent: string;
		}[];
	};
};
