class HomeController < ApplicationController
  def index
  end

  def start_broad_cast_random_recipie
    RandomRecipieBroadCastJob.perform_later
    flash[:alert] = "Background job start for random recipies"
    redirect_to root_path
  end

  def stop_broad_cast_random_recipie
    RandomRecipieBroadCastJob.perform_later
  end
end
