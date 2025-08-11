// user_api_util.js
import API_BASE_URL from './config';

const getAuthHeaders = () => {
  const token = localStorage.getItem('jwtToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const fetchUser = (userId) => (
  $.ajax({
    method: 'GET',
    url: `${API_BASE_URL}/api/users/${userId}`,
    headers: getAuthHeaders(),
  })
);

export const fetchUsers = () => (
  $.ajax({
    method: 'GET',
    url: `${API_BASE_URL}/api/users`,
    headers: getAuthHeaders(),
  })
);

export const updateUser = (user, userId) => (
  $.ajax({
    method: 'PATCH',
    url: `${API_BASE_URL}/api/users/${userId}`,
    data: user,
    contentType: false,
    processData: false,
    headers: getAuthHeaders(),
  })
);
