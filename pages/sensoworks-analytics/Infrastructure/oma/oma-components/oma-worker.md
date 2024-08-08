---
title: Worker
---

# OMA Worker

This component continuously polls a collection to see if there are new runs to do. Normally, this collection is the modals_queue one.

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

After the payload is found in the collection, the Worker will take the run request and execute the requested analysis. After the run is done, if there are no errors, the results will be saved inside the (by default) modals_analysis_results_<structure_id> collection. The payload inside the (by default) modals_analysis_<structure_id> collection will be updated with the results IDs. Finally, the payload on the modals_queue collection will be deleted. For more information of the exact format of the payloads, check this page: OMA NEW collections

After every status change of a run, a message is sent to the “output“ Kafka topic, normally used for websocket updates by the OMA API component.

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
| **Status** | **Description** |
|:---|:---|
| **READY** | The analysis has been created and it is ready to run |
| **QUEUED** | The run has been scheduled and is waiting to start |
| **RUNNING** | The analysis run is running |
| **DONE** | The run is done and the results are ready |
| **ERROR** | The run has ended in error |
| **ABORTED** | The run has been aborted by the user |

If a running analysis needs to be stopped (aborted), the Worker has to receive on the broadcast topic a payload the analysis_id key. If the specified ID is the same as the running analysis, the run will be stopped. If the specified ID is not the same or the payload does not contains the analysis_id key, the message will be ignored.

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
MYSQL_USERNAME: the MySQL username for the connection.
MYSQL_PASSWORD: the MySQL password for the connection.
MYSQL_HOST: the MySQL endpoint for reaching the DB.
MYSQL_PORT: the MySQL port used when connecting to the DB.
MYSQL_DATABASE: the MySQL schema containing all the tables.
AWS_ACCESS_KEY_ID: the AWS access key.
AWS_SECRET_ACCESS_KEY: the AWS secret access key.
AWS_REGION: the AWS region where the AWS services are located.
USE_S3_STRING_PATHS: if different from empty, the Worker searches S3 keys with names instead of IDs.
FILE_BUCKET: the name of the bucket with the raw files.
CACHE_BUCKET: the name of the bucket used by the Worker as cache.
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
