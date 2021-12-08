<img width="1242" alt="Screenshot 2564-12-07 at 20 02 42" src="https://user-images.githubusercontent.com/33062224/145090239-db00eef5-cbc2-466f-a724-1fdcea30c0cd.png">


Find almost 30 exemples of Stimulus real application!

# Rails new and HP setup

In your terminal run
`rails new stimulus-trail --skip-active-storage --skip-action-mailbox`
`rails generate controller pages`
In the `app/config/routes.rb` file add the HP route
Add below action to your pages controller
```ruby
  def home
  end
```
Create the file `app/views/home.html.erb` and you're good to go

# Setup scss

`rm app/assets/stylesheets/application.css`
`touch app/assets/stylesheets/application.scss`

# Stimulus setup

In your terminal
`rails webpacker:install:stimulus`

# Slim & Fontawesome setup

Add to the Gemfile
`gem "slim-rails"`
`gem 'font-awesome-sass', '~> 5.6.1'`
Then run `bundle` in your terminal. That's it!

# Tailwind setup

In your terminal
`bundle add tailwindcss-rails`
`rails tailwindcss:install`
Create a file `tailwind.config.js`

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


## Deploy & migrate

Now run `git push heroku master `
If you face some issue you can try `heroku run rails console` to find out more
