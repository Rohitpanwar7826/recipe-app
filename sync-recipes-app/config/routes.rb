require 'sidekiq/web'

Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  # mount Sidekiq::Web in your Rails app
  mount Sidekiq::Web => "/sidekiq"
  # mount ActionCable.server => '/cable'
  
  get '/live_recipes_broad_casting', to: "live_recipes#index"
  get "/start_live_recipes", to: "live_recipes#start_live_recipe"
  get "/broad_cast_random_recipies", to: "home#start_broad_cast_random_recipie"
  root 'home#index'
end
