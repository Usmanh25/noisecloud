
// export const createComment = (comment) => (
//     $.ajax({
//         method: "POST",
//         url: `/api/comments`,
//         data: { comment }
//     })
// )

// export const fetchComments = (trackId) => (
//     $.ajax({
//         method: "GET",
//         url: `/api/tracks/${trackId}/comments`
//     })
// )

// export const deleteComment = (commentId) => (
//     $.ajax({
//         method: "DELETE",
//         url: `/api/comments/${commentId}`
//     })
// )


const API_BASE_URL = process.env.REACT_APP_API_URL;

export const createComment = (comment) => (
    $.ajax({
        method: "POST",
        url: `${API_BASE_URL}/api/comments`,
        data: { comment }
    })
);

export const fetchComments = (trackId) => (
    $.ajax({
        method: "GET",
        url: `${API_BASE_URL}/api/tracks/${trackId}/comments`
    })
);

export const deleteComment = (commentId) => (
    $.ajax({
        method: "DELETE",
        url: `${API_BASE_URL}/api/comments/${commentId}`
    })
);
