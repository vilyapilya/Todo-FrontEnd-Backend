Rails.application.routes.draw do

  root to: 'static_pages#root'

  defaults format: :json do
    namespace :api do
      resources :todos, only:[:index, :show, :create, :destroy, :update]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end