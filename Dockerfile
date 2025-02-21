# 1. Node.js 기반으로 빌드를 먼저 진행
FROM node:22-alpine AS build-stage

ARG VITE_IMG_BASE_URL
ARG VITE_BASE_URL

ENV VITE_IMG_BASE_URL=${VITE_IMG_BASE_URL}
ENV VITE_BASE_URL=${VITE_BASE_URL} 

# 작업 디렉토리 설정
WORKDIR /app

RUN echo "VITE_IMG_BASE_URL=${VITE_IMG_BASE_URL}" > /app/.env
RUN echo "VITE_BASE_URL=${VITE_BASE_URL}" >> /app/.env 

# Corepack 활성화 및 Yarn 최신 버전 적용
RUN corepack enable \
    && corepack prepare yarn@stable --activate

# 패키지 파일 복사
COPY package.json yarn.lock ./

# nodeLinker 설정 (node-modules 방식 강제)
RUN yarn config set nodeLinker node-modules

# 의존성 설치 (Yarn 사용)
RUN yarn install --immutable

# 애플리케이션 소스 복사
COPY . . 

# 빌드 명령어 실행 (정적 파일을 dist 폴더에 생성)
RUN yarn build

# 2. Nginx 이미지 설정 (실제 배포용)
FROM nginx:1.25.1-alpine3.17-slim

# 작업 디렉토리 설정
WORKDIR /app

# 빌드된 정적 파일 복사 (이 부분은 첫 번째 단계에서 생성된 dist 폴더)
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Nginx 설정 파일 복사
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Nginx 설정 파일에 환경 변수로 전달
COPY --from=build-stage /app/.env /usr/share/nginx/html/.env 

# Nginx의 기본 포트를 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
