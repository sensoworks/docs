---
layout: default
title: What, why, when
nav_order: 9991
description: "What, why, when"
parent: Add-ons
---

# Intro

In this document, we will explain what the Sensoworks platform is and what it does, and how the Sensoworks company, with its solid technical background, can help and walk with you through many challenging aspects of the IoT revolution.

The two things we want to highlight in this introduction are:

- The importance of the IoT revolution
- The importance of working together with a company already fluent with the IoT language

So, let’s start and welcome into the IoT world.

xxx

Very likely you already heard about the term IoT.

In this document we will not give an explanation of what the IoT is in general, but we will only focus on what the Sensoworks platform is, and doing so, we strongly believe that many aspects of the IoT in general will come out. Over the internet there are very good descriptions and introductions of the IoT, so we just linked here a general source of information from which you can move on:

- https://en.wikipedia.org/wiki/Internet_of_things

One thing we want to emphasize however, it is that this revolution is so vast, that it is really crucial to adopt suitable products and, above all, a correct methodological approach if you want to succeed in living this revolution at best.

# An “IoT data storm” is coming. Get ready

The IoT revolution will be disruptive. Sensors and actuators of all types, are being added to the Internet at a unimaginable rate and the IoT market will continue to be one of top exponentially growing markets in the next years.
The amount of data that these “things” will generate and hit the internet has never been faced before and will need new technologies and new paradigms to be able to collect, store, elaborate and analyze all these data.
But how much data are we talking about when we say “data storm”?

Just to make a rapid estimation using the “galleries monitoring scenario” presented below in the next chapters, we have:

| **Feature** | **Numbers** |
|:---|:---|
| **Number of sensors** | **780** |
| **Sampling rate** | **10 Hz** |
| **Wiring** | **30 km of optical fiber** |
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

Nowadays this table is enough realistic when it categorizes the traffic as small, medium, high and huge, but in the near future these numbers are destined to increase, so (again) it is important to adopt suitable products and, above all, a correct methodological approach if you want to succeed in living this revolution at best.

Let’s do another computation using the number of Things predicted by 2020, by analysts of this market:

- 25 billions of Things * 10 kb per min * 60 min * 24 hour = 368.6 petabyte / day
  - ≈ 0.4 × information content of all words ever spoken (≈ 1 EB)

# What, why, when

### What is the Sensoworks platform?

The Sensoworks platform integrates IoT devices to enterprise or cloud systems. It allows the user to create and manage their own IoT ecosystem by facilitating data flow, communication between objects, device management and, in general, enabling advanced application functionalities.

One of the most important missions of the Sensoworks platform is to make objects speak, with a strong orientation towards infrastructures such as bridges, tunnels, construction sites, buildings, wind turbines and in general all infrastructures that need maintenance and monitoring. In general understand from the huge amount of data that they communicate their health. To prevent, in this way, failures or problems.

For this reason we collaborate with companies that have solid background in monitoring infrastructures, with companies that produce sensors and with expert in the field of what has to be monitored.

Collaborating with physicists, geologists, construction engineers is what makes the difference in succeeding in these projects. We strongly believe that the sum of two competences produces more than their pure algebraic result. Only facing a problem from different perspectives and different backgrounds, in a interdisciplinary approach, permits to solve problems better and faster.

##### Main characteristics of the Sensoworks platform and its top 3 killing features

The Sensoworks platform has been designed to solve many IoT needs. These are a list of its features:

- EdgeGatway
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
  - Data analysis using machine learning OpenSource frameworks

##### Why did we develop the Sensoworks platform?

Our experience in complex system integration over the last 18 years, that lately evolved in interfacing IoT devices (OBD: On Board Devices) for car sharing and fleets management and our more recent involvement in monitoring of infrastructures as tunnels and bridges, made us believe that the best solution for us was to build a software that, other than to have all characteristics needed by an IoT platform, was also complemented with the other two GreenVulcano products: GV ESB to enable solid integration capabilities and workflow managements and Claudio, which serves as a modern and easy to use automation tool for managers.

##### When to use the Sensoworks platform?

There are many reasons why it is important to have a well designed IoT platform for your projects. Some of the reasons are listed below in the picture. But besides technical aspects, and not less important, is to choose an IoT platform supported by a company, that will walk with you during the entire lifecycle of your IoT project, from the initial design of the solution to the production and post-production phases.