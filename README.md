# chatroom

chatroom is a simple, user friendly chat room done as an excercise that utilizes WebSockets to perform communication via Ruby on Rails’ ActionCable using Rails 6 and Ruby 2.7.

## Installation

##### Prerequisites

This installations expects the following to be installed on the system.

- Git
- Ruby [2.7.0](https://www.ruby-lang.org/en/news/2019/12/25/ruby-2-7-0-released/)
- Rails [6.0.3.4](https://rubygems.org/gems/rails/versions/6.0.3.4)
- [Redis](https://redis.io/)

##### 1. Check out the repository

```bash
git clone git@github.com:juanjosefernandez/chatroom.git
```

##### 2. Create and setup the database

Once you are in the *chatroom* directory on your machine, run the following commands to create and setup the database.

```ruby
bundle exec rake db:create
bundle exec rake db:migrate
```

##### 3. Start the Rails server

You can start the rails server using the command given below.

```ruby
bundle exec rails s
```

And now you can visit the site with the URL http://localhost:3000

## Usage

To test this out locally on your computer, once you are live, visit http://localhost:3000 using any combination of different browsers and/or incognito windows. Create a couple of rooms and chat with yourself, real-time! Yay, websockets!

