FROM node:20-alpine AS development

WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this first prevents re-running npm install on every code change.
COPY package*.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN npm install -g pnpm
RUN pnpm install

# Copy local code to the container image.
COPY . .

# Run the application in development mode (assuming 'start:dev' script exists in package.json)
CMD ["pnpm", "run", "dev"]