# use existing image
FROM alpine

# download and install dependencies
RUN apk add --update redis
RUN apk add --update gcc

# start command of container
CMD ["redis-server"]