FROM node:alpine

WORKDIR /shopql/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 4000

CMD yarn dev