import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

const KEY = 'EBXzXNH9WGar-hW45ELePqwSfPBMJWsn6qnvEXuRv1M';

const fetchGalleryPhoto = async (page, query) => {
  const response = await axios.get(
    `/search/photos/
		?client_id=${KEY}
		&per_page=15
		&page=${page}
		&query=${query}`
  );
  return response.data;
};

export default fetchGalleryPhoto;
