FROM node:20-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 파일 복사
COPY package*.json .

# 의존성 설치
RUN npm install

# 소스 파일 전체 복사
COPY . .

# Vite 기본 포트 노출
EXPOSE 3000

# Vite 개발 서버 실행
CMD ["npm", "run", "dev"]
