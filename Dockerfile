#########
# BUILD #
#########

FROM node:16.20.0 AS BUILD_FRONTEND

RUN mkdir -p /app
WORKDIR /app

ADD . .

RUN npm install
RUN npm run build

#########
## RUN ##
#########

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/htm

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]