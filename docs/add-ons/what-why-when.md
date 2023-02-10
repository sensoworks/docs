---
layout: default
title: What, why, when
nav_order: 8881
description: "What, why, when"
parent: Add-ons
---

# Intro

In this document, we will explain what the Sensoworks platform is and what it does, and how the Sensoworks company, with its solid technical background, can help and walk with you through many challenging aspects of the IoT revolution.

The two things we want to highlight in this introduction are:

- The importance of the IoT revolution
- The importance of working together with a company already fluent with the IoT language

So, let’s start and welcome into the IoT world.

<p align="left"><img src="../assets/images/sensoworks-iot-world-logo.jpg" width="10%" height="10%"></p>

Very likely you already heard about the term IoT.

In this document we will not give an explanation of what the IoT is in general, but we will only focus on what the Sensoworks IoT platform is, and doing so, we strongly believe that many aspects of the IoT in general will come out. Over the internet there are very good descriptions and introductions of the IoT, so we just linked here a general source of information from which you can move on:

- [https://en.wikipedia.org/wiki/Internet_of_things](https://en.wikipedia.org/wiki/Internet_of_things)

One thing we want to emphasize, it is that this revolution is so vast, that it is really crucial to adopt suitable products and, above all, a correct methodological approach if you want to succeed in living this revolution at best.

# An “IoT data storm” is coming. Get ready

The IoT revolution will be disruptive. Sensors and actuators of all types, are being added to the Internet at a unimaginable rate and the IoT market will continue to be one of top exponentially growing markets in the next years.

The amount of data that these “things” will generate and hit the internet has never been faced before and will need new technologies and new paradigms to be able to collect, store, elaborate and analyze all these data.

But how much data are we talking about when we say “data storm”?

Just to make a rapid estimation using the “tunnel monitoring scenario” presented below in the next chapters, we have:

| **Feature** | **Numbers** |
|:---|:---|
| **Number of sensors** | **780** |
| **Sampling rate** | **10 Hz** |
| **Wiring** | **30 km of Fiber-optic cable ** |
| **Packet dimension** | **6 bytes (single sensor) - 30 bytes header for all** |
| **Working time** | **24/24h, 365d/year** |

**We have**:

- 780 sensors * 10 Hz * 10 bytes * 60 seconds * 60 minutes * 24 hours
  - ~46 Kb per second
  - 161.7 MB per hour
  - 3.78 GB per day
  - 10 messages (~4,6 kb each message) per second to send over the internet

And this is just one simple scenario of just one tunnel. There are many other scenario that require a much greater amount of data to elaborate.

Consider this table, that shows ranges of data related to a group of sensors of a hypothetical IoT project:

| **Amount of data of an hypothetical IoT project** | **# of bytes to digest over the internet** |
|:---|:---|
| Small | < 100 MB per day |
| Medium | < 1-10 GB per day |
| High | < 50-500 GB per day |
| Huge | > 500 GB > 1 TB > 100 TB > ...? |

Nowadays this table is enough realistic when it categorizes the traffic as small, medium, high and huge, but in the near future these numbers are destined to increase, so (again) it is important to adopt suitable products and, above all, a correct methodological approach if you want to succeed in living this revolution at best.

Let’s do another computation using the number of Things predicted by 2020, by analysts of this market:

- 25 billions of Things * 10 kb per min * 60 min * 24 hour = 368.6 petabyte / day
  - ≈ 0.4 × information content of all words ever spoken (≈ 1 EB)

It looks like a real storm to me. This is why Sensoworks it is the right choice for you.

# What, why, when

## What is the Sensoworks platform?

The Sensoworks IoT Platform integrates IoT devices to enterprise or cloud systems. It allows the user to create and manage their own IoT ecosystem by facilitating data flow, communication between objects, device management and, in general, enabling advanced application functionalities.

One of the most important missions of the Sensoworks IoT platform is to make objects speak, with a strong orientation towards infrastructures such as bridges, tunnels, construction sites, buildings, wind turbines and in general all infrastructures that need maintenance and monitoring. In general understand from the huge amount of data that they communicate their health, and to prevent failures or problems.

For this reason we partnership with companies that have solid background in monitoring infrastructures. Collaborating with physicists, geologists, construction engineers is what makes the difference in succeeding in these projects. We strongly believe that the sum of two competences produces more than their pure algebraic result. Only facing a problem from different perspectives and different backgrounds, in a interdisciplinary approach, permits to solve problems better and faster.

## Main characteristics an top 3 killing features

The Sensoworks platform has been designed to solve many IoT needs. These are a list of its features:

- EdgeGateway
  * It is the component that "talks" to the real object that needs to be monitored and controlled
  * Extensible and flexible architecture
  * Simple architecture that permits to be easily integrable with the Gateway and the platform
- Gateway
  * Its architecture extends and facilitates edge computing
  * Data normalization
  * Filtering
  * Security gate
  * Support for multi protocol communication between the device and the platform
  * Data ingestion modules to elaborate huge amount of data
  * Auto provisioning for new Things and Devices. It can be enable ON or OFF from the console
- Decoupling
  * Based on the Open Source Kafka infrastructure, that proved to be disruptive in many areas
  * Scalability and isolation for the entire platform
  * Back pressure regulation
  * Backbone for all internal communication
- DataPump
  - Security gate
  - Data enrichment
  - Filtering
  - Multi synch architecture, to support any type of store or streaming systems like: Mongo, Cassandra, relational DBs, Hadoop, Spark, Confluent KSQL and many others
- Core
  - "API first" design for use in headless environment
  - Auditing at core API level: any operation on devices, things or networks (D/T/N) is storicized by the platform
  - Query module to get meta info from N/T/D and to get telemetry data from your devices
- Store
  - Any combination of Datalakes, BigData, streaming modules
- General characteristics
  - Built on Open Source technologies: Spring, Kafka, Mongo, MySql, MQTT, Angular, Node
  - Secured by design
  - Analytics. Real time alerts and CEP
  - Machine learning
  - E2E traceability functionalities
  - Auto monitoring modules
  - Events generated from D/T/N can trigger event notifications
- Console
  - Stream processing
  - Time series graphs on data coming from the devices
  - Frequency analysis
  - Georeferenced graphs and tables
    - Google maps, OpenStreet map, WebGIS
  - Integrated lightweight ticketing system
  - Integrated logbook for production groups to log activities
  - Integrated lightweight CMS (docs related to D/T/N: Devices/Things/Network)
- Business Intelligence modules
  - Alarm definition and management through CEP processing
  - Scheduled and recurring data analysis and eport generation
  - Certifications of the sensed data using private of public Blockchain
  - Data analysis using machine learning Open source frameworks

Its top 3 features are:

| Top 3 features | Description |
|:---|:---|
| eXtreme scalability | We have developed a platform that can be setup to manage any type of load. It can do so, through extreme scalability of any component of the platform. From a single industrial computer on the field to a cluster of thousands of connected computer in the cloud, we can tailor the solution to best respond to your needs |
| Open API | Any operation you can do from the console can be also done via API. The entire platform follows the “API first approach”. Note: If the console, with its dashboards customizable by users, wouldn't be enough, we at Sensoworks can rapidly implement vertical solution with a personalized console to operate your own installation of the Sensoworks IoT platform. |
| Security by design | Your data is what it is important. They are secured by design, using advanced access policies and protections at the gates (gateways) and on the data |

## Why did we develop the Sensoworks platform?

TBD

## When to use the Sensoworks platform?

There are many reasons why it is important to have a well designed IoT platform for your projects. Some of the reasons are listed below in the picture. But besides technical aspects, and not less important, is to choose an IoT platform supported by a company, that will walk with you during the entire lifecycle of your IoT project, from the initial design of the solution to the production and post-production phases.

<p align="center"><img src="../assets/images/sensoworks-data-storm.jpg" width="100%" height="100%"></p>

# Overview: trip of a single measurement

## Introduction

To simplify the exposition of the Sensoworks IoT platform, in terms of what it is and how it addresses some of the top IoT issues (amount of data to elaborate, security, scalability, storage and analytics), we will describe the trip of a single measurement from **Things to Humans** and the back trip of a command from **Humans to Things**.

To make the narration of the trip more intuitive and concrete we will use a single use case described by the reference scenario below.

Since the narration will be done on a specific scenario, we don’t pretend to cover every single aspect of the IoT, or to cover all possibilities we have to solve all obstacles, but we strongly believe that the general understanding of the platform will be a lot better. Anyway on some situation we will refer to the other two scenarios.

During the trip we will often zoom in and out from details to high level architecture, to better under the the capabilities of the Sensoworks IoT platform.

Moreover, along the narration we will focus on these aspects of the Sensoworks IoT platform:

- Security aspects
- Traffic and scalability of the platform
- The 3M = Modularity, maintainability, monitorability

We will also describe what choices we do have at each step. For example:

- Are the sensors directly connected to the internet or do we need a dedicated 4G communication?
- On the EdgeGateway if we have to transfer to the Gateway 100 GB per day, what protocol it is better to use
  - MQTT
  - json/http
  - Kafka 2 Kafka communication
  - Raw socket communication
- Do we have to send all the data to the Platform or only an aggregate value?
- What about filtering and buffering?

### High level architecture

The architecture of the platform will be described in a specific chapter, but for now it is useful to keep it at hand while we explain some aspects of the platform.

<p align="center"><img src="../assets/images/sensoworks-mla.jpg" width="100%" height="100%"></p>

### Overview of the trip from Things to Humans: sensed data and analytics

<p align="center"><img src="../assets/images/sensoworks-trip-things-to-humans.jpg" width="100%" height="100%"></p>

We will describe all the steps that a single measure will do from Things to Humans:

1. **Starting point**: the Things
   - We will describe how a sensor detects a measure (ex. the temperature of a room at a “T” time), how the measurement is read (raw value) on the sensor and pre-formatted into a digital value (ex. by the firmware and HW on the sensor)
2. EdgeGateway: sends the data through the internet to the Gateway
   - We don’t want to spoil anything :-) Read the chapter that tells the whole story
