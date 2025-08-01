// const API_BASE_URL = process.env.REACT_APP_API_URL;

// export const signup = user => (
//     $.ajax({
//       method: 'POST',
//       url: `${API_BASE_URL}/api/users`,
//       data: { user }
//     })
// );

// export const login = user => (
//     $.ajax({
//         method: 'POST',
//         url: `${API_BASE_URL}/api/session`,
//         data: { user }
//     })
// );

// export const logout = () => (
//     $.ajax({
//         method: 'DELETE',
//         url: `${API_BASE_URL}/api/session`
//     })
// );

const API_BASE_URL = process.env.REACT_APP_API_URL;

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
