// comment_api_util.js
import API_BASE_URL from './config';

const getAuthHeaders = () => {
  const token = localStorage.getItem('jwtToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const createComment = (comment) => (
  $.ajax({
    method: "POST",
    url: `${API_BASE_URL}/api/comments`,
    data: { comment },
    headers: getAuthHeaders(),
  })
);

export const fetchComments = (trackId) => (
  $.ajax({
    method: "GET",
    url: `${API_BASE_URL}/api/tracks/${trackId}/comments`,
    headers: getAuthHeaders(),
  })
);

export const deleteComment = (commentId) => (
  $.ajax({
    method: "DELETE",
    url: `${API_BASE_URL}/api/comments/${commentId}`,
    headers: getAuthHeaders(),
  })
);
