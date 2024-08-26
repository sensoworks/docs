# Sensoworks Edge/Fog architecture

## Overview

The Sensoworks Fog architecture is designed to manage configurations, control flows, and monitor the status of various processes in a distributed environment. This document provides an overview of the architecture, including the main components and their interactions.


![[Edge - Fog component - Node.jpg]]

## Components

### 1. Configuration Server

The `ConfigurationServer` is a Flask-based server that exposes RESTful APIs for managing configurations and controlling flows. It interacts with the `ConfigManager` and `FlowManager` to handle configuration data and flow commands.

### 2. ConfigManager

The `ConfigManager` handles the storage, retrieval, and manipulation of configuration data. It is responsible for reading configuration files, updating configurations, and providing configuration details to other components.

### 3. FlowManager

The `FlowManager` is responsible for managing the lifecycle of flows. It can start, stop, pause, and resume flows based on the commands received from the `ConfigurationServer`. The `FlowManager` maintains the status of each flow and interacts with the `SensoworksFog` instances to control their execution.

### 4.**Workflow Engine (SensoworksFog class)**

The SensoworksFog class represents a single flow instance and acts as the workflow engine. It is initialized with a configuration and is responsible for managing the execution of tasks within the flow. The SensoworksFog class handles triggering tasks based on defined conditions, managing state transitions, and ensuring tasks are executed in the correct order. Each SensoworksFog instance runs in a separate thread to allow concurrent execution of multiple flows.

### 5.**Flows**

The Flows component provides a user interface for managing configurations that the workflow engine will execute. This interface enabling users to efficiently set up and control their workflows within the IoT infrastructure. In addition to its configuration management capabilities, the Flows component communicates with the Edge-Broker component to exchange and synchronize information with the platform. This communication ensures that all configurations and workflow instructions are up-to-date and accurately reflect the current state of the system.
Furthermore, the Flows component provides detailed information about the node on which it resides. This information is critical for maintaining an accurate and comprehensive view of the network's operational status, enhancing the platform's ability to manage and optimize its resources. By integrating with the Edge-Broker and providing a robust interface for workflow management, the Flows component plays a crucial role in the seamless operation of the IoT system, ensuring that configurations are effectively managed and executed across the network.


![[Edge - Fog component - Fog.jpg]]
---

## Interactions

### Initialization

1. **MainSensoworksFogGateway**: This is the main entry point for the application. It initializes the `ConfigManager`, `FlowManager`, and `ConfigurationServer`, and starts the server and `WorkflowEngine` instances as background processing threads.
2. **ConfigurationServer**: The server starts and listens for incoming API requests.

### Configuration Management

1. **Get All Configurations**: The `ConfigurationServer` receives a request to retrieve all configurations. It calls the `get_all_configs` method on the `ConfigManager`, which reads and returns all configuration files.
2. **Get Configuration by ID**: The `ConfigurationServer` receives a request to retrieve a specific configuration. It calls the `get_config` method on the `ConfigManager` with the `flow_id`, and the `ConfigManager` returns the corresponding configuration.
3. **Add/Update/Delete Configuration**: The `ConfigurationServer` handles requests to add, update, or delete configurations by calling the respective methods on the `ConfigManager`.

### Flow Control

1. **Start Flow**: The `ConfigurationServer` receives a request to start flows. It calls the `start_flows` method on the `FlowManager` with the list of `flow_ids`. The `FlowManager` initializes and starts a `SensoworksFog` instance for each flow.
2. **Stop/Pause/Resume Flow**: Similar to starting flows, the `ConfigurationServer` handles requests to stop, pause, or resume flows by calling the respective methods on the `FlowManager`.

### Status Monitoring

1. **Get Flow Status**: The `ConfigurationServer` receives a request to retrieve the status of all flows or a specific flow. It calls the `get_flow_status` method on the `FlowManager`, which returns the current status information.
2. **Current Task**: The `FlowManager` can also provide details about the current task being executed in a flow.

## Data Flow

1. **Configuration Files**: Stored in a specified directory and managed by the `ConfigManager`.
2. **Flow Status**: Maintained in a shared dictionary with thread-safe access managed by the `flow_status_lock`.
3. **Commands and Responses**: Handled by the `ConfigurationServer` and passed to the `FlowManager` for execution.

## Example Workflow

1. **Starting the Server**: The `MainSensoworksFogGateway` starts the `ConfigurationServer` and the background engine flow.
2. **Adding a Configuration**: A client sends a POST request to `/flows` with a new configuration. The `ConfigurationServer` processes the request and updates the configuration files via the `ConfigManager`.
3. **Starting a Flow**: A client sends a PATCH request to `/flows/commands` with a start command and flow IDs. The `ConfigurationServer` forwards the command to the `FlowManager`, which initializes and starts the `SensoworksFog` instances.
4. **Monitoring Status**: A client sends a GET request to `/flows/status` to retrieve the status of all flows. The `ConfigurationServer` fetches the status from the `FlowManager` and returns it to the client.

![[Edge - Fog component - Engine.jpg]]