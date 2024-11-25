# Base image 설정
FROM nginx:1.25.1-alpine3.17-slim

# 작업 디렉토리 설정 (필요 시 추가)
WORKDIR /app

# 정적 파일 복사
COPY ./dist /usr/share/nginx/html

# Nginx 설정 파일을 환경 변수로 교체
COPY nginx.conf /etc/nginx/nginx.conf
RUN envsubst < /etc/nginx/nginx.conf > /etc/nginx/nginx.conf


# Nginx 기본 포트 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
