import axios from 'axios';
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  params: {
    maxResults: 50,
  },
    headers: {
      'X-RapidAPI-Key': "cafceb3347msh8af6b3f5030f6f3p176f65jsnb0f6dd58b988",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };


  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };


