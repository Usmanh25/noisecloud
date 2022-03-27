class User < ApplicationRecord

    attr_reader :password
  
    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
  
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
      user = User.find_by(email: email)
      return nil unless user
      user.is_password?(password) ? user : nil
    end
  
    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end
  
    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end
  
    def reset_session_token!
      self.session_token = SecureRandom::urlsafe_base64
      self.save!
      self.session_token
    end
  
    private
  
    def ensure_session_token
      self.session_token ||= SecureRandom::urlsafe_base64
    end
  
end
  

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1420751757000",
      "Effect": "Allow",
      "Principal": {
          "AWS": "arn:aws:iam::9002-7886-5283:user/{YOUR-USER-NAME}"
      },
      "Action": "s3:*",
      "Resource": [
        "arn:aws:s3:::noisecloud-dev",
        "arn:aws:s3:::noisecloud-dev"
      ]
    }
  ]
}