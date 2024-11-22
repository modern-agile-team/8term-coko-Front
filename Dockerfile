# Node.js를 사용하여 빌드
FROM node:20-alpine as builder

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 파일 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 빌드 실행
COPY . .

# 빌드된 파일을 Nginx의 기본 디렉토리로 복사
FROM nginx:alpine

# .env 파일을 Nginx 설정과 함께 복사
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx에서 직접 사용할 수 없지만 Node.js 애플리케이션에서 활용 가능
COPY .env /usr/share/nginx/.env  

# Nginx 포트 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
