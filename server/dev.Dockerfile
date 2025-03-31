FROM node:23.10.0-bullseye-slim

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD ["npx", "nodemon", "index.js"]