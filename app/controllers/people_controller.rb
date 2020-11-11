# frozen_string_literal: true

class PeopleController < ApplicationController
  def index
    client = SalesLoft::Client.new
    @people = client.people.data
  end
end
