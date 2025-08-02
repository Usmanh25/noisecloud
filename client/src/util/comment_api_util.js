const API_BASE_URL = "https://songcloud-e382.onrender.com";
export const createComment = (comment) => (
    $.ajax({
        method: "POST",
        url: `${API_BASE_URL}/api/comments`,
        data: { comment },
        xhrFields: {
            withCredentials: true, // ✅ this sends cookies
        }
    })
);

export const fetchComments = (trackId) => (
    $.ajax({
        method: "GET",
        url: `${API_BASE_URL}/api/tracks/${trackId}/comments`,
        xhrFields: {
            withCredentials: true, // ✅ include for consistency
        }
    })
);

export const deleteComment = (commentId) => (
    $.ajax({
        method: "DELETE",
        url: `${API_BASE_URL}/api/comments/${commentId}`,
        xhrFields: {
            withCredentials: true, // ✅ so session auth works
        }
    })
);
