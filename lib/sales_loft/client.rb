# frozen_string_literal: true

module SalesLoft
  class Client
    API_URL = ''

    def initialize(headers = {})
      @headers = default_headers.merge(headers)
    end

    private

    def default_headers
      @headers = {
        Authorization: "Bearer #{Rails.application.credentials.api_key}"
      }
    end
  end
end
