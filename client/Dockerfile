# base image
FROM node:9

# set working directory
WORKDIR /usr/src/app

COPY client/package*.json ./

RUN npm install
RUN npm install react-scripts@1.1.1 -g

ENV PATH="${PATH}:/usr/src/app/node_modules/.bin/"

COPY ./client .

EXPOSE 3000

# start app
CMD ["npm", "start"]