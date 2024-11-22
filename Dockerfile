# Node.js 빌드
FROM node:20-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# Nginx 설정
FROM nginx:alpine

# 빌드된 파일을 Nginx의 기본 디렉토리로 복사
COPY --from=builder /app/dist /usr/share/nginx/html

# .env 파일을 Nginx 설정 디렉토리에 복사
COPY .env /usr/share/nginx/.env

# Nginx 포트 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
