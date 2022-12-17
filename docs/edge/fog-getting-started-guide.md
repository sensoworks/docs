---
layout: default
title: Fog getting started guide
nav_order: 33
description: "Fog getting started guide"
parent: Edge gateway
has_children: false
---

# Fog getting started guide

This guide is intended to provide a simple example of the functionalities and configuration of the Sensoworks Fog gateway. The scenario presented in this guide is depicted below:

<p align="center"><img src="../assets/images/sensoworks-fog-getting-started-guide.jpg" width="75%" height="75%"></p>

The simulator will send temperature data to a MQTT topic named:

- sensoworks/fog/southbound/t-001

> **NOTE**: By default the simulator will send data every second, but this value can be changed, among other parameters, in the configuration file of the simulator.

Starting from MQTT the Sensoworks Fog gateway will perform these actions:

- Read the incoming message from MQTT
- Write the raw messages to disk
- Elaborate and aggregate the incoming messages. The aggregation period is set by defaul for this getting started guide to 5 seconds, but it can be changed in the Sensoworks Fog configuration file
- Prepare the Sensoworks payload to call the platform
- Save the aggregated data in a CSV and a JSON file
- Call the Sensoworks platform via HTTP

# Pre-requisites

> **NOTE**: Depending on which version of the Sensoworks Edge/Fog component you installed, some requirement may already be met.

- Install an MQTT client browser, such as for example [MQTT X](https://mqttx.app/)

# Steps

## Start Mosquitto and a MQTT Browser

> **NOTE**: If you are using a localhost mosquitto on port 1883, you can just skip this part.

```sh
# Verify if the MQTT server is running
ps -ef | grep mosquitto

# Run mosquitto if not running
mosquitto
```

Run the MQTT client browser.

## Edit the config file of fhe simulator

```sh
cd getting_started_guide
```

```sh
cd getting_started_guide

# Set the parameters of the signal you want to simulate
vi sensoworks_fog_simulator.json
```

Edit the config file of fhe fog gateway

```sh
cd ..
cd config
vi ...

Open a shell window to start The Sensoworks Fog gateway

Optional step: Open the MQTT X application to register to "sensoworks/#"

```

JSON configuratin file

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
