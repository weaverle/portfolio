# base image
FROM node:9-alpine

# set working directory
WORKDIR /usr/src/app

COPY client/package*.json ./

RUN npm install
RUN npm install react-scripts@1.1.1 -g

ENV PATH="${PATH}:/usr/src/app/node_modules/.bin/"

COPY ./client .

RUN npm run build


FROM node:9-alpine
WORKDIR /usr/src/app
RUN npm install serve -g
COPY --from=0 /usr/src/app/build ./

EXPOSE 5000

# start app
CMD ["serve"]