class AddFooterHeader < ActiveRecord::Migration
	def change
    # Create a default user
    Layout.create!(name: "footer")
    Layout.create!(name: "header")
  end
end
