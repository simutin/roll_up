ActiveAdmin.register Layout do
	menu :priority => 1
	actions :all, :except => [:destroy, :new]

	index do
		column :name
		column :content
		default_actions
	end

	form partial: 'form'
end
