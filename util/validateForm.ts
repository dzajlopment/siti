const isEmpty = (string: string | undefined): boolean => {
	return string ? string.trim().length === 0 : false;
};

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
		!isEmpty(image) &&
		!isEmpty(severity) &&
		!isEmpty(title) &&
		!isEmpty(location?.lng.toString()) &&
		!isEmpty(location?.lat.toString())
	);
};
