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

FROM busybox
WORKDIR /build
COPY --from=BUILD_FRONTEND app/dist/. .
ADD entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["sh", "/entrypoint.sh"]