class AddIndexes < ActiveRecord::Migration
	def change
		add_index :pages, :position
	end
end
