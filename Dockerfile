# Node.js를 사용하여 빌드
FROM node:20-alpine AS base

# 의존성 설치
FROM base AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci

# 프로젝트 빌드
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

# .env 파일을 컨테이너로 복사
COPY .env .env

RUN npm run build

# 실행
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 reactjs

# 빌드된 파일을 Nginx로 복사
COPY --from=builder /app/dist /usr/share/nginx/html

# .env 파일을 Nginx에 복사 (필요에 따라)
COPY .env /usr/share/nginx/.env

USER reactjs

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
