# frozen_string_literal: true

require 'test_helper'

class PeopleControllerTest < ActionDispatch::IntegrationTest
  include SalesLoft::ApiMock

  setup do
    stub_get_people_sucess
  end

  test "#list" do
    get root_url
    assert_response :success
  end

  test "#frequency" do
    get frequency_url
    assert_response :success
  end

  test "#duplicates" do
    get duplicates_url
    assert_response :success
  end
end
