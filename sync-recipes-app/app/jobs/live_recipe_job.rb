class LiveRecipeJob < ApplicationJob
  queue_as :default
  PER_USER_LIMIT = 3
  PER_REQUEST_RECORD_BROAD_CAST = 10
  
  def perform(*args)
    process
  end

  def process
    details = Detail.joins(imakes: :user).order(created: :desc).limit(10)
    detail_connection = details.inject([]) do |prev_collection, current_detail|
      users = find_users_associated_with_detail(current_detail)
      prev_collection << {
        detail: current_detail,
        users: users
      }
    end
    ActionCable.server.broadcast "live_recipes_channel", detail_connection
  end

  def find_users_associated_with_detail(detail)
    detail.imakes.limit(PER_USER_LIMIT).inject([]) do |prev_collection, i_make|
      prev_collection << {
        name: i_make.user.name,
        email: i_make.user.email
      }
      prev_collection
    end
  end
end
