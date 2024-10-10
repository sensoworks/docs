
# Tasks Manual

Index

    1. Network
        <i>These tasks are useful to receive or send data over the network</i>

        Available Tasks:      
        • ftp_in
        • mqtt_in
        • seedlink_in
        • http_out
        • s3_out

	2. Reader
       <i>These tasks are useful to read data from file</i>
        
        Available Tasks:      
        • csv_reader

    3. Data Transformation
    <i>Each of these tasks transforms data in some way</i>

	•	Aggregator: Combines data from multiple sources.
	•	Classifier: Assigns categories or labels to data based on attributes.
	•	Mapper: Maps data fields from one schema to another.
	•	Converter: Converts data formats or types.
            
    Available Tasks:      
    • id_mapper  
    • payload_converter
    • timeslot_aggregator

    5. Machine_learning
    <i> These task perform machine learning model to extract information and insight from data </i>

     Available Tasks:
     • water_leak_detection

## NETWORK

### mqtt_in

Description:

The mqtt_in task connects to an MQTT broker to receive messages on specific topics. Received messages are then sent to the output queue for further processing.

Example Configuration:

{
  "task_id": "mqtt_input",
  "type": "mqtt_broker",
  "params": {
    "broker_url": "mqtt.example.com",
    "broker_port": 1883,
    "mqtt_topics": ["sensors/accelerometer/#"],
    "qos": 1,
    "keep_alive": 60,
    "use_tls": false,
    "username": "your_username",
    "password": "your_password",
    "tls_params": {}
  },
  "dependencies": [],
  "instances": 1
}

Explanation of Parameters:

	•	broker_url: Address of the MQTT broker to connect to.
	•	broker_port: Port of the MQTT broker. The default is 1883 for unencrypted connections.
	•	mqtt_topics: List of topics to subscribe to. You can use wildcards like # for multiple subscriptions.
	•	qos: Quality of Service level for message delivery. Can be 0, 1, or 2.
	•	keep_alive: Keep-alive interval in seconds to maintain the connection to the broker.
	•	use_tls: Boolean indicating whether to use an encrypted TLS connection. Set to true if the broker requires TLS.
	•	username and password: Credentials for authentication with the MQTT broker, if required.
	•	tls_params: Additional parameters for TLS configuration, such as certificates and certificate requirements.
	•	Example of tls_params:

{
  "ca_certs": "/path/to/ca.crt",
  "certfile": "/path/to/client.crt",
  "keyfile": "/path/to/client.key",
  "cert_reqs": "CERT_REQUIRED"
}

### seedlink_in

Description:

The seedlink_in task connects to a SeedLink server to receive real-time seismic data from specified sensors. SeedLink is a protocol for streaming seismic data.

Example Configuration:

{
  "task_id": "66fea2b7454b581799e48a67",
  "type": "seedlink_in",
  "params": {
    "seedlink_server": "network.example.org:16241",
    "sensors": [
      "CA1", "CA2", "CA3", "CA4", "CA5", "CA6",
      "CB1", "CB2", "CB3", "CB4", "CB5", "CB6",
      "CC1", "CC2", "CC3", "CC4", "CC5", "CC6",
      "CD1", "CD2", "CD3", "CD4", "CD5", "CD6",
      "CE1", "CE2", "CE3", "CE4", "CE5", "CE6"
    ],
    "duration": 10
  },
  "dependencies": [],
  "instances": 1
}

Explanation of Parameters:

	•	seedlink_server: Address and port of the SeedLink server to connect to (e.g., "hostname:port").
	•	sensors: List of sensor codes from which to receive data. Each code corresponds to a specific sensor.
	•	duration: Duration in seconds to keep the connection to the SeedLink server open. Set to 0 or omit for a continuous connection.
	•	dependencies: As an input task, it generally has no dependencies.
	•	instances: Number of instances of the task. Usually 1 to avoid conflicts in data reception.

### http_out

Description:

The http_out task sends data via HTTP POST to a specified endpoint. It supports batch sending and data compression.

