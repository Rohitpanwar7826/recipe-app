# frozen_string_literal: true

module Types
  class LikeType < Types::BaseObject
    field :id, ID, null: false
    field :likeable_type, String, null: false
    field :likeable_id, ID, null: false
    field :user_id, ID, null: false
    field :likeable, ::Unions::LikeableUnion, null: false
    field :user, Types::UserType, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
