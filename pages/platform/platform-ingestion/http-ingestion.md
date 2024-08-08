---
title: Datagate HTTP ingestion
description: Datagate HTTP ingestion
---

# HTTP ingestion
### Datagate HTTP ingestion
This API is used to send data to the platform.

For MQTT ingestion, see this page instead: [Datagate MQTT ingestion](platform-mqtt.md)

```
POST https://datagate.sensoworks.com/datagate/sensoworks/datagate
```

#### Query string
- <span style="color:red">network</span>: the ID of the network where we are sending the telemetry data.

#### Authentication
The bearer token can be copied from the dashboard.

#### Body example
```json
{
   "things": {
       "ThingName1": {
           "DeviceName1": {
               "acceleration_x": 0.015285,
               "acceleration_y": 0.017928,
               "acceleration_z": 0.019375
           },
           "DeviceName2": {
               "purified_deformation": -171.3594737,
               "temperature": 18.883839333,
               "purified_tension": -0.0008765667,
               "stretching_compression": -0.0171352333,
               "tension": 0.0004047667,
               "relative_strain": 1.0123e-06,
               "deformation": 88.8803413
           }
       },
       "ThingName2": {
           "DeviceName1": {
               "is_over_threashold": true,
               "metadata": {
                   "device_brand": "eyJhbGciOiJSUzI1N..."
               }
           },
           "DeviceName2": {
               "rotations": [
                   12.876,
                   87.34,
                   9.563
               ]
           }
       }
   },
   "timestamp": 1632410462000
}
```

#### Responses
- 201 (Created): given when telemetry data of an already present device is received
- 202 (Accepted): given when the autoprovisioning is enabled and a new device is received

---

### List of networks
This API returns the networks of an user.

```
GET https://demo.sensoworks.com/foreman/sensoworks/api/network
```

#### Query string
- <span style="color:red">page</span>: the results page to show. Starts from 0.
- <span style="color:red">limit</span>: the number of results per page. For example, 10.
- <span style="color:red">sort</span>: the results sorting (asc or desc).

#### Authentication
The bearer token given at the login.

#### Response body
```json
[
   {
       "id": 107,
       "creationTime": 1699435072000,
       "updateTime": 1716455776000,
       "configuration": null,
       "version": 32,
       "brandNew": false,
       "endpoint": null,
       "protocol": null,
       "name": "BRIDGE",
       "enabled": true,
       "description": "Network to monitor the bridge",
       "autoprovisioning": true,
       "tenant": {},
       "coordinates": {
           "latitude": 40.736677,
           "longitude": 14.588422
       },
       "users": [],
       "thingsAmount": 1,
       "devicesAmount": 16,
       "apiKey": "eyJhbGciOiJSUzI1N...",
       "ttl": null,
       "properties": [],
       "componentSettingId": 36
   }
]
```

---

### List of things
This API returns the things of a network.

```
GET https://demo.sensoworks.com/foreman/sensoworks/api/network/<network_id>/thing
```

#### Path variables
- network_id: the ID of the network from which list the things.

#### Query string
- <span style="color:red">page</span>: the results page to show. Starts from 0.
- <span style="color:red">limit</span>: the number of results per page. For example, 10.

#### Authentication
The bearer token given at the login.

#### Response body
```json
[
   {
       "id": 1379,
       "creationTime": 1711373028000,
       "updateTime": 1713454660000,
       "configuration": "{}",
       "version": 3,
       "brandNew": false,
       "physicalId": "ThingName",
       "type": {
           "id": 1,
           "creationTime": 1643127402000,
           "updateTime": null,
           "configuration": null,
           "name": "GENERIC_TYPE",
           "description": null
       },
       "networkId": 170,
       "devicesAmount": 5,
       "devices": [],
       "properties": [],
       "enabled": true,
       "componentSettingId": 38
   }
]
```

---

### List of devices
This API returns the devices of a thing.

```
GET https://demo.sensoworks.com/foreman/sensoworks/api/network/<network_id>/thing/<thing_name>/device
```


