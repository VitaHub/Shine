Rails.application.routes.draw do

  devise_for :users
  root 'customers#index'
  resources :customers, only: [ :index, :show ]
  get "angular_test", to: "angular_test#index"

end
