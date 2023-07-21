import axios from 'axios';
import { links } from '../redux/slices/links';

const refresh_URL = links.REFRESH_URL;

const refreshToken = async () => {
  try {
    const refresh_token = localStorage.getItem('refresh_token')?.replace(/"/g, '');
    const response = await axios.post(refresh_URL, { refresh: refresh_token });
    const { access } = response.data;
    localStorage.setItem('access_token', access);
    return access;
  } catch (error) {
    throw error;
  }
};

export const createAuthorizedRequest = async (config) => {
  const access_token = localStorage.getItem('access_token')?.replace(/"/g, '');
  if (config.headers) {
    config.headers.Authorization = `Bearer ${access_token}`;
  } else {
    config.headers = { Authorization: `Bearer ${access_token}` };
  }
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      const new_access_token = await refreshToken();
      config.headers.Authorization = `Bearer ${new_access_token}`;
      return await axios(config);
    }
    throw error;
  }
};
