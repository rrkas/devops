FROM node:alpine
WORKDIR /usr/nodeapp

# copying package.json only, saves build time if no dependencies are changed
COPY ./package.json ./
# costly step
RUN npm install

# copying rest files
COPY ./ ./
CMD ["npm", "start"]
