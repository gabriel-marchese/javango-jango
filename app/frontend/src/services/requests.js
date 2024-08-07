import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001/`,
  //https://javangojango-api.onrender.com/
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const newUser = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
}

export const newMusic = async (endpoint, formData) => {
  const { data } = await api.post(endpoint, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export default api;
