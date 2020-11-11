# frozen_string_literal: true

require 'test_helper'

module SalesLoft
  class ClientTest < ActiveSupport::TestCase
    include SalesLoft::ApiMock

    setup do
      @subject = described_class.new
    end

    test '::api_url' do
      url = SalesLoft::Client::API_URL
      version = SalesLoft::Client::API_VERSION
      assert_equal [url, version].join('/'), described_class.api_url
    end

    test "successful request" do
      stub_get_people_sucess
      assert_instance_of HashWithIndifferentAccess, @subject.people
    end

    test "request failure" do
      stub_get_people_failure
      response = @subject.people
      assert_instance_of RestClient::Response, response
      assert_not_includes 200...300, response.code
    end

    test "request exception" do
      stub = 'hello'
      RestClient.stubs(:get).raises(RestClient::ExceptionWithResponse, stub)
      response = @subject.people
      assert_equal stub, response
    end

    test "#people" do
      stub_get_people_sucess
      assert @subject.people[:data]
    end

    private

    def described_class
      SalesLoft::Client
    end
  end
end
