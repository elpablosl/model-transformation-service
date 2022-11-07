FROM node:16.13.0

WORKDIR /ca-to-uml

COPY ./package*.json ./

RUN npm install --silent

COPY ./ ./

EXPOSE 8080

CMD [ "node", "app" ]