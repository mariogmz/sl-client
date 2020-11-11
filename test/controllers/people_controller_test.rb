# frozen_string_literal: true

require 'test_helper'

class PeopleControllerTest < ActionDispatch::IntegrationTest
  test "#index" do
    get :index
    assert_response :success
  end
end
