module ResponseTypes
  class ListsQueryResponse < Types::BaseObject
    field :success, Boolean, null: false
    field :total_records, Int, null: false
    field :categorie_name, String, null: false
    field :result, [::Types::ListType], null: false
  end
end