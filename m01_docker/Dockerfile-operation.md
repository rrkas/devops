# Dockerfile Operations

| command | purpose |
|-|-|
| `FROM <image>`<br>`FROM <image>:<tag>`<br>`FROM <image>@<digest>` | defines base image |
| `MAINTAINER <name>` | set the Author field of the generated images |
| `RUN <command>`<br>`RUN ["<executable>", "<param1>", "<param2>"]` | runs a command |
| `CMD ["<executable>","<param1>","<param2>"]`<br>`CMD ["<param1>","<param2>"]`<br>`CMD <command> <param1> <param2>` | defines the startup command |
| `LABEL <key>=<value> [<key>=<value> ...]` | adds metadata to an image |
| `EXPOSE <port> [<port> ...]` | Informs Docker that the container listens on the specified network port(s) at runtime |
| `ENV <key> <value>`<br>`ENV <key>=<value> [<key>=<value> ...]` | sets the environment variable |
| `ADD <src> [<src> ...] <dest>`<br>`ADD ["<src>", ... "<dest>"]` | Copies new files, directories, or remote file URLs from `<src>` and adds them to the filesystem of the image at the path `<dest>` |
| `COPY <src> [<src> ...] <dest>`<br>`COPY ["<src>", ... "<dest>"]` | Copies new files or directories from `<src>` and adds them to the filesystem of the image at the path `<dest>` |
| `ENTRYPOINT ["<executable>", "<param1>", "<param2>"]`<br>`ENTRYPOINT <command> <param1> <param2>` | configure a container that will run as an executable |
| `VOLUME ["<path>", ...]`<br>`VOLUME <path> [<path> ...]` | Creates a mount point with the specified name and marks it as holding externally mounted volumes from native host or other containers |
| `USER <username or UID>` | sets the user name or UID to use when running the image |
| `WORKDIR </path/to/workdir>` | Sets the working directory |
| `ARG <name>[=<default value>]` | Defines a variable that users can pass at build-time to the builder with the `docker build` command using the `--build-arg <varname>=<value>` flag |
| `ONBUILD <Dockerfile INSTRUCTION>` | Adds to the image a trigger instruction to be executed at a later time, when the image is used as the base for another build. The trigger will be executed in the context of the downstream build, as if it had been inserted immediately after the FROM instruction in the downstream Dockerfile. |
| `STOPSIGNAL <signal>` |  sets the system call signal that will be sent to the container to exit |
| `HEALTHCHECK [<options>] CMD <command>`<br>`HEALTHCHECK NONE` | Tells Docker how to test a container to check that it is still working |
| `SHELL ["<executable>", "<param1>", "<param2>"]` | Allows the default shell used for the shell form of commands to be overridden. |
