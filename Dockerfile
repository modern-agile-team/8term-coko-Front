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
RUN npm run build

# Nginx 설정
FROM nginx:alpine

# Nginx 설정 템플릿 복사
COPY default.conf.template /etc/nginx/conf.d/default.conf.template

# 빌드된 파일을 Nginx의 기본 디렉토리로 복사
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx 포트 노출
EXPOSE 80

# Nginx 실행 및 환경변수 주입
ENTRYPOINT ["/bin/bash", "-c", "envsubst '${SERVER_NAME}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
