class ApplicationController < ActionController::Base
  protect_from_forgery
	before_filter :layouts

	def layouts
		@header = Layout.find_by_name("header")
		@footer = Layout.find_by_name("footer")
	end
end
