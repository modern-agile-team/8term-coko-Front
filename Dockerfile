# 1. Node.js 기반 빌드 단계
FROM node:22-alpine AS base

# 환경 변수 인자 설정
ARG VITE_IMG_BASE_URL
ARG VITE_BASE_URL

# 환경 변수 설정
ENV VITE_IMG_BASE_URL=${VITE_IMG_BASE_URL}
ENV VITE_BASE_URL=${VITE_BASE_URL}

# 작업 디렉토리 설정
WORKDIR /app

# Yarn Berry PnP 설정
RUN corepack enable && yarn set version stable

# 의존성 설치 단계
FROM base AS deps

# Yarn Berry 관련 파일 복사 (PnP 모드 유지)
COPY package.json yarn.lock .yarnrc.yml .pnp.cjs .pnp.loader.mjs ./
COPY .yarn ./.yarn

# 의존성 설치 (Zero-Install 방식 유지)
RUN yarn cache clean && yarn install --immutable

# 빌드 단계
FROM base AS builder

WORKDIR /app

# deps 단계의 결과물과 소스 코드 복사
COPY --from=deps /app /app
COPY . .

# 클라이언트에서 사용할 환경 변수 파일(.env) 생성
RUN echo "VITE_IMG_BASE_URL=${VITE_IMG_BASE_URL}" > /app/.env && \
    echo "VITE_BASE_URL=${VITE_BASE_URL}" >> /app/.env

# PnP 환경 초기화 (필요한 경우 rebuild와 cache 정리)
RUN yarn rebuild && yarn cache clean

# SDK 설치 (PnP 환경에서 TypeScript SDK를 인식시키기 위함)
RUN yarn dlx @yarnpkg/sdks vscode

# React 애플리케이션 빌드
RUN yarn build

# 2. Nginx 이미지 설정 (실제 배포용)
FROM nginx:1.25.1-alpine3.17-slim

WORKDIR /app

# 빌드된 정적 파일 복사 (dist 폴더)
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx 설정 파일 복사
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# 환경 변수 파일(.env) 복사
COPY --from=builder /app/.env /usr/share/nginx/html/.env

# 기본 포트 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
