FROM node:7.9

WORKDIR /usr/src/app

COPY package.json .
RUN npm install --quiet

COPY . .

EXPOSE 8080