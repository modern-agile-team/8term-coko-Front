# 1. Build 단계
FROM node:20-alpine AS build
WORKDIR /app

# 의존성 파일 복사 및 설치
COPY package*.json ./
RUN npm install

# 소스 복사 및 프로덕션 빌드
COPY . .
RUN npm run build

# 2. Serve 단계
FROM nginx:alpine
# 빌드된 정적 파일을 Nginx HTML 폴더로 복사
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx 포트 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
