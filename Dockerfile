FROM node:16.10.0 as base


WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci


ENV CONTINUOUS_INTEGRATION=1
ENV NODE_ENV=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]