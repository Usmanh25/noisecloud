
json.extract! comment, :id, :body, :track_id, :created_at
json.commenter do
  json.extract! comment.commenter, :id, :email
end
json.commenter_username comment.commenter.email.split('@').first
