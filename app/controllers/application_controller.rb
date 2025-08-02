class ApplicationController < ActionController::Base
  # Skip CSRF only for JSON requests (like from your React frontend)
  skip_before_action :verify_authenticity_token, if: -> { request.format.json? }

  helper_method :current_user, :logged_in?

  def current_user
    token = session[:session_token]
    @current_user ||= User.find_by(session_token: token)
  end

  def require_logged_in
    redirect_to new_session_url unless logged_in?
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

  def logged_in?
    !!current_user
  end
end
