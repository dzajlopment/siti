export interface Report {
	readonly _id: String;
	title: String;
	description?: String;
	date: string;
	image: string;
	severity: string;
	lat: number;
	lng: number;
	__v: Number;
}
