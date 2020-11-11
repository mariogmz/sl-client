# frozen_string_literal: true

require "test_helper"

module SalesLoft
  class PeopleServiceTest < ActiveSupport::TestCase
    setup do
      @subject = SalesLoft::PeopleService
    end

    test "#frequency_count" do
      result = @subject.frequency_count(sample_input)
      assert_equal sample_frequency_result, result
    end

    private
      def sample_input
        [
          {
              "id": 249340741,
              "first_name": "Steven",
              "last_name": "Pease",
              "display_name": "Steven Pease",
              "email_address": "sakatius@gmail.com",
              "full_email_address": '"Steven Pease" <sakatius@gmail.com>'
          },
          {
              "id": 251436152,
              "first_name": "Possibly",
              "last_name": "Duplicate",
              "display_name": "Possibly Duplicate",
              "email_address": "sakatiuss@gmail.com",
              "full_email_address": "\"Possibly Duplicate\" <sakatiuss@gmail.com>"
          }
        ]
      end

      def sample_frequency_result
        [
          { letter: "a", frequency: 6 },
          { letter: "s", frequency: 5 },
          { letter: "i", frequency: 4 },
          { letter: "m", frequency: 4 },
          { letter: "@", frequency: 2 },
          { letter: "u", frequency: 2 },
          { letter: "t", frequency: 2 },
          { letter: "k", frequency: 2 },
          { letter: "c", frequency: 2 },
          { letter: ".", frequency: 2 },
          { letter: "l", frequency: 2 },
          { letter: "g", frequency: 2 },
          { letter: "o", frequency: 2 }
        ]
      end
  end
end
