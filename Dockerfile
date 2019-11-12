FROM node:10-alpine

RUN mkdir -p /src/app/

COPY . /src/app/

WORKDIR /src/app

RUN npm install --production

EXPOSE 3050

CMD ["npm", "start"]