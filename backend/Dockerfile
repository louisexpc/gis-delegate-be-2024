FROM node:18.13.0-alpine
EXPOSE 5000

WORKDIR /app
COPY . /app


RUN corepack enable
RUN yarn install
RUN chmod -R 777 ./node_modules
RUN yarn build
CMD ["node", "dist/index.js"]