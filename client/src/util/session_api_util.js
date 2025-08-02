const API_BASE_URL = "https://songcloud-e382.onrender.com";
export const signup = user => (
    $.ajax({
      method: 'POST',
      url: `${API_BASE_URL}/api/users`,
      data: { user },
      xhrFields: {
        withCredentials: true, // send cookies
      },
    })
);

export const login = user => (
    $.ajax({
        method: 'POST',
        url: `${API_BASE_URL}/api/session`,
        data: { user },
        xhrFields: {
          withCredentials: true, // send cookies
        },
    })
);

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: `${API_BASE_URL}/api/session`,
        xhrFields: {
          withCredentials: true, // send cookies
        },
    })
);
