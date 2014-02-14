ActiveAdmin.register Layout do
actions :all, :except => [:destroy]
form partial: 'form'
end
