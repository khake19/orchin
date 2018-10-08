FROM node:10

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# Bundle source code
COPY . .
