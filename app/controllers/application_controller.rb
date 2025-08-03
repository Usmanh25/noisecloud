class ApplicationController < ActionController::Base
  # Only skip CSRF for JSON (API) requests
  skip_before_action :verify_authenticity_token, if: -> { request.format.json? }

  helper_method :current_user, :logged_in?

  def current_user
    return @current_user if defined?(@current_user)

    token = session[:session_token]
    if token.present?
      @current_user = User.find_by(session_token: token)
    else
      @current_user = nil
    end
  end

  def logged_in?
    !!current_user
  end

  def require_logged_in
    unless logged_in?
      render json: { errors: ["Not logged in"] }, status: :unauthorized
    end
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout!
    current_user&.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end
end
