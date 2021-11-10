export const IMAGE_URL = process.env.REACT_APP_API_IMAGE_URL;

export const getImage = (imagePath, noPhotoImg) => {
	if (!imagePath) {
		return `${noPhotoImg}`;
	}
	return `${IMAGE_URL}${imagePath}`;
};
