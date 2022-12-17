---
layout: default
title: Fog on-premise
nav_order: 3222
description: "Fog installation on-premise"
parent: Edge installation
grand_parent: Edge gateway
---

According to the architecture document, there are different types of Sensoworks Edge components available, each with its own unique features and capabilities. In addition, there are various ways to package each of these components, depending on the specific needs and requirements of your system. By considering the various types and packaging options for the Sensoworks Edge components, you can choose the solution that best fits your needs and goals.

<p align="center"><img src="../../assets/images/sensoworks-edge-fog-versions.jpg" width="75%" height="75%"></p>

The Fog gateway is an excellent choice for flexibility and versatility. While it does require a computer capable of running Python, this requirement is typically not an issue due to the Fog gateway's intended use compared to the C and C++ versions of the Edge gateways. In fact, even small computers like Raspberry Pi can be configured to run the Fog component. Overall, the Fog gateway's flexibility and adaptability make it a suitable option for a wide range of applications.

Depending on your needs, the Fog gateway (a.k.a. "micro" or "squirrel") can be installed in different ways:

<p align="center"><img src="../../assets/images/sensoworks-fog-micro-installation.jpg" width="50%" height="50%"></p>

# Pure python

Pre-requisites

- Python has to be installed into your system. If not, follow the instuctions from the main Python website: [python.org](https://www.python.org/)
- Install pip (the package installer for Python) following the instructions from [pip.pypa.io](https://pip.pypa.io/en/stable/)
- Install git following the instructions from [git-scm.com](https://git-scm.com/)
  - **NOTE**: If you don't want to install git, you can also download and unzip the pre-packaded release of the Fog Gateway. See here: [Fog gateway releases](https://github.com/sensoworks/sensoworks-fog-gateway/releases)

Optional:

- Install an MQTT provider like [mosquitto.org](https://mosquitto.org/) if not already available somewhere else. Alternatively, for testing purposes, you can use the testing environment of mosquitto online: [test.mosquitto.org](https://test.mosquitto.org/)

Once Python is installed, follow these instructions:

```
# Move into the parent directory where you want to install the Fog gateway
cd <parent directory where you want to install the Fog gateway>

# Download the fog gateway
git clone https://github.com/sensoworks/sensoworks-fog-gateway.git

# NOTE: Alternatively you can manually download the release from here: https://github.com/sensoworks/sensoworks-fog-gateway/releases and after that, unzip it

# Move into the fog gateway home
cd sensoworks-fog-gateway

# Install the requirements
pip install -r requirements.txt
```

DONE :-)

Now you are ready to run the Sensoworks Fog gateway.

The Sensoworks Fog gateway comes pre-packaged with a simple demo service, that monitors a simulated sensor. Follow this [**getting started guide**](#getting-started-guide).

# Dockerized standalone

Pre-requisites:

- Docker has to be installed on your system. If not, follow the instuctions from the main Docker website [docker.com](https://www.docker.com/)
- Install Docker compose. If not already installed, follow the instuctions from the main Docker compose website [docker compose](https://docs.docker.com/compose/)

Once **Docker** anche **Docker Compose** are installed, follow these instructions:

Without mqtt embedded:

```
#!/bin/bash

docker run --name sensoworks-fog-gateway sensoworks-fog-gateway:latest
```

With mqtt embedded:

```
#!/bin/bash

# Move into the directory you want to install the fog gateway
# cd <the parent directory where you want to install the Fog gateway>

# Download the fog gateway
git clone https://github.com/sensoworks/sensoworks-fog-gateway.git

# Note: Alternatively you can manually download the release from here: https://github.com/sensoworks/sensoworks-fog-gateway/releases and after that, unzip it

# Move into the fog gateway home
cd sensoworks-fog-gateway

# Move into the docker compose directory
cd docker

# Run the Docker container
docker-compose -d up
```

DONE :-)

Now you are ready to run the Sensoworks Fog gateway.

The Sensoworks comes pre-packaged with a simple demo service, that monitors a simulated sensor. Follow this [**getting started guide**](#getting-started-guide).

# Dockerized with EdgeX

TBD

# Dockerized with the Industrial Appliance

TBD

# Getting started guide

This guide is intended to provide a simple example of the functionality and configuration of the Sensoworks Fog gateway. The scenario presented in this guide is depicted below:

<p align="center"><img src="../../assets/images/sensoworks-fog-getting-started-guide.jpg" width="75%" height="75%"></p>

The simulator will send temperature data to a MQTT topic named **sensoworks/fog/southbound/t-001**. By default the simulator will send data every second, but this value can be changed, among other parameters, in the configuration file.

The Fog gateway will receive these messages and will perform these actions:

- Read the incoming message
- Write the raw data
- Elaborate and aggregate the incoming messages. Aggregation period will be 5 seconds
- Prepare the Sensoworks payload to call the Platform
- Save the elaboration both in a CSV and JSON files
- Call the Sensoworks platform

Pre-requisites (in addition to Python and MQTT):

- Install an MQTT client browser, such as for example [MQTT X](https://mqttx.app/)

```
# Start Mosquitto or verify that it is already running
mosquitto
```

Edit the config file of fhe simulator

```
cd getting_started_guide

```

If you are not using mosquitto on port 1883, edit the config file of fhe simulator to change it:

```
cd getting_started_guide

```

Set the parameters of the signal you want to simulate

vi sensoworks_fog_simulator.json

Edit the config file of fhe fog gateway

cd ..
cd config
vi ...

Open a shell window to start the Fog gateway

Optional step: Open the MQTT X application to register to "sensoworks/#"

```

```

Configuratin file:

```json
{
    "broker_host": "localhost",
    "broker_port": 1883,
    "topic": "sensoworks/fog/southbound/t-001",
    "username": "",
    "password": "",

    "amplitude_in_celsius": 10,
    "average_temperature_of_the_simulation": 2,
    "noise_amplitude_in_celsius": 0.2,
    "period_in_seconds": 60,
    "step_in_seconds": 1
}
```

