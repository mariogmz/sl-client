# frozen_string_literal: true

module SalesLoft
  module PeopleService
    class << self
      def frequency_count(people)
        emails_string = pluck_emails(people).reduce(:+)
        emails_string.chars.uniq.each_with_object([]) do |char, result|
          result.push({
            letter: char, frequency: emails_string.count(char)
          })
        end.sort_by { |hash| hash[:frequency] }.reverse
      end

      def find_duplicates(people)
        emails = pluck_emails(people)
        emails.each_with_object([]) do |email, array|
          email_id = email.downcase.split("@").first

          emails.each do |possibly_duplicated|
            if (possibly_duplicated.downcase.include? email_id) &&
               !(possibly_duplicated.eql? email)
              array.push({ email: email, duplicated: possibly_duplicated })
            end
          end
        end.sort_by { |hash| hash[:email] }
      end

      def pluck_emails(people)
        people.map { |hsh| hsh[:email_address] }
      end
    end
  end
end
