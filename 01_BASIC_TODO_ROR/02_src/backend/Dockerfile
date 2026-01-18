# Simple Dockerfile for learning project
FROM ruby:3.4.2

# Install dependencies
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y default-mysql-client && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /rails

# Install gems
COPY Gemfile Gemfile.lock ./
RUN bundle install

# Copy application code
COPY . .

EXPOSE 3001

CMD ["bin/rails", "server", "-b", "0.0.0.0", "-p", "3001"]
