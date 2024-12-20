FROM node:20 AS builder

WORKDIR /build

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build




FROM nginx:alpine

COPY --from=builder /build/dist /usr/share/nginx/html
COPY nginx-server.conf /etc/nginx/conf.d/default.conf