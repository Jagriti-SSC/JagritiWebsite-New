# Multi-stage Dockerfile for building a static production site with Node 18 and serving with nginx
FROM node:18-alpine AS build

# set working directory
WORKDIR /app

# copy package manifests first and install dependencies (cache layer)
COPY package*.json ./

# install all deps (including devDeps needed for build)
RUN npm ci --silent

# copy rest of the repo and build
COPY . .
ENV NODE_ENV=production
RUN npm run build

# Nginx stage to serve the built static files
FROM nginx:stable-alpine

# Copy built assets from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Replace default nginx config with one that supports SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
