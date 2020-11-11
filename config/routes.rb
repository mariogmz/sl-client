# frozen_string_literal: true

Rails.application.routes.draw do
  root "people#list"

  get "/frequency", to: "people#frequency"
  get "/duplicates", to: "people#duplicates"
end
