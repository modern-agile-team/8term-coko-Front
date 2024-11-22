# 1단계: Node.js 이미지를 기반으로 의존성 설치
FROM node:20-alpine AS base

WORKDIR /app

# package.json과 package-lock.json을 복사
COPY package.json package-lock.json* ./

# 의존성 설치
RUN npm ci

# 2단계: 빌드 과정
FROM base AS builder

WORKDIR /app

# 의존성 설치 및 빌드 파일 복사
COPY --from=base /app/node_modules ./node_modules
COPY . .

# .env 파일을 Docker 이미지에 복사 (빌드 과정에서 필요하다면)
COPY .env .env

# Vite 프로젝트 빌드
RUN npm run build

# 3단계: 최종 실행을 위한 Nginx 서버 설정
FROM nginx:alpine AS runner

# 빌드된 파일을 Nginx 디렉토리로 복사
COPY --from=builder /app/dist /usr/share/nginx/html

# .env 파일을 Nginx 컨테이너에 복사 (필요한 경우)
COPY --from=builder /app/.env /usr/share/nginx/.env

# Nginx 포트 80 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
