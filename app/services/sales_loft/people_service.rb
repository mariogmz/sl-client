# frozen_string_literal: true

module SalesLoft
  module PeopleService
    class << self
      def frequency_count(people)
        emails = people.map { |hsh| hsh[:email_address] }
        email_string = emails.reduce(:+)
        email_string.chars.uniq.each_with_object([]) do |char, result|
          result.push({
            letter: char, frequency: email_string.count(char)
          })
        end.sort_by { |hash| hash[:frequency] }.reverse
      end
    end
  end
end
