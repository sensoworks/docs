### Base URL

The base URL is defined by the environment variable `app_url`. For example:
```
http://127.0.0.1:5000
```

---

## Endpoints

### Get All Configurations
- **URL**: `/flows`
- **Method**: `GET`
- **Description**: Retrieve all configurations.
- **Response**:
  - **Status Code**: `200 OK`
  - **Body**: A JSON array of all configurations.

### Get Configuration by ID
- **URL**: `/flows/<flow_id>`
- **Method**: `GET`
- **Description**: Retrieve a specific configuration by `flow_id`.
- **Parameters**:
  - **URL Path**: `flow_id` (string) - The ID of the flow configuration to retrieve.
- **Response**:
  - **Status Code**: `200 OK`
  - **Body**: A JSON object of the specific configuration.
  - **Status Code**: `404 Not Found` if the flow_id does not exist.

### Add New Configurations
- **URL**: `/flows`
- **Method**: `POST`
- **Description**: Add new configurations.
- **Request Body**:
  - **Type**: JSON array of configuration objects.
- **Response**:
  - **Status Code**: `201 Created` if the configurations are added successfully.
  - **Status Code**: `400 Bad Request` if the input is not a JSON array or other validation errors.
  - **Body**: A JSON object with the error details.

### Update Configuration
- **URL**: `/flows/<flow_id>`
- **Method**: `PUT`
- **Description**: Update an existing configuration.
- **Parameters**:
  - **URL Path**: `flow_id` (string) - The ID of the flow configuration to update.
- **Request Body**:
  - **Type**: JSON object of the updated configuration.
- **Response**:
  - **Status Code**: `200 OK` if the configuration is updated successfully.
  - **Status Code**: `400 Bad Request` if the input is invalid.
  - **Body**: A JSON object with the error details.

### Delete Configuration
- **URL**: `/flows/<flow_id>`
- **Method**: `DELETE`
- **Description**: Delete an existing configuration.
- **Parameters**:
  - **URL Path**: `flow_id` (string) - The ID of the flow configuration to delete.
- **Response**:
  - **Status Code**: `200 OK` if the configuration is deleted successfully.
  - **Status Code**: `400 Bad Request` if the flow_id does not exist.
  - **Body**: A JSON object with the error details.

### Get Flow Status
- **URL**: `/flows/status`
- **Method**: `GET`
- **Description**: Retrieve the status of all flows.
- **Response**:
  - **Status Code**: `200 OK`
  - **Body**: A JSON object containing the status of all flows.

### Get Specific Flow Status
- **URL**: `/flows/status/<flow_id>`
- **Method**: `GET`
- **Description**: Retrieve the status of a specific flow by `flow_id`.
- **Parameters**:
  - **URL Path**: `flow_id` (string) - The ID of the flow to retrieve the status for.
- **Response**:
  - **Status Code**: `200 OK`
  - **Body**: A JSON object containing the status of the specific flow.
  - **Status Code**: `404 Not Found` if the flow_id does not exist.

### Command Flows
- **URL**: `/flows/commands`
- **Method**: `PATCH`
- **Description**: Issue a command to all flows or specific flows.
- **Request Body**:
  - **Type**: JSON object containing:
    - `flow_ids` (array of strings) - The IDs of the flows to command.
    - `command` (string) - The command to issue (`start`, `stop`, `pause`, `resume`).
    - `type` (integer, optional) - The stop type for the `stop` command (`0` for soft stop, `1` for hard stop).
- **Response**:
  - **Status Code**: `200 OK` if the command is executed successfully.
  - **Body**: A JSON object with the status of each flow.
  - **Status Code**: `400 Bad Request` if the input is invalid or the command is not recognized.
  - **Body**: A JSON object with the error details.

---

## Examples

### Start Flows
**Request:**
```json
{
  "command": "start",
  "flow_ids": ["flow1", "flow2"]
}
```
**Response:**
```json
{
  "status": "Flows started",
  "details": [
    {"flow_id": "flow1", "status": "running"},
    {"flow_id": "flow2", "status": "running"}
  ]
}
```

### Stop Flows
**Request:**
```json
{
  "command": "stop",
  "flow_ids": ["flow1", "flow2"],
  "type": 0
}
```
**Response:**
```json
{
  "status": "Flows stopped",
  "details": [
    {"flow_id": "flow1", "status": "stopped"},
    {"flow_id": "flow2", "status": "stopped"}
  ]
}
```

### Pause Flows
**Request:**
```json
{
  "command": "pause",
  "flow_ids": ["flow1", "flow2"]
}
```
**Response:**
```json
{
  "status": "Flows paused",
  "details": [
    {"flow_id": "flow1", "status": "paused"},
    {"flow_id": "flow2", "status": "paused"}
  ]
}
```

### Resume Flows
**Request:**
```json
{
  "command": "resume",
  "flow_ids": ["flow1", "flow2"]
}
```
**Response:**
```json
{
  "status": "Flows resumed",
  "details": [
    {"flow_id": "flow1", "status": "running"},
    {"flow_id": "flow2", "status": "running"}
  ]
}
```

---