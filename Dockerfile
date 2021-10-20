FROM node:16.3-alpine3.12 As development

WORKDIR /

RUN set NODE_OPTIONS=--max-old-space-size=30720

COPY . .
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]