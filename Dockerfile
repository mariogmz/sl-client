FROM ruby:2.7.2

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Set debconf to run non-interactively
RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

ENV PHANTOM_JS="phantomjs-2.1.1-linux-x86_64"
ENV NODE_VERSION="12"

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && \
    apt-get upgrade -y
RUN apt-get install -y software-properties-common apt-transport-https \
    build-essential chrpath libssl-dev libxft-dev \
    libfreetype6 libfreetype6-dev libfontconfig1 libfontconfig1-dev qt5-default \
    libqt5webkit5-dev gstreamer1.0-plugins-base gstreamer1.0-tools \
    gstreamer1.0-x imagemagick cmake yarn nodejs postgresql-client libc6-dev

RUN curl -sL https://deb.nodesource.com/setup_$NODE_VERSION.x | bash - \
    && apt-get install -y nodejs

# RUN curl -L -O https://bitbucket.org/ariya/phantomjs/downloads/$PHANTOM_JS.tar.bz2
# RUN tar xvjf $PHANTOM_JS.tar.bz2 && \
#     mv $PHANTOM_JS /usr/local/share && \
#     ln -sf /usr/local/share/$PHANTOM_JS/bin/phantomjs /usr/local/bin

# Install latest chrome dev package.
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable --no-install-recommends \
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /src/*.deb

RUN gem update --system
