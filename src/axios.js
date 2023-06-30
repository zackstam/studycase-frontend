import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json'
  }
})
instance.interceptors.request.use( (config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers = { "Authorization" : `Bearer ${token}`}
  }
  return config
});
export default instance