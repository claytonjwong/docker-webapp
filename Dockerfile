FROM node:14

WORKDIR /app

COPY . /app

EXPOSE 9000

CMD [ "node", "server.js" ]