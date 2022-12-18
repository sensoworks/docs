---
layout: default
title: Platform architecture
nav_order: 21
description: "Platform architecture"
parent: Platform
has_children: false
---

# Platform architecture

Sensoworks is a scalable IoT platform built mainly in Java (for the cloud platform) and Python (for the Edge components) that can be deployed, depending on the client’s needs, on-premise, in the cloud, or deployed in a hybrid environment. It has been designed since the beginning to be very flexible and adaptive in collecting data from heterogeneous sources, and so be able to be used for different scenarios and in different fields of application.

A ready-to-use platform that can be integrated with any sensor and integrated with algorithms that enable predictive maintenance. Sensoworks specializes in infrastructure monitoring (bridges, dams, construction sites or more complex constructions), as well as Circular City services (Waste Management, Smart Mobility & Parking, Smart Building).

With its comprehensive capabilities and easy integration with other systems, Sensoworks is a versatile and reliable choice for IoT data management and analysis.

One of the key features of Sensoworks is its ability to collect data from a wide range of sources, including sensors, devices, and other systems. This data is then processed and analyzed using advanced algorithms and machine learning techniques, allowing businesses to gain valuable insights and make informed decisions. The platform also offers a range of tools for visualizing and reporting on data, making it easy for users to understand and interpret the information. Additionally, Sensoworks is highly flexible and can be customized to meet the specific needs and requirements of each individual customer. With its scalability, adaptability, and powerful analytics capabilities, Sensoworks is a powerful tool for managing and maximizing the value of IoT data.

<p align="center"><img src="../assets/images/sensoworks-mla.jpg" width="100%" height="100%"></p>

## Features of the platform

| **Modules** | **Description** |
|:---|:----|
| **Device provisioning** | Provision Networks, Thing, Devices and interaction between them |
| **Data analysis** | It is the ability of the platform to browse the collected data, analyze what is stored inside the DataLake/BigData stores and export raw data in different formats: JSON, csv, excel, and more |
| **Alarms** | It is the ability of the platform to define alarms on any data streamed into the platform at any level: Networks, Things, Devices or any aggregated data |
| **Reports** | It is the ability of the platform to generate report out of data |
| **Actions** | It is the ability of the platform to interact with the objects connected to the platform: turn-off a machine, change a devices configuration parameter are just few examples |
| **Alarms to actions** | It is the ability of the platform to react to an alarm with a specific action, or set of actions |
| **Prediction** | It is the ability of the platform to make predictions on the objects connected to the platform: the object temperature is going to increase above the limit in 2 weeks |
| **Data certification** | It is the ability of the platform to certify event and/or data on the Blockchain (private or public) |
| **Integration** | It is the ability of the platform to integrate to external systems, for example to give external systems a way to get data (API) or to collect data from external system that could be used with data coming from devices for analysis (data correlation) |
| **Digital Twin** | It’s the ability of the platform to represent a 3D model of an asset giving the user a way to interact with the asset itself |
| **GIS and BIM integration** | It’s the ability of the platform to show an asset (as a digital twin) on a GIS or BIM application |
| **Audit** | Every important action (create, delete or modify something or login) executed is reported in this section |

Even if the platform can be installed on-premise and packaged as standard Java SpringBoot microservices (manual installation), the recommended runtime environment for Sensoworks is based on Kubernetes and MongoDB.

The SaaS Sensoworks solution, is deployed inside a dedicated AWS account and uses Kubernetes (EKS in AWS) as the runtime environment. As a SaaS (Software as a Service) solution, Sensoworks is delivered through the cloud and does not require customers to install or maintain any hardware or software on their own premises. This makes it easy for businesses to get up and running with the platform quickly and without any upfront costs. In order to ensure the security and reliability of the service, Sensoworks is deployed inside a dedicated Amazon Web Services (AWS) account, using Kubernetes (EKS in AWS) as the runtime environment. This ensures that the platform is fully isolated from other systems and that it is able to scale up or down as needed to meet the changing needs of the business. By leveraging the power and stability of AWS and Kubernetes, Sensoworks is able to provide a robust, reliable, and scalable solution for managing and analyzing IoT data. In order to handle the large volumes of telemetry data generated by sensors and devices, Sensoworks stores this data in an external database. Specifically, it uses MongoDB Atlas, a fully managed database service that is optimized for handling big data workloads. By using MongoDB Atlas, Sensoworks is able to store and manage vast amounts of data efficiently and with minimal downtime. The database is deployed inside the same AWS region as the Sensoworks platform, ensuring low latency and fast access to data. This allows the platform to quickly and easily retrieve and analyze telemetry data as needed, providing businesses with real-time insights and enabling them to make informed decisions.

Overall, the combination of Sensoworks with AWS, EKS, and MongoDB Atlas guarantee many of the reliability, security and scalability requirements a modern application has to have.

## Logical view and high-level view of the platform

<p align="center"><img src="../assets/images/sensoworks-overview-modules.jpg" width="75%" height="75%"></p>

