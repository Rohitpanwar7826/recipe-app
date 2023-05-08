class LiveRecipesController < ApplicationController
  def index
  end

  def start_live_recipe
    # LiveRecipeJob.perform_later()
    flash[:alert] = "STARTED LIVE RECIPE'S....!"
    redirect_to live_recipes_broad_casting_path
  end
end
