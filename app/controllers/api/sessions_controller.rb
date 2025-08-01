class Api::SessionsController < ApplicationController
    
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ["Invalid email or password"], status: 401
        end
    end

    def show
        if current_user
            render 'api/users/show'
        else
            render json: { errors: ["Not logged in"] }, status: :unauthorized
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render json: "{}"
        else
            render json: ["Page not found"], status: 404
        end
    end

end