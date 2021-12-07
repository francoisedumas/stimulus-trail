
<img width="1247" alt="Screenshot 2564-12-07 at 17 12 33" src="https://user-images.githubusercontent.com/33062224/145065870-ed82f333-2ef7-4f5a-8143-c2afcf0e6df5.png">

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

## Solving issue with Gemfile.lock
I had issues with the Gemfile.lock and with the next error
```
Your bundle only supports platforms ["x86_64-darwin-19"] but your local
platform is x86_64-linux. Add the current platform to the lockfile with
`bundle lock --add-platform x86_64-linux` and try again.
```

It's been solved by removing my Gemfile, bundling and running `bundle lock --add-platform x86_64-linux`
[A good article about it here](https://www.moncefbelyamani.com/understanding-the-gemfile-lock-file/)

## Solving issue with Sqlite3

I am not using any DB in this exercise so no issue with Sqlite3 ;)

### Deploy & migrate

Now run `git push heroku master `
