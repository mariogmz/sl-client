# frozen_string_literal: true

class PeopleController < ApplicationController
  before_action :initialize_salessoft_client

  def list
    @people = @client.people[:data]
  end

  def frequency
    @data = SalesLoft::PeopleService.frequency_count(@client.people[:data])
  end

  def duplicates
    @data = SalesLoft::PeopleService.find_duplicates(@client.people[:data])
  end

  private

  def initialize_salessoft_client
    @client = SalesLoft::Client.new
  end
end
