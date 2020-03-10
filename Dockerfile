FROM node:10

WORKDIR /app

COPY . /app

RUN yarn install

CMD yarn start

EXPOSE 8080
