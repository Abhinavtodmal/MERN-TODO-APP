# FROM node:18-alpine
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
# EXPOSE 5000
# CMD ["npm", "start"]

FROM node:18-alpine

WORKDIR /app

# Set build-time arguments (for optional build-time usage)
ARG MONGODB_ATLAS_URI
ARG JWT_SECRET

# Set environment variables (accessible at runtime)
ENV MONGODB_ATLAS_URI=$MONGODB_ATLAS_URI
ENV JWT_SECRET=$JWT_SECRET
ENV NODE_ENV=production
ENV PORT=5000

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy app source
COPY . .

EXPOSE 5000
CMD ["npm", "start"]