FROM node:12

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install
# For production:
# RUN npm ci --only=production

COPY ./ ./

EXPOSE 4000

CMD [ "npm", "run", "start" ]
