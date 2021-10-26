FROM node:16.10.0 As development

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app
RUN npm install

COPY . /usr/src/app

EXPOSE 3000

CMD ["npm", "run", "dev"]