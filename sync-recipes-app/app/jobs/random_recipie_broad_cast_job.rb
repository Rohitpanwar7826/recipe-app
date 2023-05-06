class RandomRecipieBroadCastJob < ApplicationJob
  queue_as :default
  
  after_perform do
    RandomRecipieBroadCastJob.set(wait: 5.seconds).perform_later
  end

  def perform(*args)
    record  = RandomRecipie.order("RANDOM()").limit(1).first
    data = {
      id: record.meal_id,
      image: record.image,
      category: record.category,
      topic: record.topic
    }
    ActionCable.server.broadcast "random_recipie_channel", data
  end
end
