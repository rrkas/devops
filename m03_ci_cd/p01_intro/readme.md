# Intro

## Creating sample project
> `npm install -g create-react-app`  
> `create-react-app frontend`

## npm commands

- npm run start
- npm run test
- npm run build

## Different Dockerfile for development and production

- development: Dockerfile.dev
- production: Dockerfile

## commands

### development 
> `docker build -f Dockerfile.dev -t rrka79wal/cicd:intro .`  
> `docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app rrka79wal/cicd:intro`

### production
