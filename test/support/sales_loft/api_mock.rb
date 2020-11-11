# frozen_string_literal: true

module SalesLoft
  module ApiMock
    include JSONFixtures

    def stub_get_people_sucess
      stub_request(:get, endpoint('people'))
        .to_return(
          status: 200,
          body: json_string('get-people-200.json')
        )
    end

    def stub_get_people_failure
      stub_request(:get, endpoint('people'))
        .to_return(
          status: 500,
          body: ''
        )
    end

    def endpoint(route)
      "#{SalesLoft::Client.api_url}/#{route}.json"
    end
  end
end
