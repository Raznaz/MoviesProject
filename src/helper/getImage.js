export const IMAGE_URL = process.env.REACT_APP_API_IMAGE_URL;

export const getImage = (imagePath) => {
	return `${IMAGE_URL}${imagePath}`;
};
