# 1. Node.js 기반으로 빌드를 먼저 진행
FROM node:22-alpine AS build-stage 

ARG VITE_IMG_BASE_URL
ARG VITE_BASE_URL

ENV VITE_IMG_BASE_URL=${VITE_IMG_BASE_URL}
ENV VITE_BASE_URL=${VITE_BASE_URL}

# 작업 디렉토리 설정
WORKDIR /app

# Corepack 활성화 및 Yarn 최신 버전 적용
RUN corepack enable \
    && corepack prepare yarn@stable --activate

# package.json과 yarn.lock만 먼저 복사
COPY package.json yarn.lock ./

# 의존성 설치 (PnP 모드)
RUN yarn install --immutable

# PnP SDK 설치 (TypeScript 실행 가능하도록 설정)
RUN yarn dlx @yarnpkg/sdks vscode

# 애플리케이션 소스 복사
COPY . .

# PnP 환경 설정 (TypeScript 실행이 정상적으로 되도록 경로 지정)
ENV NODE_OPTIONS="--require /app/.pnp.cjs"

# TypeScript 실행 명확히 지정 후 빌드
RUN yarn exec tsc && yarn build

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
