# Base image는 Nginx로 설정
FROM nginx:1.25.1-alpine3.17-slim

# 작업 디렉토리 설정
WORKDIR /app

# Nginx 설정 파일 복사
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# 빌드된 정적 파일 복사
COPY ./dist ./dist

# Nginx의 기본 포트를 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
