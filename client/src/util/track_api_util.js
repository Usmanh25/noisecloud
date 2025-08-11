// track_api_util.js
import API_BASE_URL from './config';

const getAuthHeaders = () => {
  const token = localStorage.getItem('jwtToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const fetchTrack = trackId => (
  $.ajax({
    method: "GET",
    url: `${API_BASE_URL}/api/tracks/${trackId}`,
    headers: getAuthHeaders(),
  })
);

export const fetchTracks = () => (
  $.ajax({
    method: "GET",
    url: `${API_BASE_URL}/api/tracks`,
    headers: getAuthHeaders(),
  })
);

export const fetchUserTracks = userId => (
  $.ajax({
    method: "GET",
    url: `${API_BASE_URL}/api/users/${userId}/tracks`,
    headers: getAuthHeaders(),
  })
);

export const createTrack = (formData) => (
  new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${API_BASE_URL}/api/tracks`,
      data: formData,
      contentType: false,
      processData: false,
      headers: getAuthHeaders(),
      success: data => resolve(data),
      error: xhr => reject(xhr),
    });
  })
);

export const updateTrack = track => (
  $.ajax({
    method: "PATCH",
    url: `${API_BASE_URL}/api/tracks/${track.get(['track[id]'])}`,
    data: track,
    contentType: false,
    processData: false,
    headers: getAuthHeaders(),
  })
);

export const deleteTrack = trackId => (
  $.ajax({
    method: "DELETE",
    url: `${API_BASE_URL}/api/tracks/${trackId}`,
    headers: getAuthHeaders(),
  })
);
