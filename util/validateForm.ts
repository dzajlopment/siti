const isEmpty = (string: string | undefined): boolean => {
	if (string) {
		return string.trim().length === 0;
	}
	return true;
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
		!isEmpty(location?.lng?.toString()) &&
		!isEmpty(location?.lat?.toString())
	);
};
