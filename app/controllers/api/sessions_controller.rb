class Api::SessionsController < ApplicationController
  skip_before_action :authenticate_request, only: [:create]

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      token = JsonWebToken.encode(user_id: @user.id)
      render json: { token: token, user: @user }
    else
      render json: ["Invalid email or password"], status: :unauthorized
    end
  end

  def show
    if current_user
      render json: current_user
    else
      render json: { errors: ["Not logged in"] }, status: :unauthorized
    end
  end

  def destroy
    render json: {}
  end
end