The microservices of the Sensoworks platform are shown here:

<p align="center"><img src="../assets/images/sensoworks-microservices.jpg" width="100%" height="100%"></p>

Sensoworks is made up of a number of different components, each of which performs a specific function and plays a vital role in the overall operation of the platform. These components work together seamlessly to provide a wide range of IoT capabilities, including data collection, analysis, and visualization. For example, while one component is responsible for communicating with sensors and devices to collect telemetry data, another handles data storage and management. Still another component is responsible for analyzing and interpreting the data, using advanced algorithms and machine learning techniques to extract valuable insights and inform decision making. By working together, these components provide a comprehensive and powerful solution for managing and maximizing the value of IoT data.

## HW/SW architecture of the platform

<p align="center"><img src="../assets/images/sensoworks-hw-sw.jpg" width="100%" height="100%"></p>

Many of the external services, such as Firebase, Mapbox, Slack, etc. are in this picture only as an example, to show that the platform can integrate with these services, if necessary. To better understand what Kubernetes is and what offers, refer to the official online documentation: https://kubernetes.io/.

## Multitenancy

Let's start with some definitions:

- **Gartner**: “Multitenancy is a reference to the mode of operation of software where multiple independent instances of one or multiple applications operate in a shared environment. The instances (tenants) are logically isolated, but physically integrated.”
- **IBM**: “Multitenancy is a software architecture where a single software instance can serve multiple, distinct user groups. Software-as-a-service (SaaS) offerings are an example of multitenant architecture.”
- **Wikipedia**: “Software multitenancy is a software architecture in which a single instance of software runs on a server and serves multiple tenants. Systems designed in such manner are "shared" (rather than "dedicated" or "isolated"). A tenant is a group of users who share a common access with specific privileges to the software instance. With a multitenant architecture, a software application is designed to provide every tenant a dedicated share of the instance - including its data, configuration, user management, tenant individual functionality and non-functional properties. Multitenancy contrasts with multi-instance architectures, where separate software instances operate on behalf of different tenants. Some commentators regard multitenancy as an important feature of cloud computing.

Sensoworks manage Multitenancy using different techniques:

- Based on load, different clients configured on the platform can be deployed (using namespaces) on groups of machines with dedicated CPU and memory. The default configuration will use the default ns-core namespace with all clients sharing the same resources, which still can be scaled to adapt to load.

<p align="center"><img src="../assets/images/sensoworks-kubernetes.jpg" width="75%" height="75%"></p>

- About the MongoDB Atlas account, data can live in a shared account with other clients or can have per client dedicated instances

<p align="center"><img src="../assets/images/sensoworks-mongodb-data-isolation.jpg" width="30%" height="30%"></p>

## Scalability, HA/FT

Most of the requirements related to HA/FT are guaranteed directly by Kubernetes and the managed services we use in Sensoworks, such as MongoDB Atlas.

Every single aspect and component of Sensoworks can resist the failure of part of the underlying infrastructure, up to 2 entire Availability Zones (2 out of 3>), and up to three nodes remaining in the last Availability Zone survived. The default clustered infrastructure is deployed on 3> different Availability Zones (data centers) of an AWS region.

> Note: This picture, taken from the internet, shows the infrastructure for a two Availability Zones cluster. Sensoworks has 3 Availability Zones by default.

<p align="center"><img src="../assets/images/sensoworks-kubernetes-availability-zones.png" width="75%" height="75%"></p>

In general, all Sensoworks microservices (DataGate, DataPump, Inspectors, Aggregators, etc.) can be scaled individually from 3 (number used to cover 3 availability zones) to any value needed to manage the incoming telemetry traffic and can be specialized (sharding) using namespaces with dedicated node pools.

<p align="center"><img src="../assets/images/sensoworks-ha-lb-api-gateway.jpg" width="75%" height="75%"></p>

One of the key benefits of Sensoworks is its ability to scale up or down as needed to meet the changing needs of the business. This is made possible by the use of nodes, which are individual machines that make up the platform. If necessary, nodes can be upgraded or added to the platform to increase its capacity and performance. For example, if more processing power is needed, nodes with higher-end CPUs can be added to the cluster. Similarly, if more memory is required, nodes with larger amounts of memory can be used. This allows businesses to tailor the platform to their specific needs and ensures that it is able to handle even the most demanding workloads. Additionally, since clusters can be formed by thousands of nodes, the entire architecture of Sensoworks has virtually unlimited scalability, allowing it to grow and adapt as the business grows.

<p align="center"><img src="../assets/images/sensoworks-k8s-5000-nodes.jpg" width="75%" height="75%"></p>

A Kubernetes cluster is a set of nodes (physical or virtual machines) running Kubernetes agents, managed by the control plane. Kubernetes v1.25 supports clusters with up to 5000 nodes. More specifically, Kubernetes is designed to accommodate configurations that meet all of the following criteria:

- Up to 110 pods per node
- Up to 5000 nodes
- Up to 150000 total pods
- Up to 300000 total containers
