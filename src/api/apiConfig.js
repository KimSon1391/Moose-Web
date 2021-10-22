import { API_KEY, URL, LARGE_IMAGE, SMALL_IMAGE } from '../constant';

const apiConfig = {
  baseUrl: URL,
  api_key: API_KEY,
  largeImage: (imgPath) => `${LARGE_IMAGE}/${imgPath}`,
  smallImage: (imgPath) => `${SMALL_IMAGE}/${imgPath}`,
};

export default apiConfig;
