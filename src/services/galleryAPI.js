import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '35186307-ee5a96d64e84a4118a963f69c';

const fetchImages = async (value, page = 1) => {
  const searchParam = new URLSearchParams({
    q: value,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    safesearch: true,
  });

  const response = await axios.get(`/?${searchParam}`);

  return response.data;
};

const api = {
  fetchImages,
};

export default api;
