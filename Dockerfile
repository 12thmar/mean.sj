FROM dockerfile/nodejs

MAINTAINER Seid Adem, seid.adem@gmail.com

WORKDIR /home/mean.js

# Install Mean.JS Prerequisites
RUN npm install -g grunt-cli
RUN npm install -g bower

# Install Mean.JS packages
ADD package.json /home/mean.js/package.json
RUN npm install

# Manually trigger bower. Why doesnt this work via npm install?
ADD .bowerrc /home/mean.js/.bowerrc
ADD bower.json /home/mean.js/bower.json
RUN bower install --config.interactive=false --allow-root

# Make everything available for start
ADD . /home/mean.js

# currently only works for development
ENV NODE_ENV development


# Port 3000 for server
# Port 35729 for livereload
EXPOSE 3000 35729