import API_BASE_URL from './config';

export const fetchSession = () => {
  const token = localStorage.getItem('jwtToken');
  if (!token) return Promise.reject();

  return $.ajax({
    method: "GET",
    url: `${API_BASE_URL}/api/session`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: `${API_BASE_URL}/api/users`,
    data: { user },
  })
);

export const login = user => {
  return $.ajax({
    method: 'POST',
    url: `${API_BASE_URL}/api/session`,
    data: { user },
  }).then(data => {
    localStorage.setItem('jwtToken', data.token);
    return data.user;
  });
};

export const logout = () => {
  localStorage.removeItem('jwtToken');
  return $.ajax({
    method: 'DELETE',
    url: `${API_BASE_URL}/api/session`,
  });
};
