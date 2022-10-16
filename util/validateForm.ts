export default ({
	image,
	location,
	severity,
	title,
}: {
	image?: string;
	location?: { lat: number; lng: number };
	severity?: string;
	title?: string;
}) => {
	return (
		image?.length !== 0 &&
		severity?.length !== 0 &&
		title?.length !== 0 &&
		location?.lat !== null &&
		location?.lng !== null
	);
};
