Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :tracks, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:index, :show, :create, :update, :destroy]
    resources :comments, only: [:create, :destroy, :index]
  end

  root to:"static_pages#root"
  
  if Rails.env.production?
    get '/migrate_db', to: 'utils#migrate'
    get '/seed_db', to: 'utils#seed'
  end
end