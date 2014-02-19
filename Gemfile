source 'https://rubygems.org'
if RUBY_VERSION =~ /1.9/
Encoding.default_external = Encoding::UTF_8
Encoding.default_internal = Encoding::UTF_8
end
gem 'rails', '3.2.13'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

gem 'mysql2'
gem 'friendly_id'
gem 'activeadmin', github: 'gregbell/active_admin'
gem 'ancestry'
gem 'paperclip'
gem 'ckeditor'
gem 'carrierwave'
gem 'mini_magick'
gem 'russian'


# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  gem 'compass-rails'
  gem 'bootstrap-sass'

  gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 1.0.3'
end

group :development do
  gem 'capistrano'
  gem 'capistrano-ext'
  gem 'capistrano-unicorn'
  gem 'rvm-capistrano', github: 'wayneeseguin/rvm-capistrano'
  gem 'capistrano-helpers'
end

group :development, :test do
  gem 'guard-rspec'
  gem 'guard-cucumber'
  gem 'rspec-rails'
  gem 'guard-spork', :github => 'guard/guard-spork'
  gem 'spork'
end

group :test do
  gem 'cucumber'
  gem 'cucumber-rails', :require => false
  gem 'cucumber_factory'
  gem 'cucumber-websteps'

  gem 'capybara', :git => 'git://github.com/jnicklas/capybara.git'
  gem 'database_cleaner'
end

gem 'jquery-rails'
gem 'jquery-ui-rails'
gem 'unicorn'
gem 'ffaker'
gem 'factory_girl_rails'

gem 'acts_as_list' #Драг и дроп

gem 'activeadmin-sortable'

# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'debugger'
