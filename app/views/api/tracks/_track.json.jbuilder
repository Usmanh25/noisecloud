json.extract! track, :id, :title, :uploader_id, :genre

json.email track.uploader.email

if track.image.attached?
  json.imageUrl url_for(track.image)
else
  json.imageUrl "https://img.freepik.com/free-icon/black-music-icon_318-9277.jpg?size=338&ext=jpg"
end

if track.audio.attached?
  json.audioUrl url_for(track.audio)
end



# json.extract! song, :id, :title, :description, :genre, :artist_id 
# json.photoUrl url_for(song.photo) if song.photo.attached?
# json.songUrl url_for(song.song) if song.song.attached?