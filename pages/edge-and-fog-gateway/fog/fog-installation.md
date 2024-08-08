# Fog installation

The Sensoworks Fog gateway is an excellent choice for flexibility and versatility. While it does require a computer capable of running Python, this requirement is typically not an issue due to the Sensoworks Fog gateway's intended use compared to the C and C++ versions of fhe Sensoworks Edge gateways. In fact, even small computers like Raspberry Pi can be configured to run the Fog component. Overall, the Sensoworks Fog gateway's flexibility and adaptability make it a suitable option for a wide range of applications.

Depending on your needs, the Sensoworks Fog gateway (a.k.a. "micro" or "squirrel") can be installed in different ways:

<p align="center"><img src="/images/sensoworks-fog-micro-installation.jpg" width="50%" height="50%"></p>

## Pure python

Pre-requisites:

- Python has to be installed into your system. If not, follow the instuctions from the main Python website: [python.org](https://www.python.org/)
- Install pip (the package installer for Python) following the instructions from [pip.pypa.io](https://pip.pypa.io/en/stable/)
- Install git following the instructions from [git-scm.com](https://git-scm.com/)
  - **NOTE**: If you don't want to install git, you can also download and unzip the pre-packaded release of fhe Sensoworks Fog gateway. See here: [Fog gateway releases](https://github.com/sensoworks/sensoworks-fog-gateway/releases)

Optional:

- Install an MQTT provider like [mosquitto.org](https://mosquitto.org/) if not already available somewhere else. Alternatively, for testing purposes, you can use the testing environment of mosquitto online: [test.mosquitto.org](https://test.mosquitto.org/)

Once the pre-requirements are met, follow these instructions:

```sh
# Move into the parent directory where you want to install the Sensoworks Fog gateway
cd <parent directory where you want to install the Sensoworks Fog gateway>

# Download the Sensoworks Fog gateway
git clone https://github.com/sensoworks/sensoworks-fog-gateway.git

# NOTE: Alternatively you can manually download the release from here: https://github.com/sensoworks/sensoworks-fog-gateway/releases and after that, unzip it

# Move into the Sensoworks Fog gateway home
cd sensoworks-fog-gateway

# Install the requirements
pip install -r requirements.txt
```

✅ DONE :-)

Now you are ready to run the Sensoworks Fog gateway.

The Sensoworks Fog gateway comes pre-packaged with a simple demo service, that monitors a simulated sensor. Follow this [**Quickstart guide**](./fog-quickstart-guide.md).

## Dockerized standalone

Pre-requisites:

- Docker has to be installed on your system. If not, follow the instuctions from the main Docker website [docker.com](https://www.docker.com/)

Once **Docker** is installed, follow these instructions:

```sh
# If not already done, create a directory for the runtime of the Sensoworks Fog gateway
mkdir fog-runtime
cd fog-runtime

# Set the local variable to this runtime HOME for the Sensoworks Fog gateway
export SFG_RUNTIME_HOME=$(pwd)

# Prepare these directories before to start the Dockerized version of the Fog gateway
mkdir logs
mkdir output
mkdir config

# If not already done, copy the example configuration file from the Docker image, in order to modify it
docker run --rm -it --name sensoworks_fog_gateway \
           -v ${SFG_RUNTIME_HOME}/logs:/sensoworks_fog_gateway/logs \
           -v ${SFG_RUNTIME_HOME}/output:/sensoworks_fog_gateway/output \
           sensoworks/sensoworks_fog_gateway:latest \
           cat config/sensoworks_fog_gateway_getting_started_guide.json > config/sensoworks_fog_gateway_getting_started_guide.json

# Modify the configuration file if necessary
vi config/sensoworks_fog_gateway_getting_started_guide.json
```

> **NOTE**: Since you will be running the docker containerized version of the Sensorks Fog gateway, use the IP address of the host machine or use the alias host.docker.internal

Locate this portion of the configuration and change it to point to the address where the MQTT server is located.

```json
        ...
        "readers": [
            {
                "header": {
                    "id": "src.southbound.readers.mqtt_client_subscriber",
                    "module_path": "src.southbound.readers.mqtt_client_subscriber",
                    "class": "MQTTClientSubscriber",
                    "description": "Read from a MQTT topic",
                    "input": null,
                    "mandatory_tbf": true,
                    "enabled": true
                },
                "parameters": {
                    "broker_host": "localhost",
                    "_comment_broker_host": "If you are running the docker container on a linux machine, use the IP address of the host machine or host.docker.internal",
                    "broker_port": 1883,
                    "topics": [
                        "sensoworks/fog/southbound/t-001"
                    ],
                    "input_type": "json",
                    "blocking_time_in_dequeue": 10
                }
            }
        ],
        ...
```

✅ DONE :-)

The Sensoworks Fog gateway comes pre-packaged with a simple demo service, that monitors a simulated sensor. Follow this [**Quickstart guide**](./fog-quickstart-guide.md).

## Dockerized with EdgeX

TBD

## K3S

TBD

## Dockerized with the Industrial Appliance InGateway902

TBD
