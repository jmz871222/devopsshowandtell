FROM ubuntu:18.04
MAINTAINER jiang.missouri@gmail.com
EXPOSE 8080

RUN apt-get update
RUN apt-get install -y nodejs npm
ENV USER root
COPY package.json /package.json
RUN npm install -g express-generator
RUN npm install express
RUN npm install nodemailer
COPY app.js home/app.js
COPY start.sh home/start.sh
RUN chmod a+x home/start.sh

CMD ["sh","/home/start.sh"]
