# Edge/Fog installation

In an IoT system, edges and fog gateways are two different types of components that can be used to collect, process, and transmit data. Edges refer to devices that are located at the very edge of the network, closest to the sensors and devices that are generating data. These devices are typically low-power and may be used to perform basic processing and analysis of data, as well as to transmit data to the cloud or other central locations.

Fog gateways, on the other hand, are devices that are located further up the network hierarchy, closer to the cloud or other central systems. These devices are typically more powerful than edges and are capable of performing more complex processing and analysis tasks.

In many cases, edges and fog gateways can be combined to better meet the business and technical needs of an IoT system. For example, edges might be used to collect data from sensors and transmit it to fog gateways, which can then perform more advanced processing and analysis tasks before transmitting the data to the cloud or other central systems. By using both edges and fog gateways, businesses can take advantage of the strengths of each component to create a more efficient and effective IoT system.

<p align="center"><img src="/docs/images/sensoworks-edge-fog-composition.jpg" width="75%" height="75%"></p>

The appropriate Sensoworks Edge/Fog gateway solution for your project will depend on various factors, including the specific scenario of the project, the types of devices that need to be connected, the type of analysis required, and any additional considerations.

The component(s) can be installed either locally or on the cloud (depends on needs and available resources):

## Cloud environment

TBD

## Local environment

### Sensoworks Fog Gateway Installation

The **Sensoworks Fog Gateway** is an edge-computing solution that enables data acquisition, processing, and transmission at the edge of your network. It acts as a gateway for IoT devices and sensors, handling communication between edge devices and the cloud platform.

#### System Requirements

- **Python**: 3.12 or higher (for local installation)
- **Operating System**: Linux, macOS, or Windows
- **RAM**: Minimum 512MB (1GB+ recommended for production)
- **Network**: Access to MQTT brokers, HTTP endpoints, or other data sources as needed
- **Docker** (recommended): Latest version for containerized deployment

#### Directory Structure

The Fog Gateway uses the following directory structure:

```
sensoworks-fog-gateway/
├── config/                           # Workflow configuration files (JSON)
│   ├── demo.json                    # Example workflow configuration
│   └── test.json                    # Test workflow configuration
├── status/                          # Status tracking files
│   └── status.json                  # Current execution status
├── data/                            # Local data storage (created on demand)
│   └── [temporary/cache files]
├── logs/                            # Application logs (created on demand)
│   └── sensoworks_fog_gateway.log
├── checkpoints/                     # Workflow checkpoint files
│   └── [state recovery files]
├── src/                             # Source code
│   ├── engine/                      # Workflow engine implementation
│   ├── iot_node_server/            # REST API server
│   ├── managers/                    # Business logic managers
│   └── lib/                         # Utility libraries
├── go-workflow-engine/              # Go-based workflow engine (optional)
├── releases/                        # Release artifacts
├── .env                             # Environment configuration (create this)
├── requirements.txt                 # Python dependencies
├── sensoworks_fog_gateway.py        # Main entry point
├── sensoworks_fog_gateway_logger.ini # Logging configuration
├── Dockerfile                       # Docker image definition
├── README.md                        # Basic readme
└── WORKFLOW_CONFIGURATION_GUIDE.md  # Detailed workflow guide
```

##### Key Directories

| Directory | Purpose | Writable | Notes |
|-----------|---------|----------|-------|
| **`config/`** | Workflow configurations | Yes | Place all `.json` workflow files here |
| **`status/`** | System state tracking | Auto | Do not manually edit |
| **`data/`** | Temporary data | Yes | Cache and staging for file operations |
| **`logs/`** | Application logs | Auto | Check here for debugging |
| **`checkpoints/`** | Recovery files | Auto | Enables workflow resume after interruption |

#### Installation Steps

##### Option 1: Using Docker (Recommended)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sensoworks/sensoworks-fog-gateway.git
   cd sensoworks-fog-gateway
   ```

2. **Create necessary directories**:
   ```bash
   mkdir -p config data logs checkpoints status
   ```

3. **Create a `docker-compose.yml` file**:
   ```yaml
   version: '3.8'

   services:
     fog-gateway:
       build:
         context: .
         dockerfile: Dockerfile
       ports:
         - "5000:5000"
       environment:
         APP_URL: "http://0.0.0.0:5000"
         CONFIGURATIONS_PATH: "/app/config"
         STATUS_PATH: "/app/status/status.json"
         QUEUE_SIZE: "100"
       volumes:
         - ./config:/app/config
         - ./status:/app/status
         - ./data:/app/data
         - ./logs:/app/logs
         - ./checkpoints:/app/checkpoints
       restart: unless-stopped
       container_name: sensoworks-fog-gateway
   ```

4. **Create a `.env` file** (optional, for environment variables):
   ```bash
   APP_URL="http://0.0.0.0:5000"
   CONFIGURATIONS_PATH="config/"
   STATUS_PATH="status/status.json"
   QUEUE_SIZE=100
   ```

5. **Start the gateway**:
   ```bash
   docker-compose up -d
   ```

6. **Verify it's running**:
   ```bash
   curl http://localhost:5000/health
   docker-compose logs -f
   ```

##### Option 2: Local Installation with Python

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sensoworks/sensoworks-fog-gateway.git
   cd sensoworks-fog-gateway
   ```

