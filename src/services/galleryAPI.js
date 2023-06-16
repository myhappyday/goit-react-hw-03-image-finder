import axios from 'axios';

const API_KEY = '35186307-ee5a96d64e84a4118a963f69c';
const BASE_URL = 'https://pixabay.com/api/';

const fetchImages = async (value, page = 1) => {
  const searchParam = new URLSearchParams({
    q: value,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    // safesearch: true,
  });

  const response = await axios.get(`${BASE_URL}/?${searchParam}`);
  // console.log(response.data);
  if (response.ok) {
    // return response.json();
    return response.data;
  }
  return await Promise.reject(
    new Error(
      `Sorry, there are no images of ${value} matching your search query. Please try again.`
    )
  );
};

const api = {
  fetchImages,
};

export default api;