Example Configuration:

{
  "task_id": "task3",
  "type": "http_sender",
  "params": {
    "api_key": "changeMe",
    "endpoint": "https://api.example.com/data",
    "compress": false,
    "batch_size": 100
  },
  "dependencies": ["task2"],
  "instances": 1
}

Explanation of Parameters:

	•	api_key: API key used for authentication with the HTTP endpoint. Replace "changeMe" with your actual API key.
	•	endpoint: URL of the endpoint to send data to via HTTP POST.
	•	compress: Boolean indicating whether to compress the data before sending. true to enable compression (typically gzip), false otherwise.
	•	batch_size: Number of messages to accumulate before sending them in a single batch. A value of 1 means data is sent immediately without batching.
	•	dependencies: Depends on the previous task, such as json_to_payload_converter.
	•	instances: Number of parallel instances of the task. Increasing this value may improve sending speed in high-volume scenarios.

## READER

### csv_reader

Description:

The csv_reader task reads CSV files from a specified path and sends the data row by row. It can handle large files using in-memory reading or streaming.

Example Configuration:

{
  "task_id": "task1",
  "type": "csv_reader",
  "params": {
    "csv_basepath": "/path/to/input/",
    "processing_dir": "/path/to/processing/",
    "processed_dir": "/path/to/processed/",
    "delimiter": ";",
    "header": 0,
    "use_in_memory": true,
    "chunksize": 1000
  },
  "dependencies": [],
  "instances": 1
}

Explanation of Parameters:

	•	csv_basepath: Path to the directory containing the CSV files to process. The task will read files present in this directory.
	•	processing_dir: Directory where CSV files are moved during processing. This helps prevent re-reading the same files.
	•	processed_dir: Directory where CSV files are moved after complete processing.
	•	delimiter: The delimiter used in the CSV files (e.g., , for standard CSV or ; for semicolon-separated CSV).
	•	header: Indicates whether the CSV file has a header row. 0 means the first row is the header. Set to None if there is no header.
	•	use_in_memory: Boolean that determines whether the CSV file should be read entirely into memory (true) or streamed (false). Streaming is recommended for very large files.
	•	chunksize: Number of rows to read per chunk during in-memory processing. Helps manage memory usage when reading large files.
	•	dependencies: List of tasks that this task depends on. For csv_reader, this is usually empty because it is an input task.
	•	instances: Number of parallel instances of this task to run. Usually 1 to avoid conflicts in file reading.

## DATA TRANSFORMATION

### payload_converter

Description:

This task converts row data into a specific payload format, remapping fields according to a provided mapping. It’s useful for transforming data into a standardized format before sending or further processing.

Example Configuration:

{
  "task_id": "task2",
  "type": "payload_converter",
  "params": {
    "mapping": {
      "timestamp": "timestamp",
      "CA1": "00.CA.acceleration_x",
      "CA2": "00.CA.acceleration_y",
      "CA3": "00.CA.acceleration_z",
      "CB1": "00.CB.acceleration_x",
      "CB2": "00.CB.acceleration_y",
      "CB3": "00.CB.acceleration_z",
      // ... other mappings ...
      "CE6": "01.CE.acceleration_z"
    }
  },
  "dependencies": ["task1"],
  "instances": 1
}

Explanation of Parameters:

	•	mapping: A dictionary that defines how fields in the input JSON should be mapped in the output payload. The key is the original field name, and the value is the desired field name in the payload.
	•	For example, "CA1": "00.CA.acceleration_x" means that the CA1 field in the input JSON will be mapped to 00.CA.acceleration_x in the output payload.
	•	dependencies: List of tasks that this task depends on. In this case, it depends on "task1", which could be an input task like csv_reader or seedlink_in.
	•	instances: Number of parallel instances of the task. Can be increased to improve performance if necessary.

General Considerations

	•	Instances: Increasing the number of instances for a task can improve performance through parallelism but may also increase resource management complexity. Use this parameter judiciously.