#### Path variables
- network_id: the ID of the network from which list the devices.
- thing_name: the name of the thing from which list the devices.

#### Query string
- <span style="color:red">page</span>: the results page to show. Starts from 0.
- <span style="color:red">limit</span>: the number of results per page. For example, 10.

#### Authentication
The bearer token given at the login.

#### Response body
```json
[
   {
       "id": 12288,
       "creationTime": 1711373028000,
       "updateTime": 1711373631000,
       "configuration": "{}",
       "version": 1,
       "brandNew": false,
       "physicalId": "DeviceName",
       "type": {
           "id": 1,
           "creationTime": 1643127402000,
           "updateTime": null,
           "configuration": null,
           "name": "GENERIC_TYPE",
           "description": null
       },
       "thingPhysicalId": "ThingName",
       "probes": [],
       "properties": [
           {
               "key": "Brand",
               "value": "BrandName",
               "type": "text"
           },
           {
               "key": "Model",
               "value": 123,
               "type": "number"
           }
       ],
       "enabled": true,
       "componentSettingId": null
   }
]
```

---

### Telemetry data last readings
This API returns the last readings of every device in a network.

```
GET https://demo.sensoworks.com/foreman/sensoworks/api/network/<network_id>/readings
```


#### Path variables
- network_id: the ID of the network from which list the devices.

#### Query string
- <span style="color:red">page</span>: the results page to show. Starts from 0.
- <span style="color:red">limit</span>: the number of results per page. For example, 10.
- <span style="color:red">sort</span>: the results sorting (asc or desc).

#### Authentication
The bearer token given at the login.

#### Response body
```json
[
   {
       "week": 15,
       "month": 4,
       "hour": 10,
       "year": 2023,
       "deviceKey": "107:ThingName:DeviceName",
       "_id": "64353cd912769e56ccb824f2",
       "state": {
           "acceleration_x": {
               "min": 0.01507,
               "avg": 0.015197,
               "max": 0.015285
           },
           "acceleration_y": {
               "min": 0.017686,
               "avg": 0.017836,
               "max": 0.017928
           },
           "acceleration_z": {
               "min": 0.018365,
               "avg": 0.018877,
               "max": 0.019375
           }
       },
       "device": {
           "physicalId": "DeviceName",
           "id": 337,
           "thing": {
               "physicalId": "ThingName",
               "id": 129,
               "enabled": true,
               "network": {
                   "id": 37
               }
           },
           "enabled": true
       },
       "day": 11,
       "timestamp": 1681209351866,
       "minute": 35
   }
]
```

---

### Telemetry data all readings
This API returns the last readings of every device in a network.

```
GET https://demo.sensoworks.com/foreman/sensoworks/api/network/<network_id>/thing/<thing_name>/device/<device_name>/readings?from=1681164000000&to=1681250400000&agg_value=acceleration_z.avg&agg_clauses=YEAR,MONTH,DAY&agg_label=data
```



#### Path variables
- network_id: the ID of the network from which to get the telemetry data.
- thing_name: the name of the thing from which to get the telemetry data.
- device_name: the name of the device from which to get the telemetry data.

#### Query string
- <span style="color:red">from</span>: the start timestamp of the telemetry chunk we want. Example value: 1681164000000
- <span style="color:red">to</span>: the end timestamp of the telemetry chunk we want. Example value: 1681250400000
- <span style="color:red">agg_value</span>: the key name of the telemetry data we want to visualize. Example value: acceleration_z.avg
- <span style="color:red">agg_clauses</span>: the data aggregation we want to use. Example value: YEAR,MONTH,DAY
- <span style="color:red">agg_label</span>: under what key name we want the aggregation keys (avg, max, min, etc.) positioned. Example value: data.

#### Authentication
The bearer token given at the login.

#### Response body
```json
[
   {
       "data": {
           "avg": 0.0031330034843205577,
           "min": -0.011709,
           "dev": 0.004194102320074828,
           "max": 0.015906,
           "count": 1435
       },
       "_id": "20230411"
   }
]
```
