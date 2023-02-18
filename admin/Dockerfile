FROM node:18-alpine

ENV NODE_OPTIONS="--max-old-space-size=8000"
COPY . /app
WORKDIR /app

RUN yarn install --frozen-lockfile --non-interactive --link-duplicates
RUN yarn build

CMD ["npx", "serve", "-l", "5001", "-s", "dist"]