FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "src/rideController.js"]
EXPOSE 3002