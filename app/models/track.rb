class Track < ApplicationRecord
    validates :title, :uploader_id, :genre, presence: :true

    belongs_to :uploader,
        primary_key: :id,
        foreign_key: :uploader_id,
        class_name: :User

    has_many :comments, 
        primary_key: :id,
        foreign_key: :track_id,
        class_name: :Comment,
        dependent: :destroy 
    
    has_one_attached :image
    has_one_attached :audio

end


