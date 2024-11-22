FROM node:20-alpine AS build

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 파일 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스 파일 전체 복사
COPY . .

# 빌드 실행
RUN npm run build

# Nginx를 사용해 정적 파일 제공
FROM nginx:stable-alpine

# 빌드된 파일을 Nginx에 복사
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx 기본 포트 노출
EXPOSE 8080

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
