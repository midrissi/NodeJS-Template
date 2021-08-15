FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

# Add build dependencies
COPY package*.json ./
RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
