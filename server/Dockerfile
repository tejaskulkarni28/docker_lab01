FROM node:20.12-alpine

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3001

CMD ["node", "index.js"]
