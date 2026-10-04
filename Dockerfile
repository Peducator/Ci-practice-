FROM node:20-slim
WORKDIR /app

# Layer dependency: chỉ build lại khi lockfile đổi
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Layer code: đổi thường xuyên nên đặt SAU
COPY index.js ./

USER node
CMD ["node", "index.js"]