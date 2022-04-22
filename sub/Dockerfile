FROM node:16

WORKDIR /usr/src/sub

COPY ./package*.json /usr/src/sub/

RUN npm install

COPY ./ /usr/src/sub/

EXPOSE 3000

CMD [ "node", "Sub.js" ]
