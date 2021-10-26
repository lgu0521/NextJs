FROM node:16.10.0 As development

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install
RUN npm run dev

EXPOSE 3000

CMD ["npm", "run", "start"]