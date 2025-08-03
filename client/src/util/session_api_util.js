import API_BASE_URL from './config';

export const fetchSession = () => {
  return $.ajax({
    method: "GET",
    url: `${API_BASE_URL}/api/session`,
    xhrFields: { withCredentials: true },
  });
};

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: `${API_BASE_URL}/api/users`,
    data: { user },
    xhrFields: { withCredentials: true },
  })
);

export const login = user => (
  $.ajax({
    method: 'POST',
    url: `${API_BASE_URL}/api/session`,
    data: { user },
    xhrFields: { withCredentials: true },
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: `${API_BASE_URL}/api/session`,
    xhrFields: { withCredentials: true },
  })
);
