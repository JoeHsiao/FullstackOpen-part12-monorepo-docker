FROM node:23.10.0-bullseye-slim

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

RUN npm install -g serve

CMD ["npx", "serve", "dist"]