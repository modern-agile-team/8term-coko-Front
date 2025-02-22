FROM node:22-alpine AS build-stage

ARG VITE_IMG_BASE_URL
ARG VITE_BASE_URL

ENV VITE_IMG_BASE_URL=${VITE_IMG_BASE_URL}
ENV VITE_BASE_URL=${VITE_BASE_URL}

# 작업 디렉토리 설정
WORKDIR /app

# Corepack 활성화 및 Yarn 최신 버전 적용
RUN corepack enable && corepack prepare yarn@4.6.0 --activate

# Yarn PnP 환경 설정을 위한 파일 복사
COPY .yarn/ .yarn/
COPY .pnp.cjs .pnp.loader.mjs .yarnrc.yml package.json yarn.lock ./

# Yarn 버전 확인 (디버깅용)
RUN yarn --version

# 의존성 설치 (PnP 모드)
RUN yarn install --immutable --mode=skip-build

# PnP SDK 설치 (TypeScript 및 ESLint 등 개발 도구 지원)
RUN yarn add -D @yarnpkg/sdks \
    && yarn dlx @yarnpkg/sdks vscode

# 애플리케이션 소스 복사
COPY . .

# PnP 환경에서 TypeScript 컴파일러 실행
ENV NODE_OPTIONS="--require /app/.pnp.cjs"
RUN yarn dlx typescript tsc

# 애플리케이션 빌드 실행 (PnP 환경 적용)
RUN NODE_OPTIONS="--require /app/.pnp.cjs" yarn build

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
