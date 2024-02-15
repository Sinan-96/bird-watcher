FROM node:20-bullseye-slim AS builder
RUN apt-get update && apt-get install -y openssl
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
ADD prisma .
RUN npx prisma generate
RUN npm run build
RUN npm prune --production
ARG DATABASE_URL
RUN npm run deploy:db



FROM node:20-bullseye-slim
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY --from=builder /app/node_modules/.prisma /app/node_modules/.prisma
COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]