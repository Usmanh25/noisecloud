import API_BASE_URL from './config';

export const createComment = (comment) => (
  $.ajax({
    method: "POST",
    url: `${API_BASE_URL}/api/comments`,
    data: { comment },
    xhrFields: { withCredentials: true },
  })
);

export const fetchComments = (trackId) => (
  $.ajax({
    method: "GET",
    url: `${API_BASE_URL}/api/tracks/${trackId}/comments`,
    xhrFields: { withCredentials: true },
  })
);

export const deleteComment = (commentId) => (
  $.ajax({
    method: "DELETE",
    url: `${API_BASE_URL}/api/comments/${commentId}`,
    xhrFields: { withCredentials: true },
  })
);
