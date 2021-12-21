class PagesController < ApplicationController
  def home
    if params[:date].present?
      @selected_date = params[:date]
    else
      @selected_date = "Select a day"
    end

    @vegetables = ["carrot", "seedling", "lemon"]
    @animals = ["horse", "frog", "cat"]
    @artists = ["jimi", "mark", "santana", "stevie"]
  end

  def autocomplete
    @search_results = ["apple", "apple juice", "apple compote"]
    render layout: false
  end
end
