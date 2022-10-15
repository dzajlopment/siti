const GOOGLE_API_KEY = "AIzaSyDHcuZNh3AbiaiF5RXN2_OctL3XHVA9hVA";

export const getMapPreview = (lat: number, lng: number) => {
	const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200&maptype=roadmap
  &markers=color:red%7Clabel:S%7C${lat},${lng}
  &key=${GOOGLE_API_KEY}`;
	return imagePreviewUrl;
};
