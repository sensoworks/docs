---
layout: default
title: Platform architecture
nav_order: 21
description: "Platform architecture"
parent: Platform
has_children: false
---

Sensoworks is a scalable IoT platform built mainly in Java (for the cloud platform) and Python (for the Edge components) and can be deployed, depending on the client’s needs, on-premise, in the cloud, or deployed in a hybrid environment. It has been designed since the beginning to be very flexible and adaptive in collecting data from heterogeneous sources, and so be able to be used for different scenarios and in different fields of application.

**The features of the platform are:

| **Modules** | **Description** |
|:---|:----|
| **Device provisioning** | **Provision Networks, Thing, Devices and interaction between them** |
| **Data analysis** | It is the ability of the platform to browse the collected data, analyze what is stored inside the DataLake/BigData stores and export raw data in different formats: JSON, csv, excel, and more |
| **Alarms** | **It is the ability of the platform to define alarms on any data streamed into the platform at any level: Networks, Things, Devices or any aggregated data** |
| **Reports** | **It is the ability of the platform to generate report out of data** |
| **Actions** | **It is the ability of the platform to interact with the objects connected to the platform: turn-off a machine, change a devices configuration parameter are just few examples** |
| **Alarms to actions** | **It is the ability of the platform to react to an alarm with a specific action, or set of actions** |
| **Prediction** | **It is the ability of the platform to make predictions on the objects connected to the platform: the object temperature is going to increase above the limit in 2 weeks** |
| **Data certification** | **It is the ability of the platform to certify event and/or data on the Blockchain (private or public)** |
| **Integration** | **It is the ability of the platform to integrate to external systems, for example to give external systems a way to get data (API) or to collect data from external system that could be used with data coming from devices for analysis (data correlation)** |
| **Digital Twin** | **It’s the ability of the platform to represent a 3D model of an asset giving the user a way to interact with the asset itself** |
| **GIS and BIM integration** | **It’s the ability of the platform to show an asset (as a digital twin) on a GIS or BIM application** |
| **Audit** | **Every important action (create, delete or modify something or login) executed is reported in this section** |

and much more ...

![](/docs/assets/images/sensoworks-logo.png)

Even if the platform can be installed on-premise and packaged as standard Java SpringBoot microservices (manual installation), the recommended runtime environment for Sensoworks is based on Kubernetes and MongoDB.

The SaaS Asset Management Sensoworks solution for OCTO, is deployed Inside a dedicated AWS account and uses Kubernetes (EKS in AWS) as the runtime environment.

Telemetry data are instead stored in an “external” (also dedicated) MongoDB Atlas BigData DB, deployed inside the same AWS region where the Sensoworks platform resides.

AWS, EKS, and MongoDB Atlas guarantee many of the reliability and scalability requirements.

# **Logical view and high-level view of the platform**

![](/docs/assets/images/sensoworks-overview-modules.jpeg)

The microservices of the Sensoworks platform, excluding the Asset module that will be described later, are shown here:

![](/docs/assets/images/sensoworks-microservices.jpg)

Many of the external services, such as Stripe, Firebase, Mapbox, Slack, etc. are in this picture only as an example, to show that the platform can integrate with these services, if necessary.
To better understand what Kubernetes is and what offers, refer to the official online documentation: https://kubernetes.io/.

# **HW/SW architecture of the platform**

![](/docs/assets/images/sensoworks-microservices.jpg)

Each component implements a specific function and works together with the other services, to offer the IoT backbone to the client’s needs.

# **HW/SW architecture of the platform**

Definitions:

- Gartner: “Multitenancy is a reference to the mode of operation of software where multiple independent instances of one or multiple applications operate in a shared environment. The instances (tenants) are logically isolated, but physically integrated.”
- IBM: “Multitenancy is a software architecture where a single software instance can serve multiple, distinct user groups. Software-as-a-service (SaaS) offerings are an example of multitenant architecture.”
- Wikipedia: “Software multitenancy is a software architecture in which a single instance of software runs on a server and serves multiple tenants. Systems designed in such manner are "shared" (rather than "dedicated" or "isolated"). A tenant is a group of users who share a common access with specific privileges to the software instance. With a multitenant architecture, a software application is designed to provide every tenant a dedicated share of the instance - including its data, configuration, user management, tenant individual functionality and non-functional properties. Multitenancy contrasts with multi-instance architectures, where separate software instances operate on behalf of different tenants. Some commentators regard multitenancy as an important feature of cloud computing.

Sensoworks manage Multitenancy using different techniques:

- Based on load, different clients configured on the platform (Pramac and others) can be deployed (using namespaces) on groups of machines with dedicated CPU and memory. The default configuration will use the default ns-core namespace with all clients sharing the same resources, which still can be scaled to adapt to load

