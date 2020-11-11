# frozen_string_literal: true

require 'test_helper'

module SalesLoft
  class ClientTest < ActiveSupport::TestCase
    test 'exists' do
      assert_not_nil SalesLoft::Client.new
    end
  end
end
