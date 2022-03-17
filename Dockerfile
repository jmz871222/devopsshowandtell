FROM ubuntu:18.04
MAINTAINER jiang.missouri@gmail.com
EXPOSE 8080

RUN apt-get update
RUN apt-get install -y nodejs npm
COPY package*.json ./
RUN npm install -g express-generator
RUN npm install express
RUN npm install nodemailer
COPY . .
CMD ["node","app.js"]
