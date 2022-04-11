json.extract! track, :id, :title, :artist, :uploader_id, :genre

json.comments do
    track.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :body, :commenter_id, :created_at
        end
    end
end

json.imageUrl url_for(track.image) if track.image.attached?
json.audioUrl url_for(track.audio) if track.audio.attached?