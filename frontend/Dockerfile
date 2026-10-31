# Frontend React + Vite + TS. Targets: dev (HMR) y prod (nginx estático)
FROM node:22-slim AS base
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci || npm install

# --- dev: servidor de Vite con hot reload (el código se monta como volumen) ---
FROM base AS dev
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]

# --- build ---
FROM base AS build
COPY . .
ARG VITE_API_URL=http://localhost:8000
ARG VITE_WS_URL=ws://localhost:8000
ENV VITE_API_URL=$VITE_API_URL VITE_WS_URL=$VITE_WS_URL
RUN npm run build

# --- prod: nginx sirviendo dist/ ---
FROM nginx:alpine AS prod
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
