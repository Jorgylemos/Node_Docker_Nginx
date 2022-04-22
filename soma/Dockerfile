FROM node:16

WORKDIR /usr/src/soma

COPY ./package*.json /usr/src/soma/

RUN npm install

COPY ./ /usr/src/soma/

EXPOSE 3000

CMD [ "node", "Soma.js" ]
