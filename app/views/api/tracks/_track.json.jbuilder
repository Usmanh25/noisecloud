json.extract! track, :id, :title, :artist, :genre, :uploader_id, :created_at, :updated_at

json.imageUrl url_for(track.image) if track.image.attached?
json.audioUrl url_for(track.track) if track.track.attached?

json.uploader do
  json.id track.uploader.id
  json.email track.uploader.email
end

json.comments do
  track.comments.includes(:commenter).each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :commenter_id, :track_id, :created_at, :updated_at
      json.commenter_username comment.commenter&.email&.split('@')&.first || "unknown"
     
    end
  end
end

