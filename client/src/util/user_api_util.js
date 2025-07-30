// export const fetchUser = (userId) => (
//     $.ajax({
//         method: 'GET',
//         url: `/api/users/${userId}`
//     })
// )
// export const fetchUsers = () => (
//     $.ajax({
//         method: 'GET',
//         url: `/api/users/`
//     })
// )
// export const updateUser = (user, userId) => (
//     $.ajax({
//         method: 'PATCH',
//         url: `/api/users/${userId}`,
//         data: user,
//         contentType: false,
//         processData: false
//     })
// )

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const fetchUser = (userId) => (
    $.ajax({
        method: 'GET',
        url: `${API_BASE_URL}/api/users/${userId}`
    })
);

export const fetchUsers = () => (
    $.ajax({
        method: 'GET',
        url: `${API_BASE_URL}/api/users/`
    })
);

export const updateUser = (user, userId) => (
    $.ajax({
        method: 'PATCH',
        url: `${API_BASE_URL}/api/users/${userId}`,
        data: user,
        contentType: false,
        processData: false
    })
);
