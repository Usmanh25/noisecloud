class ApplicationController < ActionController::API
  before_action :authenticate_request

  attr_reader :current_user

  private

  def authenticate_request
    header = request.headers['Authorization']
    token = header.split(' ').last if header
    decoded = JsonWebToken.decode(token) rescue nil
    if decoded
      @current_user = User.find_by(id: decoded[:user_id])
    end

    render json: { errors: ['Not Authenticated'] }, status: :unauthorized unless @current_user
  end

  def login!(user)
    token = JsonWebToken.encode(user_id: user.id)
    render json: { token: token, user: user }
  end

  def logout!
    # Stateless JWT — no action needed here
  end
end
