# 1. Node.js 기반으로 빌드를 먼저 진행
FROM node:22-alpine AS build-stage

# 환경 변수 인자를 받기 위한 ARG 설정
ARG VITE_IMG_BASE_URL
ARG VITE_BASE_URL

# 환경 변수 설정
ENV VITE_IMG_BASE_URL=${VITE_IMG_BASE_URL}
ENV VITE_BASE_URL=${VITE_BASE_URL}

# 작업 디렉토리 설정
WORKDIR /app

# Yarn Berry PnP 관련 설정
RUN corepack enable && yarn set version stable

# 의존성 설치 단계
FROM base AS deps

# Yarn Berry 관련 파일 복사 (PnP 모드 유지)
COPY package.json yarn.lock .yarnrc.yml .pnp.cjs .pnp.loader.mjs ./ 
COPY .yarn ./.yarn

# 의존성 설치 (Zero-Install 방식 유지)
RUN yarn install --immutable

# 빌드 단계
FROM base AS builder

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 및 소스 코드 복사
COPY --from=deps /app /app
COPY . .

# 환경 변수 파일 생성 (클라이언트에서 사용할 수 있도록 .env 저장)
RUN echo "VITE_IMG_BASE_URL=${VITE_IMG_BASE_URL}" > /app/.env
RUN echo "VITE_BASE_URL=${VITE_BASE_URL}" >> /app/.env

# TypeScript SDK 설치 (PnP 환경에서 TypeScript를 인식시키기 위함)
RUN yarn dlx @yarnpkg/sdks typescript

# TypeScript 검사 실행 (빌드 전에 확인)
RUN node .yarn/sdks/typescript/bin/tsc --noEmit

# React 애플리케이션 빌드
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