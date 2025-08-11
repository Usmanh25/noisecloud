const API_BASE_URL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3000';
export default API_BASE_URL;
