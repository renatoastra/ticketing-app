FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .


ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true
ENV WDS_SOCKET_HOST=127.0.0.1

CMD ["npm", "run", "dev"]