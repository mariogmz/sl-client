# frozen_string_literal: true

module SalesLoft
  class Client
    API_URL = 'https://api.salesloft.com'
    API_VERSION = 'v2'

    def initialize
      @headers = {
        Authorization: "Bearer #{Rails.application.credentials.api_key}",
        content_type: :json
      }
    end

    def self.api_url
      "#{API_URL}/#{API_VERSION}"
    end

    def people
      request(:get, 'people')
    end

    private

    def endpoint(route)
      "#{self.class.api_url}/#{route}.json"
    end

    def request(method = :get, route = '', options = {})
      result = RestClient.send(method, endpoint(route), options.merge(@headers))
      if result.code >= 200 && result.code < 300
        return JSON.parse(result.body).to_h.symbolize_keys
      end

      result
    rescue RestClient::ExceptionWithResponse => err
      err.response
    end
  end
end
