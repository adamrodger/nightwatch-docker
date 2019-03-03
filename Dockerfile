FROM node:10

WORKDIR /src

COPY package.json .
RUN yarn install

COPY . .
RUN chmod +x wait-for-it.sh
CMD ./wait-for-it.sh selenium:4444 -s -- node_modules/.bin/nightwatch