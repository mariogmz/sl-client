# SalesLoft Client for People

Welcome to this humble and fun project built with so much love using Ruby on
Rails and React, before cloning the project locally some requirements are
needed:

## Requirements

- Ruby 2.7.2
- Node 12.16.2
- Bundler 2

## Install

It's a regular RoR application with some React components integrated thanks to
webpacker and the `react_rails` gem, as usual:

```
$ bundle install
$ yarn install
$ bundle exec foreman start -f Procfile.dev # for development
$ ./bin/rails server # If you want to run the Rails server only
```

## Test

This project includes a couple ways of testing to ensure everything is working
as intended:

**For Unit Tests**
```
$ ./bin/rails test
```

**For Jest Tests**
```
$ yarn test
```

## Demo

You can easily find a working demo up and running on Heroku:

[https://salesloft-mariogmz.herokuapp.com/](https://salesloft-mariogmz.herokuapp.com/)

Here you can navigate using the buttons or going directly using URLs
```
1. List (/)
2. Frequency (/frequency)
3. Duplicates (/duplicates)
```

Made with love <3 by Mario Gómez (mariogomezmtz@gmail.com)
[Visit my site!](http://www.mariogmz.com)
