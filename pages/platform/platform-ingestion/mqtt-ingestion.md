---
title: Datagate MQTT ingestion
description: Datagate MQTT ingestion
---

# Datagate MQTT ingestion

## Introduction
The Sensoworks IoT platform can receive data via the MQTT protocol. The platform is capable of reading the devices telemetry data from topics in a MQTT Broker. Here is an image of the flow with some example topics:
<p align="center"><img src="/sensoworks-docs/images/mqtt/mqtt-flow.png" width="100%" height="100%"></p>

## Requisites
To send MQTT data to the platform you need a MQTT Broker accessible from the deploy environment. A dedicated component of the platform (datagate-mqtt) must be installed in the deploy environment, otherwise it is not possible to read the MQTT data from the broker.

## MQTT Broker
The data of the devices/sensors to upload in the platform has to be sent on a topic of the Broker, where it is then read and saved in the platform.
The MQTT broker can be one of the many available and it is not necessary to install a precise one. That said, Sensoworks recommends EMQX as a broker, one of the more commonly used.
It is possible to find more info on the official site of EMQ: [https://www.emqx.io/](https://www.emqx.io/)

## Datagate MQTT
The Datagate-MQTT is the Sensoworks platform component which is needed for the ingestion of data from the MQTT Broker. This is not a base component of the platform, so you need to be sure it is installed before starting the data streaming. This component is usually installed on the Kubernetes cluster with all the other platform components.
The component reads data from all the topics that have this pattern:
```
<TENANT_ID>/measures/<NETWORK_ID>/<THING_NAME>/<DEVICE_NAME>
```
An example of a topic would be:
```
1/measures/1/BRIDGE/BRIDGE_A_1
```
The payload format is extremely flexible and can have any desired key and value inside the JSON. The only limitation is the fact that the _timestamp_ key must be present inside the payload. The _timestamp_ key must have the millisecond digits (13 digits in total). If the _timestamp_ key is not present, the data will be saved with the current timestamp. An example of a payload queued on a topic would be:
```json
{
   "timestamp": 1717064615000,
   "measure_1": 987.654,
   "measure_N": 123.456
}
```