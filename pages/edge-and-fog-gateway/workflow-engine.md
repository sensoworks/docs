## Overview

The Sensoworks Workflow Engine is a multi-modal engine designed to handle various data ingestion methods, perform preprocessing and analysis, and facilitate the storage and transmission of processed data. It is capable of integrating with multiple data sources and destinations, making it a versatile component in the Sensoworks ecosystem.

## Features

### Multi-Modal Data Ingestion

The Sensoworks Workflow Engine can receive data from various sources:

- **HTTP**: Data can be sent to the engine via HTTP requests.
- **MQTT**: The engine can subscribe to MQTT topics to receive data.
- **File Downloads**: The engine can download files from external sources such as S3 or FTP.

### Supported File Types

The engine supports a variety of file formats for data ingestion:

- CSV (`.csv`)
- Data files (`.dat`)
- Text files (`.txt`)
- JSON files (`.json`)

### Data Processing and Analysis

Once data is ingested, the engine performs various tasks:

- **Preprocessing**: Initial processing steps to clean and prepare data.
- **Analysis and Aggregation**: Mathematical computations and data aggregation.
- **Machine Learning and Neural Networks**: The engine can leverage machine learning models and neural networks for specialized analysis.

### Data Transmission

After processing, the engine can transmit data to various destinations:

- **HTTP**: Processed data can be sent via HTTP requests.
- **MQTT**: Data can be published to MQTT topics.
- **S3**: Data can be uploaded directly to Amazon S3.
- **ClickHouse**: Data can be stored in ClickHouse for further analysis.

### Extensible Storage Options

Currently, the engine supports HTTP, MQTT, S3, and ClickHouse for outgoing data transmission. Additional storage options will be added in future releases.

## Architecture

The architecture of the Sensoworks Workflow Engine consists of two main components:

### 1. Activators

Activators are responsible for receiving or reading data from various sources. They can be configured to handle different data ingestion methods, such as HTTP, MQTT, S3, or FTP.

### 2. Tasks

Tasks are responsible for the core processing logic within the workflow. They can be divided into several types:

- **Preprocessing Tasks**: Clean and prepare raw data for further analysis.
- **Analysis Tasks**: Perform computations, data analysis, and aggregation.
- **Machine Learning Tasks**: Apply machine learning models and neural networks for specialized analyses.
- **Senders**: handle the transmission of processed data to the desired destinations. They can send data via HTTP, publish to MQTT topics, upload to S3, or store in ClickHouse. They can send data either to the Sensoworks platform or to other storage/environments. The destination is configurable.

## Workflow Customization

Users can create, update, and customize workflows directly through the Sensoworks-Flows component. This component provides a user-friendly interface for managing workflows, allowing users to define the sequence of activators, tasks, and senders according to their specific requirements.

## Example Workflow

Here is an example of a typical workflow managed by the Sensoworks Workflow Engine:

1. **Data Ingestion**:

   - An activator receives data from an MQTT topic.
   - Another activator downloads a CSV file from an S3 bucket.

2. **Preprocessing**:

   - A task cleans and formats the MQTT data.
   - Another task parses the CSV file and extracts relevant information.

3. **Analysis**:

   - An analysis task aggregates the cleaned data.
   - A machine learning task applies a neural network model to the aggregated data for predictive analysis.

4. **Data Transmission**:
   - A sender publishes the analysis results to an MQTT topic.
   - Another sender uploads the processed data to a ClickHouse database for storage.