2. **Create virtual environment**:
   ```bash
   python3.12 -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install --upgrade pip
   pip install -r requirements.txt
   ```

4. **Create `.env` file**:
   ```bash
   APP_URL="http://0.0.0.0:5000"
   CONFIGURATIONS_PATH="config/"
   STATUS_PATH="status/status.json"
   QUEUE_SIZE=100
   JWT_PRIVATE_KEY="your-private-key-here"
   ```

5. **Start the gateway**:
   ```bash
   python sensoworks_fog_gateway.py
   ```

6. **Verify it's running**:
   ```bash
   curl http://localhost:5000/health
   tail -f logs/sensoworks_fog_gateway.log
   ```

#### Configuration

##### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `APP_URL` | `http://0.0.0.0:5000` | Address and port where the configuration server listens |
| `QUEUE_SIZE` | `100` | Maximum size of task queues |
| `CONFIGURATIONS_PATH` | `config/` | Directory where workflow configurations are stored |
| `STATUS_PATH` | `status/status.json` | File path for storing execution status |
| `JWT_PRIVATE_KEY` | - | Private key for JWT authentication |

##### Workflow Configuration Files

Place your workflow configuration files in the `config/` directory as JSON files:

```bash
config/
├── mqtt_workflow.json              # MQTT data ingestion
├── modbus_polling.json            # Modbus sensor reading
├── data_processing.json           # Processing pipeline
└── cloud_sender.json              # Send to cloud
```

Each workflow file defines tasks and their dependencies. Example:

```json
{
  "id": "my_workflow",
  "name": "My Workflow",
  "description": "Sample workflow",
  "version": "1.0",
  "task_configs": [
    {
      "task_id": "mqtt_input",
      "type": "mqtt_client_subscriber",
      "instances": 1,
      "params": {
        "host": "mqtt.example.com",
        "port": 1883,
        "topic": "sensors/data"
      }
    },
    {
      "task_id": "http_output",
      "type": "http_sender",
      "instances": 1,
      "dependencies": ["mqtt_input"],
      "params": {
        "url": "https://api.example.com/data",
        "method": "POST"
      }
    }
  ]
}
```

For detailed workflow configuration options, see the [Workflow Configuration Guide](../../sensoworks-fog-gateway/WORKFLOW_CONFIGURATION_GUIDE.md).

#### Monitoring and Management

##### Check Gateway Status

```bash
# Overall status
curl http://localhost:5000/status

# List running workflows
curl http://localhost:5000/flows
```

##### View Logs

```bash
# Using Docker Compose
docker-compose logs -f fog-gateway

# Using Docker directly
docker logs -f fog-gateway

# View specific number of lines
docker logs --tail 100 fog-gateway
```

##### Workflow Management

```bash
# Pause a workflow
curl -X POST http://localhost:5000/flows/{workflow_id}/pause

# Resume a workflow
curl -X POST http://localhost:5000/flows/{workflow_id}/resume

# Stop a workflow
curl -X POST http://localhost:5000/flows/{workflow_id}/stop
```

#### Troubleshooting

| Issue | Solution |
|-------|----------|
| **Container won't start** | Check logs: `docker-compose logs fog-gateway` |
| **Port 5000 already in use** | Change `APP_URL` to use different port (e.g., 5001) |
| **Workflows not loading** | Verify JSON files are in `config/` and valid |
| **Data not being processed** | Check workflow configuration and logs for errors |
| **Python version error** | Ensure Python 3.12+ is installed |

#### Useful Commands

```bash
# Docker Compose commands
docker-compose up -d              # Start in background
docker-compose down               # Stop and remove container
docker-compose restart            # Restart container
docker-compose logs -f            # View live logs

# Docker direct commands
docker build -t sensoworks-fog-gateway .    # Build image
docker run -d --name fog-gateway ...        # Run container
docker ps                                   # List running containers
docker stop fog-gateway                     # Stop container
docker logs -f fog-gateway                  # View logs

# Validation
python -m json.tool config/workflow.json    # Validate JSON
```

#### Additional Resources

- **Documentation**: See [Getting Started Guide](./getting-started-fog-gateway.md) for detailed internal documentation
- **Docker Deployment**: [Docker Quick Start Guide](./fog-gateway-docker-deployment.md)
- **Workflow Engine**: [Workflow Engine Architecture](./workflow-engine.md)
- **Configuration Guide**: [Workflow Configuration Guide](../../sensoworks-fog-gateway/WORKFLOW_CONFIGURATION_GUIDE.md) in the repository