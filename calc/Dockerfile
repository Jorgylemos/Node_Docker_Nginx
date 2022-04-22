FROM node:16

WORKDIR /usr/src/calc

COPY ./package*.json /usr/src/calc/

RUN npm install

COPY ./ /usr/src/calc/

EXPOSE 3000

CMD [ "node", "Calc.js" ]
