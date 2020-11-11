# frozen_string_literal: true

class PeopleController < ApplicationController
  before_action :initialize_salessoft_client

  def list
    @people = @client.people[:data]
  end

  def frequency
    @data = []
  end

  def duplicates
  end

  private

  def initialize_salessoft_client
    @client = SalesLoft::Client.new
  end
end
