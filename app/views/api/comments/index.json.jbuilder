json.array! @comments do |comment|
  json.id comment.id
  json.body comment.body
  json.track_id comment.track_id
  json.commenter_id comment.commenter_id
  json.commenter_username comment.commenter.email.split('@').first
  json.created_at comment.created_at
  json.updated_at comment.updated_at
end