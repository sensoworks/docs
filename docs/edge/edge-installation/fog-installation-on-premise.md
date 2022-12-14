---
layout: default
title: Fog on-premise
nav_order: 3222
description: "Fog installation on-premise"
parent: Edge installation
grand_parent: Edge gateway
---

Depending on your needs, the Fog gateway (micro) can be installed in different ways:

<p align="center"><img src="/docs/assets/images/sensoworks-fog-micro-installation.jpg" width="100%" height="100%"></p>

# Pure python

Pre-requisites

- Python has to be installed into your system. If not, follow the instuctions from the main Python website: [python.org](https://www.python.org/)
- Install pip (the package installer for Python) following the instructions from [pip.pypa.io](https://pip.pypa.io/en/stable/)
- Install git following the instructions from [git-scm.com](https://git-scm.com/)
  - NOTE: If you don't want to install git, you can also download and unzip the pre-packaded release of the Fog Gateway. See here: [Fog gateway releases](https://github.com/sensoworks/sensoworks-fog-gateway/releases)

Optional:

- Install an MQTT provider like [mosquitto.org](https://mosquitto.org/) if not already available somewhere else

Once Python is installed, follow these instructions:

```console
#!/bin/bash

# cd into the directory you want to install the fog gateway
# cd <the parent directory where you want to install the Fog Gateway>

# Download the fog gateway
$ git clone https://github.com/sensoworks/sensoworks-fog-gateway.git

# Note: Alternatively you can manually download the release from here: https://github.com/sensoworks/sensoworks-fog-gateway/releases and after that, unzip it

# cd into the fog gateway home
$ cd sensoworks-fog-gateway

# Install the requirements
$ pip install -r requirements.txt
```

DONE :-)

Now you are ready to run the Senworks Fog

The Sensoworks comes pre-packaged with a simple demo service, that monitors a simulated temperature sensor. Follow this **getting started guide**:

```console
#!/bin/bash

ddd
ddd
```

# Dockerized standalone

Pre-requisites:

- Docker has to be installed on your system. If not, follow the instuctions from the main Docker website [docker.com](https://www.docker.com/)
- Install Docker compose. If not already installed, follow the instuctions from the main Docker compose website [docker compose](https://docs.docker.com/compose/)

Once **Docker** anche **Docker Compose** are installed, follow these instructions:

Without mqtt embedded:

```console
#!/bin/bash

$ docker run --name sensoworks-fog-gateway sensoworks-fog-gateway:latest
```

With mqtt embedded:

```console
#!/bin/bash

# cd into the directory you want to install the fog gateway
# cd <the parent directory where you want to install the Fog Gateway>

# Download the fog gateway
$ git clone https://github.com/sensoworks/sensoworks-fog-gateway.git

# Note: Alternatively you can manually download the release from here: https://github.com/sensoworks/sensoworks-fog-gateway/releases and after that, unzip it

# Move into the fog gateway home
$ cd sensoworks-fog-gateway

# Move into the docker compose directory
$ cd docker

edge

# Run the Docker container
docker-compose -d up

# Access the console by opening an internet browser on this address
# https://localhost:TBD/fog-console
```

# Dockerized with EdgeX

# Dockerized with the Industrial Appliance
