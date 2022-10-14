const GOOGLE_API_KEY = "";

const getMapPreview = (lat: string, lng: string) => {
	const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200&maptype=roadmap
  &markers=color:red%7Clabel:S%7C${lat},${lng}
  &key=${GOOGLE_API_KEY}`;
	return imagePreviewUrl;
};
