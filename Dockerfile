# Use an official Node.js runtime as a parent image
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Use an official NGINX image to serve the app
FROM nginx:alpine

# Copy the build output to the NGINX html directory
COPY --from=build /app/build /usr/share/nginx/html

# Ensure the markdown files are copied to the correct location inside the container
COPY public/markdown /usr/share/nginx/html/markdown

# Copy custom NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80

# Run NGINX
CMD ["nginx", "-g", "daemon off;"]
