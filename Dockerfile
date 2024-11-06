# Install dependencies only when needed
FROM node:alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN yarn install 

# Rebuild the source code only when needed
FROM node:alpine AS build
ENV NODE_OPTIONS=--max_old_space_size=8000
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
COPY . .
RUN yarn build

# Production image, copy all the files and run the application
FROM node:alpine AS prod
WORKDIR /app
COPY --from=build /app/build /app/build
RUN yarn global add serve
EXPOSE 3001
CMD ["serve", "-s", "-p", "3001", "build/"]
