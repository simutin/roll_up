ActiveAdmin.register Layout do
	menu :priority => 1
	actions :all, :except => [:destroy, :new]
	form partial: 'form'
end
