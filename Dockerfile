# 1. Use official Node.js base image
FROM node:18-alpine

# 2. Set the working directory inside the container
WORKDIR /usrsrc/app

# 3. Copy package.json and package-lock.json first (for caching dependencies)
COPY package*.json . 

# 4. Install dependencies
RUN npm install 


# 5. Copy the rest of the application code
COPY . .

# 6. Expose the port your app runs on
EXPOSE 3000

# 7. Define the command to run the app
CMD ["npm", "start"]
