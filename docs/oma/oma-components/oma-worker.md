---
layout: default
title: OMA Worker
nav_order: 2
description: "OMA Worker"
parent: OMA Components
grand_parent: OMA
has_children: false
---

# OMA Worker

This component continuously polls a collection to see if there new run to do. Normally, this collection is the modals_queue one.

The expected payload output is the following (values are examples):
```
{
    "status": "QUEUED",
    "structure_id": "6426ff08edc3cbd39eac2a93",
    "analysis_id": "65e08e66bfe58ba848bccee0",
    "type": "PREPROCESSING"
}
```

Possible values for the type are: PREPROCESSING, FDD and SSI.

After the payload is found in the collection, the Worker will take the run request and execute the requested analysis. After the run is done, if
there are no error, the results will be saved inside the (by default) modals_analysis_results_<structure_id> collection. The payload
inside the (by default) modals_analysis_<structure_id> collection will be updated with the results IDs. Finally, the payload on the
modals_queue collection will be deleted. For more information of the exact format of the payloads, check this page: OMA NEW collectio
ns

After every status change of a run, a message is sent to the “output“ Kafka topic, normally used for websocket updates by the OMA API
component.

The message payload has the following format (values are examples):
```
{
    "tenant_id": 9,
    "user_id": 7,
    "document_id": "65e08e66bfe58ba848bccee0",
    "run_type": "SSI",
    "status": "RUNNING"
}
```

Possible statuses after the run of an analysis are:

```
QUEUED
RUNNING
DONE
ERROR
ABORTED
```
If a running analysis needs to be stopped (aborted), the Worker has to receive on the broadcast topic a payload the analysis_id key. If the
specified ID is the same as the running analysis, the run will be stopped. If the specified ID is not the same or the payload does not contain
the analysis_id key, the message will be ignored.

## Environment variables

```
SLEEP_TIME: number of second for polling the queue MongoDB collection.
DATA_PATH: the base path where the input CSV are saved.
LOGS_PATH: the directory where the log files will be put.
MONGODB_DATABASE: the database (schema) of the OMA collections.
MONGODB_DATABASE_MEASURES: the database (schema) of the measures. This is normally separated from the OMA DB.
MONGODB_DOMAIN: the MongoDB domain used in the creation of the endpoint.
MONGODB_PORT: the MongoDB port used in the creation of the endpoint.
MONGODB_OPTIONS: non mandatory options to use during the MongoDB connection. Example: "authSource=admin"
MONGODB_USERNAME: the MongoDB username for the connection.
MONGODB_PASSWORD: the MongoDB password for the connection.
MONGODB_PREFIX: the type of connection to MongoDB. Normally is "mongodb" or "mongodb+srv".
MONGODB_QUEUE_COLLECTION: the name of the queue collection where the polling needs to be done.
MONGODB_STRUCTURE_COLLECTION: the name of the collection where the structures are saved.
MONGODB_RUN_COLLECTION: the name prefix of the collection where analyses are saved. Example: modals_analysis_6426ff08edc3cbd39eac2a93
export MONGODB_RES_COLLECTION: the name prefix of the collection where analyses results are saved. Example:
modals_analysis_results_6426ff08edc3cbd39eac2a93
MONGODB_MEASURE_COLLECTION: the name prefix of the collection where the measures are saved. Example: measures_43
KAFKA_BROKER: the Kafka endpoint.
KAFKA_TOPIC_BROADCAST: the topic for the consumer. On this topic the Worker expects to receive the abort requests.
KAFKA_CONSUMER_GROUP: the consumer group for the consumer topic. This is mandatory to set, but it is not currently used by the Worker.
KAFKA_TOPIC_OUTPUT: the topic where the change of analyses status will be sent.
```
## Starting the Worker

The worker can be started with the following command:
```
1 python3 worker.py
```

To launch the unit test, use the following command from the home of the project:

```
1 pytest tests/
```
