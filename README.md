<img width="1242" alt="Screenshot 2564-12-07 at 20 02 42" src="https://user-images.githubusercontent.com/33062224/145090239-db00eef5-cbc2-466f-a724-1fdcea30c0cd.png">


Find almost 30 exemples of Stimulus real application!

# Rails new and HP setup

In your terminal run \
`rails new stimulus-trail --skip-active-storage --skip-action-mailbox` \
`rails generate controller pages` \
In the `app/config/routes.rb` file add the HP route \
Add below action to your pages controller
```ruby
  def home
  end
```
Create the file `app/views/home.html.erb` and you're good to go

# Setup scss

`rm app/assets/stylesheets/application.css` \
`touch app/assets/stylesheets/application.scss`

# Stimulus setup

In your terminal \
`rails webpacker:install:stimulus`

# Slim & Fontawesome setup

Add to the Gemfile \
`gem "slim-rails"` \
`gem 'font-awesome-sass', '~> 5.6.1'` \
Then run `bundle` in your terminal. That's it!

# Tailwind setup

In your terminal (to start easy by just writting Tailwind in your HTML) \
`bundle add tailwindcss-rails`
`rails tailwindcss:install` \

In your terminal to add it as JS \
`yarn add tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9` \
In the file postcss.config.js along the other require add \
`require('tailwindcss'), require('autoprefixer')` \
In the application.js file add below line to import you stylesheets nested in javascript folder \
`import '../stylesheets/application.scss'` \
Add a folder `stylesheets` in the JS repository `app/javascript/stylesheets` and add an `application.scss` file. \
Add next line to the file
```
@import "tailwindcss/base.css";
@import "tailwindcss/components.css";
@import "tailwindcss/utilities.css";
```
Add your Tailwind customed class in this new file
Make sure you have the below lines in the header of your `application.html.erb` or `application.html.slim`
```
<%= stylesheet_pack_tag 'application', media: 'all', 'data-turbolinks-track': 'reload' %>
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload', defer: true %>
```

# Sweetalert setup

In your terminal \
`yarn add sweetalert2`

# SortableJS setup

In your terminal \
`yarn add sortablejs`

# Deploying with Heroku

## Solving issue with Sqlite3

If using Sqlite3 you have the next error with Heroku `Detected sqlite3 gem which is not supported on Heroku:` To solve it follow the [article here](https://devcenter.heroku.com/articles/sqlite3) or [article here](https://www.codecademy.com/articles/deploy-rails-to-heroku)

## Solving issue with Gemfile.lock
I had issues with the Gemfile.lock and with the next error
```
Your bundle only supports platforms ["x86_64-darwin-19"] but your local
platform is x86_64-linux. Add the current platform to the lockfile with
`bundle lock --add-platform x86_64-linux` and try again.
```

It's been solved by removing my Gemfile, bundling and running `bundle lock --add-platform x86_64-linux`
[A good article about it here](https://www.moncefbelyamani.com/understanding-the-gemfile-lock-file/)

## Solving issue with image on Heroku
I had an issue `ActionView::Template::Error The asset  is not present in the asset pipeline.` \
I solved it by changing to true `config.assets.compile = true` \
[Stackoverflow here](https://stackoverflow.com/questions/49440304/rails-asset-is-not-present-in-asset-pipeline-when-using-image-tag)

## Deploy & migrate

Now run `git push heroku master` \
If you face some issue you can try `heroku run rails console` to find out more
