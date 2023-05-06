class DemoController < ApplicationController
  def index
    all_lists = List.all
    render json: all_lists
  end

  def user
    render json: User.all
  end
end
