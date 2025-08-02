const API_BASE_URL = "https://songcloud-e382.onrender.com";
export const fetchTrack = trackId => (
    $.ajax({
        method: "GET",
        url: `${API_BASE_URL}/api/tracks/${trackId}`,
        xhrFields: { withCredentials: true }
    })
);

export const fetchTracks = () => (
    $.ajax({
        method: "GET",
        url: `${API_BASE_URL}/api/tracks`,
        xhrFields: { withCredentials: true }
    })
);

export const fetchUserTracks = userId => (
    $.ajax({
        method: "GET",
        url: `${API_BASE_URL}/api/users/${userId}/tracks`,
        xhrFields: { withCredentials: true }
    })
);

export const createTrack = (formData) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${API_BASE_URL}/api/tracks`,
      data: formData,
      contentType: false,
      processData: false,
      xhrFields: { withCredentials: true },
      success: data => resolve(data),
      error: xhr => reject(xhr)
    });
  });
};

export const updateTrack = track => (
    $.ajax({
        method: "PATCH",
        url: `${API_BASE_URL}/api/tracks/${track.get(['track[id]'])}`,
        data: track,
        contentType: false,
        processData: false,
        xhrFields: { withCredentials: true }
    })
);

export const deleteTrack = trackId => (
    $.ajax({
        method: "DELETE",
        url: `${API_BASE_URL}/api/tracks/${trackId}`,
        xhrFields: { withCredentials: true }
    })
);
