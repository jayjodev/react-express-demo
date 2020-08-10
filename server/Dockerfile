# Specify a base image
FROM node:alpine
WORKDIR /server

# Install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./
EXPOSE 2018

# Default Command
CMD ["npm", "start"]