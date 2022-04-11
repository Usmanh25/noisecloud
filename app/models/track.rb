class Track < ApplicationRecord
    validates :title, :uploader_id, :artist, :genre, presence: :true
    # validate :audio_validation

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

    # def audio_validation
    #     unless self.audio.attached?
    #         errors[:audio] << " is required*"
    #     end
    # end

end


