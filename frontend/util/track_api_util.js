export const fetchTrack = trackId => (
    $.ajax({
        mthod: "GET",
        url: `/api/tracks/${trackId}`
    })
)

export const fetchTracks = () => (
    $.ajax({
        method: "GET",
        url: `/api/tracks`
    })
)

export const fetchUserTracks = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/tracks`
    })
);

export const createTrack = track => (
    $.ajax({
        method: "POST",
        url: `/api/tracks`,
        data: track,
        contentType: false,
        processData: false
    })
)

export const updateTrack = track => (
    $.ajax({
        method: "PATCH",
        url: `/api/tracks/${track.get(['track[id]'])}`,
        data: track,
        contentType: false,
        processData: false
    })
)

export const deleteTrack = trackId => (
    $.ajax({
        method: "DELETE",
        url: `/api/tracks/${trackId}`
    })
)