# Docker Compose

## steps to run multi container project
1. get/make docker images/ Dockerfiles of individual containers
2. create a docker-compose.yaml
3. run docker compose
    > `docker-compose up`

## restart policy
restarts a container based on configuartion

| value | significance |
| - | - |
| `"no"` | never sttempt to resart container |
| `always` | always restart the container |
| `on-failure` | restart the container if it stops with an error code (non 0) |
| `unless-stopped` | always restart unless forcibly stopped |

