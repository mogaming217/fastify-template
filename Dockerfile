FROM node:18-alpine as builder

RUN apk update

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY ./src ./src
RUN npm run build

FROM node:18-alpine as runner
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

CMD [ "node", "dist" ]
