class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
    	t.string :name
    	t.string :company
    	t.string :phone
    	t.string :email
    	t.string :content
    	
      t.timestamps
    end
  end
end
