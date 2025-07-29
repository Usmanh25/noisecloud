import $ from 'jquery';

export const fetchTrack = trackId => {
    return $.ajax({
        method: "GET",
        url: `/api/tracks/${trackId}`
    });
};

export const fetchTracks = () => {
    return $.ajax({
        method: "GET",
        url: `/api/tracks`
    });
};

export const fetchUserTracks = userId => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/tracks`
    });
};


export const createTrack = (formData) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: '/api/tracks',
      data: formData,
      contentType: false,
      processData: false,
      success: data => resolve(data),
      error: xhr => reject(xhr)
    });
  });
};

export const updateTrack = track => {
    return $.ajax({
        method: "PATCH",
        url: `/api/tracks/${track.get(['track[id]'])}`,
        data: track,
        contentType: false,
        processData: false
    });
};

export const deleteTrack = trackId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/tracks/${trackId}`
    });
};
