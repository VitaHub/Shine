# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )

Rails.application.config.assets.precompile += %w( support/phantomjs-shims.self.js )

Rails.application.config.assets.precompile += %w( jquery/dist/jquery.self.js )

Rails.application.config.assets.precompile += %w( jquery_ujs.self.js )

Rails.application.config.assets.precompile += %w( angular/angular.self.js )

Rails.application.config.assets.precompile += %w( angular_test_app.self.js )

Rails.application.config.assets.precompile += %w( customers_app.self.js )

Rails.application.config.assets.precompile += %w( application.self.js )

Rails.application.config.assets.precompile += %w( spec_helper.self.js )

Rails.application.config.assets.precompile += %w( dummy_spec.self.js )

Rails.application.config.assets.precompile += %w( angular-mocks/angular-mocks.self.js )

Rails.application.config.assets.precompile += %w( customers_app/controllers/customer_search_controller_spec.self.js )