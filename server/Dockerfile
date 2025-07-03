FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
# DO NOT use ARG/ENV for secrets here! They will be passed at runtime.
EXPOSE 5000
CMD ["npm", "start"]