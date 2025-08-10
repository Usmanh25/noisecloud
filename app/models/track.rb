class Track < ApplicationRecord
  validates :title, :artist, :genre, :uploader_id, presence: true
  validates :track, attached: true, content_type: ['audio/mpeg']
  validates :image, content_type: ['image/png', 'image/jpeg']

  has_one_attached :track
  has_one_attached :image

  belongs_to :uploader,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User

  has_many :comments, 
    primary_key: :id,
    foreign_key: :track_id,
    class_name: :Comment,
    dependent: :destroy 
end
