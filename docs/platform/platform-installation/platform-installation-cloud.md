---
layout: default
title: cloud
nav_order: 221
description: "Platform installation cloud"
parent: Platform installation
grand_parent: Platform
has_children: false
---

# Platform installation cloud

The Sensoworks platform is a cutting-edge software solution that provides users with a versatile, cloud-based environment for developing, deploying, and managing their applications. Designed to meet the demands of modern software development, Sensoworks has been architected to adhere to the Cloud Native Computing Foundation's (CNCF) vision. This means that Sensoworks is built to take full advantage of cloud-native technologies, such as microservices, containers, and orchestration, enabling users to leverage the benefits of the cloud to the fullest extent possible.

One of the key features of Sensoworks is its flexibility. Unlike many other software solutions, Sensoworks can be installed on any cloud platform, whether it be public, private, or hybrid. This means that users can choose the cloud provider that best meets their needs, whether it be AWS, Azure, Google Cloud, or another provider. This flexibility allows Sensoworks to be used in a wide range of industries and use cases, from small startups to large enterprises.

In addition to its flexibility, Sensoworks is designed to be highly scalable and resilient. It can easily handle large amounts of traffic, and its distributed architecture ensures that it can continue to operate even in the face of hardware or network failures. This makes Sensoworks an ideal platform for applications that require high availability and fault tolerance, such as mission-critical business applications.

Overall, Sensoworks is an innovative and forward-thinking platform that is built to meet the demands of modern software development. Its adherence to the CNCF vision ensures that it can take full advantage of cloud-native technologies, while its flexibility, scalability, and resilience make it an ideal choice for a wide range of industries and use cases.

To ensure that the installation process is as smooth and efficient as possible, the installation can be divided into three key stages:

- Preparation of the environment: Kubernetes cluster
  - The first stage is the preparation of the environment. This involves ensuring that the underlying infrastructure is in place and ready to support the Sensoworks platform. Depending on the specific requirements of the user, this may involve setting up virtual machines, configuring network security, and installing any necessary drivers or software packages
- Installation of three parties software: MongoDB, MySQL, Kafka, etc.
  - The second stage of the installation process involves the installation of the three-party software that Sensoworks depends on. This includes popular software packages such as MongoDB, MySQL, Kafka, and others. These packages provide the necessary infrastructure to support the Sensoworks platform, including database storage, messaging, and other key features
- Installation of the Sensoworks components
  - The third and final stage of the installation process is the installation of the Sensoworks components themselves. This involves deploying the various Sensoworks services, including the Sensoworks API, the Sensoworks dashboard, and other core components. These services are designed to work seamlessly together, providing a powerful and flexible platform that can be tailored to meet the specific needs of the user

Throughout the entire installation process, the Sensoworks team provides comprehensive documentation and support, ensuring that users are able to quickly and easily deploy the platform in their own environment. This includes detailed instructions on how to configure the various components, as well as best practices and troubleshooting guides to help users overcome any issues that may arise.

## Preparation of the environment

Sensoworks operates within a Kubernetes environment, which constitutes the sole prerequisite for its seamless functionality.

**NOTE**: We will assume that the installation will be done in AWS and your computer can run CLI commands from a unix shell.

Overview of the steps:

- Create an AWS account and create a group and at least one user to install everything else
- Create an empty EKS cluster
- Configure the controllers, the drivers, the load balancer and the certificates used by Kubernetes
- Configure the DNS
- Test the 2048 application deployed during the cluster installation

#### Create an AWS account

Go here: [https://aws.amazon.com/](https://aws.amazon.com/), put your credit card, and Bezos will do the rest :-)

#### Create an empty EKS cluster

Decide the name for your cluster.

**NOTES**:
For all names defined in the Kubernetes provider use:
- lowercase and hypens to separate words
- for the cluster name use something like: <name>
- name = whatever you want (ex.: “sensoworks”, “creopay”, “popmove” or “pop-move”, etc.)
  - environments like “dev” or “uat” or “prod” will be installed in serapared clusters, so don't put these in the cluster name
- namespaces = ns-<...>
  - do not use namespaces to separate environments, such as: dev, uat and production. Create a dedicated Kubernetes clusters for that (strong separation)

Use the AWS console.

Login into: [https://console.aws.amazon.com/iamv2/home](https://console.aws.amazon.com/iamv2/home)

- Create a group named ${CLUSTER_NAME}-admin-group with Administrator priviledges
  - SystemAdministrator + AdministratorAccess
- Create a user named ${CLUSTER_NAME}-admin belonging to the group ${CLUSTER_NAME}-admin-group
- Set a programmatic access for this user
- Download the access keys on your computer

#### Configure EKS

#### Configure the DNS

#### Test the 2048 application

```sh
# Xxx
cd Xxx
...
```

✅ DONE :-)

## Installation of three parties software

#### MySQL

#### Kafka

#### MongoDB

#### MQTT Server

## Installation of the Sensoworks components

