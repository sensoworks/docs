# Configuration Guide
## Sensoworks Fog Gateway

---

## Table of Contents

1. [Introduction](#introduction)
2. [System Architecture](#system-architecture)
3. [Configuration Structure](#configuration-structure)
4. [Available Tasks](#available-tasks)
   - [Data Input Tasks](#data-input-tasks)
   - [Processing Tasks](#processing-tasks)
   - [Data Output Tasks](#data-output-tasks)
5. [Modbus Client Configuration](#modbus-client-configuration)
6. [Configuration Examples](#configuration-examples)
7. [Dependency Management](#dependency-management)
8. [Best Practices](#best-practices)

---

## Introduction

The **Sensoworks Fog Gateway** is a modular edge-computing data processing system that allows you to create data acquisition, processing, and transmission pipelines through declarative JSON configurations.

The workflow engine (`WorkflowEngine`) manages the execution of interconnected tasks through thread-safe queues, enabling the construction of complex data flows without writing code.

### Key Features

- **Modular architecture**: composable and reusable tasks
- **Configurable pipelines**: defined through JSON files
- **Queue management**: asynchronous communication between tasks
- **Checkpointing**: automatic recovery after interruptions
- **Multi-instance**: horizontal scaling of tasks
- **Multiple protocols**: MQTT, Modbus, HTTP, FTP, Sparkplug B

---

## System Architecture

### Main Components

```
┌─────────────────────────────────────────────────────┐
│              MainSensoworksFogGateway               │
│                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────┐   │
│  │ConfigManager │  │EngineManager │  │StatusMgr │   │
│  └──────────────┘  └──────────────┘  └──────────┘   │
└─────────────────────────────────────────────────────┘
                           │
                           ▼
              ┌────────────────────────┐
              │   Workflow Engine      │
              │   (per flow)           │
              └────────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
   ┌────────┐        ┌────────┐        ┌────────┐
   │ Task 1 │───────▶│ Task 2 │───────▶│ Task 3 │
   │(Input) │ Queue  │(Process)│ Queue  │(Output)│
   └────────┘        └────────┘        └────────┘
```

### Execution Flow

1. **Configuration**: loading JSON files from the `config/` folder
2. **Initialization**: queue creation and task instantiation
3. **Execution**: each task operates in a separate thread
4. **Communication**: data passing through thread-safe queues
5. **Checkpointing**: periodic state saving

---

## Configuration Structure

### Basic Schema

```json
{
  "id": "unique_flow_identifier",
  "name": "Descriptive Flow Name",
  "description": "Detailed workflow description",
  "version": "1.0",
  "task_configs": [
    {
      "task_id": "task_identifier",
      "type": "task_type",
      "instances": 1,
      "dependencies": ["previous_task"],
      "params": {
        // Task-specific parameters
      }
    }
  ]
}
```

### Main Fields

#### Flow Level

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique workflow identifier |
| `name` | string | Yes | Readable workflow name |
| `description` | string | No | Workflow description |
| `version` | string | No | Workflow version |
| `task_configs` | array | Yes | Array of task configurations |

#### Task Level

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `task_id` | string | Yes | Unique task identifier in the flow |
| `type` | string | Yes | Task type (see [Available Tasks](#available-tasks)) |
| `instances` | integer | No | Number of parallel instances (default: 1) |
| `dependencies` | array | No | List of `task_id` dependencies |
| `params` | object | Yes | Task-specific parameters |

---

## Available Tasks

### Data Input Tasks

#### 1. `modbus_client`

**Description**: Periodic reading of Modbus TCP/IP registers

**Parameters**:

```json
{
  "host": "192.168.1.100",
  "port": 502,
  "slave_id": 1,
  "register_offset": 0,
  "polling_sec": 10,
  "input_mapping": {
    "temperature": {
      "address": [0, 1],
      "register_type": "HOLDING_REGISTER",
      "data_type": "FLOAT32",
      "decimals": 0
    },
    "pressure": {
      "address": [2, 3],
      "register_type": "INPUT_REGISTER",
      "data_type": "FLOAT32",
      "decimals": 2
    }
  }
}
```

**Detailed Parameters**:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `host` | string | "localhost" | Modbus server IP address |
| `port` | integer | 502 | Modbus TCP port |
| `slave_id` | integer | 1 | Modbus slave ID |
| `register_offset` | integer | 0 | Register address offset |
| `polling_sec` | integer | 10 | Polling interval in seconds |
| `input_mapping` | object | - | Variable mapping to read |

**Input Mapping - Variable Configuration**:

Each variable in `input_mapping` requires:

- **`address`**: Array of register addresses (e.g., `[0, 1]` for FLOAT32)
- **`register_type`**: Register type
  - `HOLDING_REGISTER`: Read/write registers
  - `INPUT_REGISTER`: Read-only registers
  - `DISCRETE_INPUT`: Discrete inputs (bool)
  - `COIL`: Coils (bool)
- **`data_type`**: Data type to read
  - `INT16`, `UINT16`: 16-bit integer (1 register)
  - `INT32`, `UINT32`: 32-bit integer (2 registers)
  - `INT64`, `UINT64`: 64-bit integer (4 registers)
  - `FLOAT32`: 32-bit float (2 registers)
  - `FLOAT64`: 64-bit float (4 registers)
  - `STRING`: String (N registers)
- **`decimals`**: (optional) For `INT*` types only, divides value by 10^decimals

**Output Format**:

```json
{
  "data": {
    "temperature": 25.5,
    "pressure": 1013.25
  },
  "metadata": {
    "timestamp": 1703340000000
  }
}
```

**Complete Modbus Example**:

```json
{
  "task_id": "plc_reader",
  "type": "modbus_client",
  "instances": 1,
  "params": {
    "host": "10.0.1.50",
    "port": 502,
    "slave_id": 1,
    "register_offset": 0,
    "polling_sec": 5,
    "input_mapping": {
      "tank_level": {
        "address": [0, 1],
        "register_type": "HOLDING_REGISTER",
        "data_type": "FLOAT32",
        "decimals": 0
      },
      "flow_rate": {
        "address": [2, 3],
        "register_type": "HOLDING_REGISTER",
        "data_type": "FLOAT32",
        "decimals": 2
      },
      "valve_status": {
        "address": [10],
        "register_type": "COIL",
        "data_type": "UINT16",
        "decimals": 0
      },
      "alarm_code": {
        "address": [20],
        "register_type": "INPUT_REGISTER",
        "data_type": "UINT16",
        "decimals": 0
      }
    }
  }
}
```

---

#### 2. `mqtt_client_subscriber`

**Description**: MQTT topic subscription with TLS support

**Parameters**:

```json
{
  "broker_url": "mqtt.example.com",
  "broker_port": 1883,
  "mqtt_topics": ["sensors/#", "devices/+/data"],
  "qos": 1,
  "keep_alive": 60,
  "use_tls": false,
  "username": "user",
  "password": "pass",
  "client_id": "fog_gateway_01",
  "tls_params": {
    "ca_certs": "/path/to/ca.crt",
    "certfile": "/path/to/client.crt",
    "keyfile": "/path/to/client.key"
  }
}
```

**Parameters**:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `broker_url` | string | "localhost" | MQTT broker URL |
| `broker_port` | integer | 1883 | Broker port (1883 or 8883 for TLS) |
| `mqtt_topics` | array | ["#"] | List of topics to subscribe to |
| `qos` | integer | 1 | Quality of Service (0, 1, 2) |
| `keep_alive` | integer | 60 | Keep-alive in seconds |
| `use_tls` | boolean | false | Enable TLS/SSL |
| `username` | string | null | Authentication username |
| `password` | string | null | Authentication password |
| `client_id` | string | task_id | MQTT client ID |
| `tls_params` | object | {} | TLS parameters (if `use_tls=true`) |

**Output Format**:

```json
{
  "data": {
    // MQTT message payload (parsed JSON or raw)
  },
  "metadata": {
    "topic": "sensors/temperature/01",
    "qos": 1,
    "retain": false,
    "timestamp": 1703340000000
  }
}
```

---

#### 3. `mqtt_sparkplug_subscriber`

**Description**: MQTT subscription with Sparkplug B Protobuf decoding

**Parameters**:

```json
{
  "broker_host": "sparkplug.example.com",
  "broker_port": 1883,
  "username": "spb_user",
  "password": "spb_pass",
  "client_id": "fog_spb_gateway",
  "keep_alive": 60,
  "clean_session": true,
  "topics": [
    "spBv1.0/group_id/NBIRTH/edge_node/+",
    "spBv1.0/group_id/NDATA/edge_node/+",
    "spBv1.0/group_id/DDATA/edge_node/+"
  ],
  "qos": 1,
  "sparkplug_enabled": true,
  "protobuf_enabled": true,
  "output_format": "json",
  "include_metadata": true
}
```

**Output Format**:

```json
{
  "data": {
    "timestamp": 1703340000000,
    "metrics": [
      {
        "name": "Temperature",
        "datatype": 9,
        "float_value": 25.5
      }
    ],
    "seq": 123
  },
  "metadata": {
    "topic": "spBv1.0/group/DDATA/node/device",
    "sparkplug_type": "DDATA"
  }
}
```

---

#### 4. `csv_reader`

**Description**: CSV file reading with checkpoint and type conversion support

**Parameters**:

```json
{
  "delimiter": ",",
  "header": 0,
  "headers_and_types": {
    "Timestamp": "type:datetime|format:%d/%m/%y %H:%M:%S|function:sec|rename:timestamp",
    "Temperature": "type:float|rename:temp",
    "DeviceID": "type:int|rename:device_id"
  },
  "csv_basepath": "/data/stage/",
  "processing_dir": "/data/processing/",
  "processed_dir": "/data/processed/",
  "sleep_duration": 5,
  "chunksize": 1000,
  "data_at_row": 0,
  "decimal_delimeter": "."
}
```

---

#### 5. `ftp_downloader`

**Description**: Periodic file download from FTP server

**Parameters**:

```json
{
  "host": "ftp.example.com",
  "username": "ftpuser",
  "password": "ftppass",
  "remote_dir": "/data/incoming",
  "output_dir": "/data/stage/",
  "sleep_duration": 300,
  "file_extensions": [".csv", ".json"],
  "recursive": false
}
```

---

#### 6. `json_reader`

**Description**: JSON file reading from filesystem

**Parameters**:

```json
{
  "json_basepath": "/data/json/",
  "processing_dir": "/data/processing/",
  "processed_dir": "/data/processed/",
  "sleep_duration": 5
}
```

---

#### 7. `random_number_generator`

**Description**: Random data generator for testing

**Parameters**:

```json
{
  "min_value": 0,
  "max_value": 100,
  "interval_sec": 10,
  "num_values": 5
}
```

---

### Processing Tasks

#### 1. `json_to_payload_converter`

**Description**: JSON structure conversion and mapping

**Parameters**:

```json
{
  "auto_generate_timestamp": true,
  "mapping": {
    "timestamp": "ts",
    "value": "reading.value",
    "device_id": "device.id",
    "sensor_type": "metadata.sensor_type"
  }
}
```

**How it works**:
- Maps fields from one JSON structure to another
- Supports nested paths with dot notation (e.g., `reading.value`)
- `auto_generate_timestamp`: generates UTC timestamp in milliseconds if not present

**Input Example**:
```json
{
  "data": {
    "value": 25.5,
    "device_id": "sensor_01",
    "sensor_type": "temperature"
  }
}
```

**Output Example**:
```json
{
  "data": {
    "ts": 1703340000000,
    "reading": {
      "value": 25.5
    },
    "device": {
      "id": "sensor_01"
    },
    "metadata": {
      "sensor_type": "temperature"
    }
  }
}
```

---

#### 2. `json_remapper`

**Description**: Complete remapping of nested JSON structures

**Parameters**:

```json
{
  "mapping": {
    "old.path.value": "new.path.value",
    "sensor.temp": "readings.temperature"
  },
  "default_value": null
}
```

---

#### 3. `json_filter`

**Description**: JSON message filtering based on conditions

**Parameters**:

```json
{
  "filter_key": "sensor_type",
  "filter_values": ["temperature", "humidity"],
  "filter_mode": "include"
}
```

---

#### 4. `timeslot_splitter`

**Description**: Data splitting into time windows

**Parameters**:

```json
{
  "timeslot_minutes": 5,
  "time_column": "timestamp"
}
```

---

#### 5. `timeslot_aggregator`

**Description**: Data aggregation by time windows

**Parameters**:

```json
{
  "timeslot_minutes": 15,
  "time_column": "timestamp",
  "aggregation_functions": {
    "temperature": "avg",
    "pressure": "max",
    "counter": "sum"
  }
}
```

---

#### 6. `column_data_converter`

**Description**: Data type conversion for specific columns

**Parameters**:

```json
{
  "conversions": {
    "temperature": "float",
    "timestamp": "datetime",
    "device_id": "string"
  }
}
```

---

### Data Output Tasks

#### 1. `http_sender`

**Description**: HTTP/HTTPS data sending with compression and batching

**Parameters**:

```json
{
  "endpoint": "https://api.example.com/ingest",
  "api_key": "your_api_key_here",
  "compress": false,
  "batch_size": 1,
  "streaming": true
}
```

**Parameters**:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `endpoint` | string | - | API endpoint URL |
| `api_key` | string | null | API key for Bearer authentication |
| `compress` | boolean | false | Enable gzip compression |
| `batch_size` | integer | 1 | Number of messages per batch |
| `streaming` | boolean | false | Streaming mode (send immediately) |

---

#### 2. `s3_sender`

**Description**: File upload to Amazon S3

**Parameters**:

```json
{
  "bucket_name": "my-iot-data",
  "aws_access_key_id": "AKIAXXXXX",
  "aws_secret_access_key": "secret",
  "region_name": "eu-west-1",
  "base_s3_path": "processed/"
}
```

---

#### 3. `csv_writer`

**Description**: Data writing in CSV format

**Parameters**:

```json
{
  "output_path": "/data/output/",
  "filename_pattern": "data_{timestamp}.csv",
  "delimiter": ",",
  "header": true
}
```

---

#### 4. `json_writer`

**Description**: Data writing in JSON format

**Parameters**:

```json
{
  "output_path": "/data/output/",
  "filename_pattern": "data_{timestamp}.json",
  "pretty_print": true
}
```

---

#### 5. `stdout_writer`

**Description**: Console output for debugging

**Parameters**:

```json
{
  "format_string": "Received: {data[value]} from {data[device_id]}",
  "print_interval": 0
}
```

---

#### 6. `raw_writer`

**Description**: Raw binary file writing

**Parameters**:

```json
{
  "output_path": "/data/raw/",
  "filename_pattern": "raw_{timestamp}.bin"
}
```

---

## Modbus Client Configuration

### Detailed Guide

The `modbus_client` task is one of the most used for data acquisition from PLCs and industrial devices.

### Modbus Registers

#### Register Types

| Type | Function Code | Access | Description |
|------|--------------|--------|-------------|
| `DISCRETE_INPUT` | 02 | R | Discrete inputs (boolean) |
| `COIL` | 01, 05, 15 | R/W | Coils (boolean) |
| `INPUT_REGISTER` | 04 | R | Input registers (16-bit) |
| `HOLDING_REGISTER` | 03, 06, 16 | R/W | Holding registers (16-bit) |

#### Data Types

| Type | Registers | Bytes | Range |
|------|-----------|-------|-------|
| `UINT16` | 1 | 2 | 0 - 65535 |
| `INT16` | 1 | 2 | -32768 - 32767 |
| `UINT32` | 2 | 4 | 0 - 4294967295 |
| `INT32` | 2 | 4 | -2147483648 - 2147483647 |
| `FLOAT32` | 2 | 4 | IEEE 754 single |
| `FLOAT64` | 4 | 8 | IEEE 754 double |

### Practical Example: Plant Monitoring

```json
{
  "task_id": "industrial_plc_monitor",
  "type": "modbus_client",
  "instances": 1,
  "params": {
    "host": "192.168.100.10",
    "port": 502,
    "slave_id": 1,
    "register_offset": 0,
    "polling_sec": 2,
    "input_mapping": {
      "temperature_reactor_1": {
        "address": [100, 101],
        "register_type": "HOLDING_REGISTER",
        "data_type": "FLOAT32",
        "decimals": 0
      },
      "pressure_inlet": {
        "address": [102, 103],
        "register_type": "HOLDING_REGISTER",
        "data_type": "FLOAT32",
        "decimals": 1
      },
      "flow_rate": {
        "address": [104],
        "register_type": "INPUT_REGISTER",
        "data_type": "INT16",
        "decimals": 2
      },
      "pump_running": {
        "address": [200],
        "register_type": "COIL",
        "data_type": "UINT16",
        "decimals": 0
      },
      "alarm_status": {
        "address": [300],
        "register_type": "DISCRETE_INPUT",
        "data_type": "UINT16",
        "decimals": 0
      }
    }
  }
}
```

### Modbus Troubleshooting

#### Common Errors

1. **Connection Timeout**
   - Check network connectivity
   - Verify firewall and ports
   - Confirm correct IP and port

2. **Invalid Register Address**
   - Check register offset
   - Review PLC documentation
   - Some PLCs use 1-based addressing

3. **Byte Order Issues**
   - Multi-register data may require swapping
   - Verify device endianness

---

## Configuration Examples

### Example 1: MQTT → HTTP Pipeline

**Scenario**: Receiving data from MQTT sensors, transformation, and cloud sending

```json
{
  "id": "mqtt_to_cloud",
  "name": "MQTT Sensors to Cloud API",
  "description": "MQTT sensor data acquisition and cloud API sending",
  "version": "1.0",
  "task_configs": [
    {
      "task_id": "mqtt_subscriber",
      "type": "mqtt_client_subscriber",
      "instances": 1,
      "params": {
        "broker_url": "mqtt.local",
        "broker_port": 1883,
        "mqtt_topics": ["sensors/temperature/#", "sensors/humidity/#"],
        "qos": 1,
        "keep_alive": 60,
        "client_id": "fog_gateway_sensors"
      }
    },
    {
      "task_id": "data_transformer",
      "type": "json_to_payload_converter",
      "instances": 2,
      "dependencies": ["mqtt_subscriber"],
      "params": {
        "auto_generate_timestamp": true,
        "mapping": {
          "timestamp": "ts",
          "value": "sensor.reading",
          "device_id": "device.id",
          "type": "sensor.type"
        }
      }
    },
    {
      "task_id": "cloud_sender",
      "type": "http_sender",
      "instances": 1,
      "dependencies": ["data_transformer"],
      "params": {
        "endpoint": "https://api.cloud.com/v1/ingest",
        "api_key": "sk_prod_xxxxxxxxxxxxx",
        "compress": true,
        "batch_size": 10,
        "streaming": false
      }
    }
  ]
}
```

---

### Example 2: Modbus → CSV with Aggregation

**Scenario**: Modbus PLC reading, 15-minute aggregation, CSV saving

```json
{
  "id": "modbus_aggregation_pipeline",
  "name": "Modbus PLC Data Aggregation",
  "description": "PLC data acquisition, time aggregation and CSV saving",
  "version": "1.0",
  "task_configs": [
    {
      "task_id": "plc_reader",
      "type": "modbus_client",
      "instances": 1,
      "params": {
        "host": "192.168.1.100",
        "port": 502,
        "slave_id": 1,
        "polling_sec": 5,
        "input_mapping": {
          "tank_level": {
            "address": [0, 1],
            "register_type": "HOLDING_REGISTER",
            "data_type": "FLOAT32",
            "decimals": 1
          },
          "flow_rate": {
            "address": [2, 3],
            "register_type": "HOLDING_REGISTER",
            "data_type": "FLOAT32",
            "decimals": 2
          },
          "pump_status": {
            "address": [10],
            "register_type": "COIL",
            "data_type": "UINT16",
            "decimals": 0
          }
        }
      }
    },
    {
      "task_id": "payload_converter",
      "type": "json_to_payload_converter",
      "instances": 1,
      "dependencies": ["plc_reader"],
      "params": {
        "auto_generate_timestamp": true,
        "mapping": {
          "timestamp": "ts",
          "tank_level": "measurements.tank_level",
          "flow_rate": "measurements.flow_rate",
          "pump_status": "status.pump"
        }
      }
    },
    {
      "task_id": "time_aggregator",
      "type": "timeslot_aggregator",
      "instances": 1,
      "dependencies": ["payload_converter"],
      "params": {
        "timeslot_minutes": 15,
        "time_column": "ts",
        "aggregation_functions": {
          "measurements.tank_level": "avg",
          "measurements.flow_rate": "avg",
          "status.pump": "max"
        }
      }
    },
    {
      "task_id": "csv_output",
      "type": "csv_writer",
      "instances": 1,
      "dependencies": ["time_aggregator"],
      "params": {
        "output_path": "/data/aggregated/",
        "filename_pattern": "plc_data_{date}.csv",
        "delimiter": ",",
        "header": true
      }
    }
  ]
}
```

---

### Example 3: FTP → Processing → S3

**Scenario**: CSV file download from FTP, processing, S3 upload

```json
{
  "id": "ftp_to_s3_pipeline",
  "name": "FTP to S3 Data Pipeline",
  "description": "FTP file download, processing and S3 upload",
  "version": "1.0",
  "task_configs": [
    {
      "task_id": "ftp_download",
      "type": "ftp_downloader",
      "instances": 1,
      "params": {
        "host": "ftp.datasource.com",
        "username": "datauser",
        "password": "datapass",
        "remote_dir": "/exports/daily",
        "output_dir": "/data/ftp_stage/",
        "sleep_duration": 3600,
        "file_extensions": [".csv"],
        "recursive": false
      }
    },
    {
      "task_id": "csv_reader",
      "type": "csv_reader",
      "instances": 1,
      "dependencies": ["ftp_download"],
      "params": {
        "delimiter": ";",
        "header": 0,
        "headers_and_types": {
          "DateTime": "type:datetime|format:%Y-%m-%d %H:%M:%S|function:sec|rename:timestamp",
          "Value": "type:float|rename:value",
          "Quality": "type:int|rename:quality"
        },
        "processing_dir": "/data/processing/",
        "processed_dir": "/data/processed/",
        "chunksize": 5000
      }
    },
    {
      "task_id": "data_filter",
      "type": "json_filter",
      "instances": 1,
      "dependencies": ["csv_reader"],
      "params": {
        "filter_key": "quality",
        "filter_values": [0, 192],
        "filter_mode": "include"
      }
    },
    {
      "task_id": "json_output",
      "type": "json_writer",
      "instances": 1,
      "dependencies": ["data_filter"],
      "params": {
        "output_path": "/data/processed_json/",
        "filename_pattern": "processed_{timestamp}.json",
        "pretty_print": false
      }
    },
    {
      "task_id": "s3_upload",
      "type": "s3_sender",
      "instances": 1,
      "dependencies": ["json_output"],
      "params": {
        "bucket_name": "company-iot-data",
        "aws_access_key_id": "AKIAIOSFODNN7EXAMPLE",
        "aws_secret_access_key": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
        "region_name": "eu-west-1",
        "base_s3_path": "processed/sensors/"
      }
    }
  ]
}
```

---

### Example 4: Sparkplug B → Multi-Stage Processing

**Scenario**: Sparkplug B data reception, metric extraction, multiple outputs

```json
{
  "id": "sparkplug_processing",
  "name": "Sparkplug B Multi-Output Pipeline",
  "description": "Sparkplug B acquisition with multiple outputs",
  "version": "1.0",
  "task_configs": [
    {
      "task_id": "sparkplug_subscriber",
      "type": "mqtt_sparkplug_subscriber",
      "instances": 1,
      "params": {
        "broker_host": "sparkplug.broker.com",
        "broker_port": 1883,
        "username": "spb_user",
        "password": "spb_pass",
        "topics": [
          "spBv1.0/factory/NDATA/line_01/+",
          "spBv1.0/factory/DDATA/line_01/+"
        ],
        "qos": 1,
        "sparkplug_enabled": true,
        "output_format": "json"
      }
    },
    {
      "task_id": "metrics_extractor",
      "type": "json_to_payload_converter",
      "instances": 2,
      "dependencies": ["sparkplug_subscriber"],
      "params": {
        "auto_generate_timestamp": false,
        "mapping": {
          "timestamp": "payload.timestamp",
          "seq": "payload.seq",
          "device": "mqtt.device_id",
          "temperature": "metrics.Temperature.value",
          "pressure": "metrics.Pressure.value",
          "vibration": "metrics.Vibration.value"
        }
      }
    },
    {
      "task_id": "console_debug",
      "type": "stdout_writer",
      "instances": 1,
      "dependencies": ["metrics_extractor"],
      "params": {
        "format_string": "[{data[timestamp]}] Device: {data[device]} | Temp: {data[temperature]}°C | Pressure: {data[pressure]} bar",
        "print_interval": 0
      }
    },
    {
      "task_id": "cloud_api",
      "type": "http_sender",
      "instances": 1,
      "dependencies": ["metrics_extractor"],
      "params": {
        "endpoint": "https://api.monitoring.com/metrics",
        "api_key": "prod_key_xxxxxxxxx",
        "compress": true,
        "batch_size": 50,
        "streaming": false
      }
    },
    {
      "task_id": "local_backup",
      "type": "json_writer",
      "instances": 1,
      "dependencies": ["metrics_extractor"],
      "params": {
        "output_path": "/data/backup/sparkplug/",
        "filename_pattern": "spb_{date}_{time}.json",
        "pretty_print": false
      }
    }
  ]
}
```

---

## Dependency Management

### How Dependencies Work

Dependencies define the data flow between tasks:

```json
{
  "task_id": "task_B",
  "dependencies": ["task_A"],
  "params": { ... }
}
```

- **Tasks without dependencies**: input tasks, start the flow
- **Tasks with dependencies**: receive data through `input_queue`
- **Multiple dependencies**: supported, data is merged

### Dependency Graph

```
Task A (no deps) ──────┐
                       ├──▶ Task C (deps: A, B) ──▶ Task D (deps: C)
Task B (no deps) ──────┘
```

### Communication Queues

The workflow engine automatically creates queues with naming:
```
{source_task_id}_to_{destination_task_id}
```

Example:
- Queue `task_A_to_task_C`
- Queue `task_B_to_task_C`
- Queue `task_C_to_task_D`

### Multiple Instances

For horizontal scaling:

```json
{
  "task_id": "processor",
  "type": "json_to_payload_converter",
  "instances": 4,
  "dependencies": ["reader"],
  "params": { ... }
}
```

Creates 4 parallel instances:
- `processor_0`
- `processor_1`
- `processor_2`
- `processor_3`

All share the same `input_queue` (parallel consumers).

---

## Best Practices

### 1. Naming Convention

```json
{
  "id": "project_environment_purpose",
  "task_id": "function_description"
}
```

Examples:
- Flow ID: `factory_prod_plc_monitor`
- Task ID: `modbus_line1_reader`, `mqtt_cloud_sender`

### 2. Logging and Debugging

Use `stdout_writer` for intermediate debugging:

```json
{
  "task_id": "debug_output",
  "type": "stdout_writer",
  "dependencies": ["transformer"],
  "params": {
    "format_string": "DEBUG: {data}",
    "print_interval": 1
  }
}
```

### 3. Error Handling

- Use `batch_size=1` for critical sends
- Implement checkpointing for long tasks
- Monitor logs in `/logs/`

### 4. Performance

- **Polling**: don't go below 1 second
- **Batch size**: increase to reduce HTTP overhead
- **Instances**: max 2-4 for CPU-intensive tasks
- **Queue size**: default 100, increase only if needed

### 5. Security

- **Credentials**: use environment variables or secret manager
- **TLS**: always enable for external connections
- **API Keys**: rotate periodically

### 6. Testing

Test pipeline with simulated data:

```json
{
  "task_id": "test_generator",
  "type": "random_number_generator",
  "params": {
    "min_value": 0,
    "max_value": 100,
    "interval_sec": 1
  }
}
```

### 7. Versioning

Always keep the `version` field updated:

```json
{
  "version": "1.2.3",
  "description": "v1.2.3 - Added temperature filtering"
}
```

---

## File and Directory Management

### Environment Variables

```bash
APP_URL=http://127.0.0.1:5000
CONFIGURATIONS_PATH=config/
STATUS_PATH=status/status.json
QUEUE_SIZE=100
```

### Standard Folder Structure

```
/data/
├── stage/          # Incoming files
├── processing/     # Files being processed
├── processed/      # Completed files
├── temp/           # Temporary files
└── to_process/     # Files to process
```

### Checkpoints

Checkpoints are saved in:
```
/checkpoints/{flow_id}/{task_id}.json
```

Format:
```json
{
  "file_path": "/data/processing/data.csv",
  "row_number": 15234,
  "timestamp": 1703340000000
}
```

---

## Troubleshooting

### Problem: Task doesn't start

**Cause**: Missing required parameters
**Solution**: Check logs in `logs/{flow_id}.json`

### Problem: Queue full

**Cause**: Consumer too slow
**Solution**: 
- Increase `instances` for consumer task
- Increase `QUEUE_SIZE` (env variable)
- Reduce `batch_size` if used

### Problem: Modbus timeout

**Cause**: Polling too frequent
**Solution**: Increase `polling_sec` to 5-10 seconds

### Problem: MQTT disconnections

**Cause**: Keep-alive too low
**Solution**: Increase `keep_alive` to 60-120 seconds

---

## References

### Log Files

- **Application**: `sensoworks_fog_gateway_logger.ini`
- **Flow logs**: `/logs/{flow_id}.json`
- **Status**: `/status/status.json`

### Protocol Documentation

- **Modbus TCP**: [modbus.org](https://modbus.org)
- **MQTT**: [mqtt.org](https://mqtt.org)
- **Sparkplug B**: [Eclipse Sparkplug](https://sparkplug.eclipse.org)

### Repository

```bash
git clone https://github.com/sensoworks/sensoworks-fog-gateway.git
cd sensoworks-fog-gateway
pip install -r requirements.txt
python sensoworks_fog_gateway.py
```
