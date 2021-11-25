# **Commands**

## **docker run**
creates and runs a container of an image
> `docker run <image name> [command]`  

Example:
> `docker run hello-world`  
> `docker run busybox echo hi there`  
> `docker run busybox ls`  
> `docker run busybox ping google.com`  

run with input allowed
> `docker run -it <image name> sh`

Example:
> `docker run -it redis sh`

## **docker ps**
lists running containers
> `docker ps`  

lists all containers ever created  
> `docker ps -a`  
> `docker ps --all`  

## **docker create**
creates a new container of an image
> `docker create <image name>`  
> `docker create hello-world`  


## **docker start**
runs an existing container without output
> `docker start <container ID>`  

runs an existing container with output (attach)
> `docker start -a <container ID>`  


## **docker system prune**
remove containers
> `docker system prune`

## **docker logs**
gets logs from a container
> `docker logs <container ID>`

## **docker stop**
stops a container and cleanup
> `docker stop <container ID>`

if the container doesnot stops in 10 secs, docker fall backs to **kill** the container.


## **docker kill**
kills a container immediately
> `docker kill <container ID>`

## **docker exec**
executes an additional command in a container
> `docker exec -it <container ID> <command>`

-it is for providing input to container

Example
>`docker exec -it b4b656c761e3 redis-cli`

running shell of the container
> `docker exec -it <container ID> sh`

exiting a container:
- ctrl + c
- ctrl + d