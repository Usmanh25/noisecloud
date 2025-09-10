Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :tracks, only: [:index]
    end

    resource :session, only: [:create, :destroy, :show]

    resources :tracks, only: [:index, :show, :create, :update, :destroy] do
      resources :comments, only: [:index]  
    end    
    
    resources :comments, only: [:create, :destroy, :index]
  end

  root to: "static_pages#root"
end