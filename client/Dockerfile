FROM node:12.13.0-alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx
EXPOSE 3050
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html