3. Internet: The data crosses the internet
4. Enter the Gateway
5. Buffering / decoupling (store the raw data into an intermediate storage)
6. DataPump from the buffer to the data lake
7. BigData, DataLake & Streaming
8. Analytics
9. **End point**: the Humans

### Overview of the trip from Humans to Things: configure, administer, act on actuators

<p align="center"><img src="../assets/images/sensoworks-trip-humans-to-things.jpg" width="100%" height="100%"></p>

We will describe all the steps a single measure will do from Humans to Things:

1. **Starting point**: the Humans
   - We will describe what a person can do to act on a Thing: open a door, turn on the heat, turn off lights, etc.
2. The console
   - We don’t want to spoil anything :-) Read the chapter that tells the whole story
3. The core
4. Dispatch commands
5. The Gateway receive the command
6. Internet: The command crosses the internet
7. The EdgeGateway receive the command
8. **End point**: the Things

## The scenarios

### Reference scenario: Monitoring structural deformation of a tunnel

<p align="center"><img src="../assets/images/sensoworks-tunnel.png" width="100%" height="100%"></p>

The scenario consists in monitoring the health of a tunnel, in term of structural deformations that may damage the tunnel itself and put Humans in danger. Natural causes that affect the structure of a tunnel are:

- Landslides
- Earthquakes
- Wind
- Infiltrations
- Temperature
- Etc.

Human causes that affect the structure of a tunnel:

- Traffic
- Heavy vehicles
- Accidents
- Etc.

But how do you actually prepare a tunnel to be monitored for deformations.

We can use a FS22 Industrial BraggMETER (picture 1) and wire the entire tunnel with the Fiber-optic cable (picture 2) and strain sensors (picture 3).
