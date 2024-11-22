# 1. Build 단계
FROM node:20-alpine AS build
WORKDIR /app

# 의존성 파일 복사 및 설치
COPY package*.json ./
RUN npm install

# 소스 복사 및 프로덕션 빌드
COPY . .
RUN npm run build --loglevel verbose

# 2. Serve 단계
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
