FROM node:22-bookworm-slim AS build

WORKDIR /app

COPY frontend/package*.json ./

RUN npm ci

COPY frontend/ .


RUN npm run build




FROM nginx:stable-alpine

COPY Docker/nginx/prod_nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist /etc/nginx/dist

RUN apk add --no-cache openssl
RUN mkdir -p /etc/nginx/ssl && \
openssl req -x509 -nodes -days 365 \
-newkey rsa:2048 \
-keyout /etc/nginx/ssl/nginx-selfsigned.key \
-out /etc/nginx/ssl/nginx-selfsigned.crt \
-subj "/CN=localhost"

