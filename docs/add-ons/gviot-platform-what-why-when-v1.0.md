## ![image alt text](image_0.png) 

Sensoworks platform

What, why, when

01.Sep.2018

## ![image alt text](image_1.png)

─

# 1 Scope and introduction

In this document, we will explain what the GreenVulcano IoT platform is and what it does, and how the Sensoworks company, with its solid technical background, can help and walk with you through many challenging aspects of the IoT revolution.

The two things we want to highlight in this introduction are:

* The importance of the IoT revolution

* The importance of working together with a company already fluent with the IoT language

So, let’s start and welcome into the IoT world.

![image alt text](image_2.png)

Very likely you already heard about the term IoT.

In this document we will not give an explanation of what the IoT is in general, but we will only focus on what the Sensoworks platform is, and doing so, we strongly believe that many aspects of the IoT in general will come out. Over the internet there are very good descriptions and introductions of the IoT, so we just linked here a general source of information from which you can move on:

* [https://en.wikipedia.org/wiki/Internet_of_things](https://en.wikipedia.org/wiki/Internet_of_things)

One thing we want to emphasize however, it is that this revolution is so vast, that it is really crucial to adopt suitable products and, above all, a correct methodological approach if you want to succeed in living this revolution at best.

## 1.1 An "IoT data storm" is coming. Get ready

The IoT revolution will be disruptive. Sensors and actuators of all types, are being added to the Internet at a unimaginable rate and the IoT market will continue to be one of top exponentially growing markets in the next years.

The amount of data that these "things" will generate and hit the internet has never been faced before and will need new technologies and new paradigms to be able to collect, store, elaborate and analyze all these data. 

But how much data are we talking about when we say "data storm"?

Just to make a rapid estimation using the "galleries monitoring scenario" presented below in the next chapters, we have:

* Number of sensors:			780

* Sampling rate:			10 Hz

* Wiring:					30 km of optical fiber

* Packet dimension:			6 bytes (single sensor) - 30 bytes header for all

* Working time:				24/24h, 365d/year

We have:

* 780 sensors * 10 Hz * 10 bytes * 60 seconds * 60 minutes * 24 hours

    * ~46 Kb per second

    * 161,7 MB per hour

    * 3,78 GB per day

    * 10 messages (~4,6 kb each message) per second to send over the internet

And this is just one simple scenario of just one tunnel. There are many other scenario that require a much greater amount of data to elaborate.

Consider this table, that shows ranges of data related to a group of sensors of a hypothetical IoT project:

Nowadays this table is enough realistic when it categorizes the traffic as small, medium, high and huge, but in the near future these numbers are destined to increase, so (again) it is important to adopt suitable products and, above all, a correct methodological approach if you want to succeed in living this revolution at best.

Let’s do another computation using the number of Things predicted by 2020, by analysts of this market:

* 25 billions of Things * 10 kb per min * 60 min * 24 hour = 368.6 petabyte / day

    * ≈ 0.4 × information content of all words ever spoken (≈ 1 EB)

It looks like a real storm to me. **This is why Sensoworks it is the right choice for you.**

# 2 What, why, when

## 2.1 What is the Sensoworks platform?

The Sensoworks platform integrates IoT devices to enterprise or cloud systems. It allows the user to create and manage their own IoT ecosystem by facilitating data flow, communication between objects, device management and, in general, enabling advanced application functionalities.

One of the most important missions of the Sensoworks platform is to make objects speak, with a strong orientation towards infrastructures such as bridges, tunnels, construction sites, buildings, wind turbines and in general all infrastructures that need maintenance and monitoring. In general understand from the huge amount of data that they communicate their health. To prevent, in this way, failures or problems.

For this reason we collaborate with companies that have solid background in monitoring infrastructures, with companies that produce sensors and with expert in the field of what has to be monitored.

Collaborating with physicists, geologists, construction engineers is what makes the difference in succeeding in these projects. We strongly believe that the sum of two competences produces more than their pure algebraic result. Only facing a problem from different perspectives and different backgrounds, in a interdisciplinary approach, permits to solve problems better and faster. 

### 2.1.1 Main characteristics of the Sensoworks platform and its top 3 killing features

The Sensoworks platform has been designed to solve many IoT needs. These are a list of its features:

* EdgeGatway

    * It is the component that "talks" to the real object that needs to be monitored and controlled

    * Extensible and flexible architecture

    * Simple architecture that permits to be easily integrable with the Gateway and the platform

* Gateway

    * Its architecture extends and facilitates edge computing

    * Data normalization

    * Filtering

    * Security gate

    * Support for multi protocol communication between the device and the platform

    * Data ingestion modules to elaborate huge amount of data

    * Auto provisioning for new Things and Devices. It can be enable ON or OFF from the console

* Decoupling

    * Based on the Open Source Kafka infrastructure, that proved to be disruptive in many areas

    * Scalability and isolation for the entire platform

    * Back pressure regulation

    * Backbone for all internal communication

* DataPump

    * Security gate

    * Data enrichment

    * Filtering

    * Multi synch architecture, to support any type of store or streaming systems like: Mongo, Cassandra, relational DBs, Hadoop, Spark, Confluent KSQL and many others

* Core

    * "API first" design for use in headless environment

    * Auditing at core API level: any operation on devices, things or networks (D/T/N) is storicized by the platform

    * Query module to get meta info from N/T/D and to get telemetry data from your devices

* Store

    * Any combination of Datalakes, BigData, streaming modules

* General characteristics

    * Built on Open Source technologies: Spring, Kafka, Mongo, MySql, MQTT, Angular, Node

    * Secured by design

    * Analytics. Real time alerts and CEP

    * Machine learning

    * E2E traceability functionalities

    * Auto monitoring modules

    * Events generated from D/T/N can trigger event notifications

* Console

    * Stream processing

    * Time series graphs on data coming from the devices

    * Frequency analysis

    * Georeferenced graphs and tables

        * Google maps, OpenStreet map, WebGIS

    * Integrated lightweight ticketing system

    * Integrated logbook for production groups to log activities

    * Integrated lightweight CMS (docs related to D/T/N: Devices/Things/Network)

* Business Intelligence modules

    * Alarm definition and management through CEP processing

    * Scheduled and recurring data analysis and eport generation

    * Certifications of the sensed data using private of public Blockchain

    * Data analysis using machine learning Open source frameworks

* GV ESB for system integration with other systems

* GV Claudio for business automation

Its top 3 features are:

In addition the Sensoworks platform can:

* Integrate other systems through the Open Source GreenVulcano® ESB platform

* Automatise your work through GreenVulcano® Claudio.

## 2.2 Why did we develop the Sensoworks platform?

Our experience in complex system integration over the last 18 years, that lately evolved in interfacing IoT devices (OBD: On Board Devices) for car sharing and fleets management and our more recent involvement in monitoring of infrastructures as tunnels and bridges, made us believe that the best solution for us was to build a software that, other than to have all characteristics needed by an IoT platform, was also complemented with the other two GreenVulcano products: GV ESB to enable solid integration capabilities and workflow managements and Claudio, which serves as a modern and easy to use automation tool for managers.

## 2.3 When to use the Sensoworks platform?

There are many reasons why it is important to have a well designed IoT platform for your projects. Some of the reasons are listed below in the picture. But besides technical aspects, and not less important, is to choose an IoT platform supported by a company, that will walk with you during the entire lifecycle of your IoT project, from the initial design of the solution to the production and post-production phases.

![image alt text](image_3.png)

# 3 Overview of the Sensoworks platform: trip of a single measurement

## 3.1 Introduction

To simplify the exposition of the Sensoworks platform, in terms of what it is and how it addresses some of the top IoT issues (amount of data to elaborate, security, scalability, storage and analytics), we will describe the trip of a single measurement from **Things to Humans **and the back trip of a command from **Humans to Things**.

To make the narration of the trip more intuitive and concrete we will use a single use case described by the reference scenario below.

Since the narration will be done on a specific scenario, we don’t pretend to cover every single aspect of the IoT, or to cover all possibilities we have to solve all obstacles, but we strongly believe that the general understanding of the platform will be a lot better. Anyway on some situation we will refer to the other two scenarios.

During the trip we will often zoom in and out from details to high level architecture, to better under the the capabilities of the Sensoworks platform.

Moreover, along the narration we will focus on these aspects of the Sensoworks platform:

* Security aspects

* Traffic and scalability of the platform

* The 3M = Modularity, maintainability, monitorability 

We will also describe what choices we do have at each step. For example:

* Are the sensors directly connected to the internet or do we need a dedicated 4G communication?

* On the EdgeGateway if we have to transfer to the Gateway 100 GB per day, what protocol it is better to use

    * MQTT

    * json/http

    * Kafka 2 Kafka communication

    * Raw socket communication

* Do we have to send all the data or only an aggregate value?

* What about filtering and buffering?

### 3.1.1 High level architecture

The architecture of the platform will be described in a specific chapter, but for now it is useful to keep it at hand while we explain some aspects of the platform.

![image alt text](image_4.png)

### 3.1.2 Overview of the trip from Things to Humans: sensed data and analytics

![image alt text](image_5.png)

We will describe all the steps that a single measure will do from **Things to Humans**:

1. **Starting point - the Things**

We will describe how a sensor detects a measure (ex. the temperature of a room at a "T" time), how the measurement is read (raw value) on the sensor and pre-formatted into a digital value (ex. by the firmware and HW on the sensor)

2. EdgeGateway: sends the data through the internet to the Gateway

We don’t want to spoil :-) Read the chapter that tells the whole story

3. Internet: The data crosses the internet

4. Enter the Gateway

5. Buffering / decoupling (store the raw data into an intermediate storage)

6. DataPump from the buffer to the data lake

7. DataLake & Streaming

8. Analytics

9. **End point: the Humans**

### 3.1.3 Overview of the trip from Humans to Things: configure, administer, act on actuators

![image alt text](image_6.png)

We will describe all the steps a single measure will do from **Humans to Things**:

1. **Starting point - the Humans**

We will describe what a person can do to act on a Thing: open a door, turn on the heat, turn off lights, etc.

2. The console

We don’t want to spoil :-) Read the chapter that tells the whole story

3. The core

4. Dispatch commands

5. The Gateway receive the command

6. Internet: The command crosses the internet

7. The EdgeGateway receive the command

8. **End point: the Things**

## 3.2 The scenarios that will be used during the trip into the Sensoworks platform

### 3.2.1 Reference scenario: Monitoring structural deformation of a tunnel

![image alt text](image_7.png)

The scenario consists in monitoring the health of a tunnel, in term of structural deformations that may damage the tunnel itself and put Humans in danger.

Natural causes that affect the structure of a tunnel:

* Landslides

* Earthquakes

* Wind

* Infiltrations

* Temperature

* Etc.

Human causes that affect the structure of a tunnel:

* Traffic

* Heavy vehicles

* Accidents

* Etc.

But how do you actually prepare a tunnel to be monitored for deformations.

We can use a FS22 Industrial BraggMETER (picture 1) and wire the entire tunnel with the fibre cable (picture 2) and strain sensors (picture 3).

Source: [NTSG Val di Sambro](http://www.ntsgen.com/en/performed-works/tunnel-val-di-sambro): "3 lines of sensors have been installed along the whole tunnel, while the thermal sensors have been installed at distances previously set. This to compensate the effects, on the readings, of thermal variations and to obtain a pure mechanical deformation. It is possible to control the longitudinal movements of the tunnel, and verify if the tunnel keeps the initial shape as designed."

* Number of sensors:			780

* Sampling rate:			10 Hz

* Wiring:					30 km of optical fiber

* Packet dimension:			6 bytes (single sensor) - 30 bytes header for all

* PLE:					4 (working platform, lifting)

* Working time:				24/24h, 365d/year

We have:

* 780 sensors * 10 Hz * 10 bytes * 60 seconds * 60 minutes * 24 hours

    * ~46 Kb per second

    * 161,7 MB per hour

    * 3,78 GB per day

    * 10 messages (~4,6 kb each message) per second to send over the internet

Many information about the IoT technology can be found here: [https://www.hbm.com/en](https://www.hbm.com/en).

The picture 4 of the BraggMONITOR application (window application that connects via LAN to the Industrial BraggMETER) shows the signals from the strain sensors connected to the Industrial BraggMETER, that in this case (see picture 1) has four fibre cables doors.

### 3.2.2 Fleet monitoring

# 4 The trip from Things to Humans: sensed data and analytics

## 4.1 Starting point - the Things (step 1)

![image alt text](image_8.png)

The story begins with a strain sensor **SS01** at **t1** that is measuring a wavelength of **1572.52 nm** (nanometer = one billionth of a meter). Actually it is not just that sensor that is measuring the wavelength, but all 780 sensors at a common frequency of 10 Hz.

Here is some initial questions to answer if you want to use the BraggMETER:

* How can we read these importation out of the BraggMETER?

* How are the information coded? Binary, ASCII?

* Can we read a single value at a time or can we read in continuous mode (at 10 Hz)?

* Do I need a special communication protocol to use the BraggMETER?

* etc.

Fortunately the BraggMETER has an ethernet door and a user manual that can be retrieved here:

* [https://www.hbm.com/en/4604/fs22-industrial-braggmeter-optical-interrogator](https://www.hbm.com/en/4604/fs22-industrial-braggmeter-optical-interrogator)

To make this story short, here are the answers:

* If you open a socket with the command port and send a particular command to it, the BraggMETER can send informations back to you in continuous mode on another port. You can also decide if you want the information in binary or ascii mode

* The FS22 talks the "skippy" language:

    * [https://en.wikipedia.org/wiki/Standard_Commands_for_Programmable_Instruments](https://en.wikipedia.org/wiki/Standard_Commands_for_Programmable_Instruments)

        * telnet <FS22 ip> <command port>

        * Command			Responses

        * :SYST:TIME?			→ :ACK:15:33:56

        * :STAT?				→ :ACK:2

        * :SYST:NTPS?			→ :ACK:1:0.489:0.345

        * :ACQU:CONF:RATE:500	→ :ACK

* Each package (binary in this example) that you receive has a header of 30 bytes and 6 bytes for each sensor. In total (780 sensors * 6 bytes) + 30 bytes = 4710 bytes

**Output of the BraggMETER **(every 1/10 of sec = 10 Hz):

* "<header><ch0:s1>,**1572.52**,...,<ch0:sn>,...,<ch3:s1>,<ch3:s2>,...,<ch3:sn>"

## 4.2 EdgeGateway: sends the data through the internet to the Gateway (step 2)

Let’s take the second step into the Sensoworks platform.

![image alt text](image_9.png)Now we have to read this message out of the **BraggMETER**, and from its manual we know how to do it**.**

* "<header><ch0:s1>,**1572.52**,...,<ch0:sn>,...,<ch3:s1>,<ch3:s2>,...,<ch3:sn>"

For this scenario, we developed an EdgeGateway, written in Python, that is responsible to interface the Industrial BraggMETER. It handles the entire lifecycle of the device: connect, disconnect, restart, configure, etc.

At this stage we have many decision to take. I placed notes and some answer (for the reference scenario) directly here with the questions:

* Do we have to send the raw data to the Gateway?

    * For this particular scenario, after having considered the amount of data and its nature, we can decide to save the raw data and the derived data (from formulas) locally in csv format and send to the platform (the Gateway) an aggregation of the informations: in this case the average of the values over the last minute, both for the lambda values (raw data) and for the derived data: inclination (computed from two strain sensor coupled together), acceleration (three sensors), temperature (one sensor), etc.

* Do we have to buffer the information in case of slow or discontinuous internet connections? Which communication protocol can we use to send the data over the internet to the Gateway?

    * Our BraggMETER has an ethernet door and in the tunnel we need to monitor there is a stable high speed internet connection. In addition, since we are saving raw data locally, we can decide not to buffer information. Much depends also on what we need to do on the platform, at the end of our trip. Is it just for monitoring? Do we have to analyze the data further and at which level of detail? Can we afford to lose some data for the time the internet connection would be down (rare event)?

    * About the protocol, since we decided to send only aggregated information to the Gateway (once a minute), the amount of data to send over the internet is not so high and we can choose a comfortable communication protocol to do the job, like json/https. Eventually we can scale the Gateway if necessary using a load balancer and a cluster of Gateways

* Do I have to send all data or just an aggregation of them? How much data are we talking about, in size and number of requests per second?

    * For a long term monitoring of the tunnel, an aggregation of data over a minute is just fine. In fact we need to monitor the tunnel over the years in search of small and slow changes and only occasionally or on demand we may need to analyze raw data deeper, and in this case we still have the raw data saved on the computer on the Edge (saved on a NAS)

* Do we really need an Edge Gateway or can we do everything from the remote Gateway?

    * The BraggMETER is a very complex Thing to manage, as you can read from the previous paragraph. So we are forced to use a computer on the Edge to manage the FS22

    * The other reason, as important as the first one, is that the processing of the informations needs to keep up with the speed the FS22 sends information (up to 1000 Hz), and it would be very difficult to manage this frequency remotely over the internet

* Are there computations to make before to send the data through the internet?

    * Do we have to filter information before to send them?

        * In this case we don’t need filtering. All information of the FS22 are very important

    * Elaboration? Fourier transformations?

        * About elaboration, we need to apply many math formulas on the raw data (lambda measurements). This is necessary to compute strain, inclination measurements, acceleration, temperature, etc.

            * Note: about the temperature sensors, for example, they are usually coupled with other sensors. This is generally done to remove the effect of temperature (day and night cycles) from all stretching measurements (lambda)

**Output of fhe Sensoworks Edge gateway:**

After all formatting (binary to ascii) and computations (formulas in the time and frequency domain), we have:

* Locally we will have a directory that we fill with these raw files (and derived data)

    * ./data/

        * 2018-10-23/

            * 2018-09-24T1826-ch0.csv

                * "<header><ch0:s1>,**1572.52**,...,<ch0:sn>,...,<ch3:s1>,<ch3:s2>,...,<ch3:sn>"

            * temperature/

                * 2018-09-24T1826-temperature.csv

                    * "<ch0:thermometer-s1>,**45.502**,<...>"

            * purified_microstrain/

                * 2018-09-24T1826-purified_microstrain.csv

                    * "<ch0:purified_microstrain-s1>,**0.003**,<...>"

            * ...

* We have called the Gateway of the platform, making a **json/https call**, of aggregated informations over a minute + the derived informations of temperature, purified_microstrain and other data

    * "<header><ch0:s1>,**1572.26**,...,<ch0:sn>,...,<ch3:s1>,<ch3:s2>,...,<ch3:sn><ch0:thermometer-s1,**45.502**,<...><ch0:purified_microstrain-s1>,**0.003**,<...>"

        * The value of the **SS01** has the average value, over the last minute, of **1572.26**. The value at **t1 **was **1572.52**

        * **45.502** and **0.003** are derived data

**Additional notes for other scenarios**:

* The Sensoworks Edge gateway is a very particular component of any IoT platform and is very specific and tight to the "Thing" that has to be connected. If the Thing can send messages directly to the Gateway, The Sensoworks Edge gateway may not be necessary. In the reference scenario of tunnel monitoring with the BraggMETER, we needed to handle the device lifecycle and apply different checks and computations (derived formulas) at a very high frequency on the Edge (where the Thing is located = edge computing), so The Sensoworks Edge gateway was strictly necessary. For the other scenario of “Fleet management and monitoring” each car is able to communicate directly with the Gateway sending json/http messages, so there is no Edge Gateway to interpose between the Thing and the Gateway.

* Depending on the frequency and volume of data to send, other network and communication protocols may be more suitable. See the next paragraph for additional detail about suitable protocols

**GreenVulcano IoT platform info**:

* See the Sensoworks platform catalog online to check if the Io-Thing to interact with requires an Edge Gateway

## 4.3 Internet: The data crosses the internet (step 3)

![image alt text](image_10.png)

We will now describe how the measure cross the internet and what are the precautions to take to avoid others to hack the data.

We are about to cross the oceans of the Internet. At a first glance it would seem that there is not much to say about transferring data over the internet, but things are always a bit more complicated than they seem.

There are the things that, in general, need to be answered and some precautions to take:

* How stable is the connection? Let’s not forget the the term IoT is the acronym for the Internet of Things, which means that Things need necessarily to be connected to the Internet to become citizens of the IoT world. Things can be cars, walls, ships, tunnels, wheels, motors and an infinite number of other devices; and usually these devices are not easily connectable to the Internet. Other options are ([https://www.link-labs.com/blog/complete-list-iot-network-protocols](https://www.link-labs.com/blog/complete-list-iot-network-protocols)): Bluetooth, BLE, ZigBee, Z-Wave, 6LoWPAN, Thread, WiFi-ah (HaLow), 2G (GSM), 3G & 4G, LTE Cat 0, 1, & 3, LTE-M1, NB-IoT, 5G, NFC, RFID, SigFox, LoRaWAN, Ingenu, Weightless-N, Weightless-P, Weightless-W, ANT & ANT+, DigiMesh, MiWi, EnOcean, Dash7, WirelessHART

    * For our scenario we have a fast and stable Internet connection, so we no problems about this 

* Which is the transfer rate that we need, related to the amount of data to transfer? How does it affect the the choice of the protocol?

    * For our scenario we have a call every minute and Internet is directly available in the tunnel, so this is not an issue for us. But in general there are an infinite number of differently complex situations that can be faced. Bad connectivity, no power available, isolated devices and many others. This is why there are many network protocols available

* Is security an important issue for the data you are communicating?

    * We decided to use json/https calls. Hence the "s" in HTTPS would do the job

* Can data sent to the Gateway be lost or or they are all essential?

    * In our case we can use dedicated hardware for the Sensoworks platform (a load balancer, a cluster of Gateway, Kafka, DataPump, the DBs, Mongo, etc.) and Internet is stable, so it is very unlikely (or at least very rare) that the connection will be lost and even in that case we have raw data saved and backed up on a NAS

**Additional notes for other scenarios**:

* As we said, to decide the best way to cross the Internet, we need to understand exactly what it is needed for the specific project that we are realizing. There are in infinite number of combinations, that depends by many factory:

    * What type of Things are we talking about? Trees, tunnels, cars, submarines, drones?

    * Where are the Things located? On the road, in mountain, under the water?

    * Home many Things do we ha to monitor/manage? 10, 100, 1000, 10000, etc.?

    * May many informations do we want by each Thing?

    * Are these Things connected or bridged to the internet? Bluetooth, BLE, ZigBee, Z-Wave, LoRaWAN, ...?

    * Are they close to the electricity grid? Or they have to use solar panels?

**Output of fhe Sensoworks Edge gateway:**

* We are now knocking at the door of the Gateway with the same data that had left The Sensoworks Edge gateway

    * "<header><ch0:s1>,**1572.26**,...,<ch0:sn>,...,<ch3:s1>,<ch3:s2>,...,<ch3:sn><ch0:thermometer-s1,**45.502**,<...><ch0:purified_microstrain-s1>,**0.003**,<...>"

## 4.4 Enter the Gateway (step 4)

We have arrived at one of the most important components of the platform: the Gateway, that is responsible to analyze the incoming messages and authorize them to enter the platform.

![image alt text](image_11.png)

It performs these actions and checks:

* Handle the physical protocol of the Thing to monitor

    * In our reference scenario we don’t need to handle the lifecycle of the FS22 "Thing" on the gateway. Simply the Gateway receive the measure[s] to handle

* Check the syntax and the content of the received message

    * It will receive the ascii buffer that contains the values from the sensors

        * "<header><ch0:s1>,**1572.26**,...,<ch0:sn>,...,<ch3:s1>,<ch3:s2>,...,<ch3:sn><ch0:thermometer-s1,**45.502**,<...><ch0:purified_microstrain-s1>,**0.003**,<...>"

* Determine the Network, Thing and Device the message represent

    * The header will be used to determine Network, Thing and Device of the incoming measure

        *  We have three devices:

            * Network: "Val di Sambro"

            * Thing: Wall-Building-A

            * Device: lambda-s1 - **1572.26 nm**

            * Device: thermometer-s1 - **45.502 degree Celsius**

            * Device: purified_microstrain-s1 - **0.003 nm**

* Authorize the message to enter, if enabled, into the platform

* Elaborate the incoming message to adapt it to the internal data model of the platform

    * TBD: examples

* Write the message to the "buffering / decoupling" layer

## 4.5 Buffering / decoupling (store the raw data into an intermediate layer) (step 5)

![image alt text](image_12.png)

The role of the Buffering & decoupling layer, based on Kafka technology, is very important for the platform:

* It guarantees to the Gateway to do only the work necessary to the check-in of the incoming message, without charging it to the next elaboration phase

* It permits to the platform to scale massively, based on traffic needs

    * Kafka is very efficient when it comes to having a multitude of producer and consumers attached to the platform. Kafka itself can scale to many nodes easily 

## 4.6 DataPump from the buffer to the data lake

![image alt text](image_13.png)

Now that we have all data normalized by the Gateway (small json messages each with the status of a single device) and streamed into the "buffering & decoupling" layer, we are ready to “pump” the data into the correct final destination.

To do this, the DataPump consume messages from Kafka (the buffering and decoupling layer) and send them to one of these destinations:

* MongoDB

* Cassandra

* Hadoop

* Kafka Stream

* KSQL

* Apache Spark

* Elastic

* … (and many others)

## 4.7 DataLake/BigData & Streaming

![image alt text](image_14.png)

We are now entering the main destinations for the data. Since now the data have transited the platform for a very short time (as fast as possible), passing through the EdgeGateway, the internet, the Gateway, Kafka (the buffering & decoupling layer), and the DataPump.

These data have to be sent inside into one or more of these categories: DataLakes, BigData system, or, in other cases, data need to be forwarded into a Streaming destination, for real-time processing or monitoring.

## 4.8 Analytics

![image alt text](image_15.png)

Data are stored in destinations for reasons that may vary from case to case. In our reference scenario, the scope was, for example, to monitor the health of the gallery in terms of deformations, temperature reached inside the gallery, and other important physical aspects. In our scenario, we decided to store the messages into MongoDB for future analysis and to visualize them into the Elastic.co software stack (Kibana).

![image alt text](image_16.png)

![image alt text](image_17.png)

## 4.9 End point: the Humans

Finally we will describe what do the Humans see at the end of the trip.

# 5 The trip from Humans to Things: configure, administer, act

## 5.1 Start point: the Humans

We will describe what a person can do to act on a Thing: open a door, turn on the heat, turn off lights

## 5.2 The console

We will describe how the commands are executed from the Console and asked to the core

## 5.3 The core

We will describe what happens inside the core of the platform

## 5.4 Dispatch commands

We will describe why user commands are send to the Dispatch module

## 5.5 The Gateway receive the command

We will describe how the command is handle by the Gateway: is it a command for the Gateway itself or for a remote Thing?

## 5.6 Internet: The command crosses the internet

We will describe how the command will cross the internet and what are the precautions to take to avoid others hack the command

## 5.7 The EdgeGateway receive the command

We will describe how the command is handle by the EdgeGateway and transformed into something a Thing can understand

## 5.8 End point - the Things

We will describe how the command is elaborated by the Thing

# 6 Architecture

## 6.1 High Level Architecture

![image alt text](image_18.png)

![image alt text](image_19.png)

## 6.2 Edge Gateway details

### 6.2.1 Edge computing

## 6.3 Gateway details

### 6.3.1 Gateway computing

## 6.4 Buffering / decoupling (store the raw data into an intermediate storage)

## 6.5 Core details

### 6.5.1 Users and Roles

The following table summarizes the roles defined for the IoT Platform users.

### 6.5.2 Operations

### 6.5.3 Operations Policy

## 6.6 Data pump details

## 6.7 Data lake details

## 6.8 Data analysis details

## 6.9 Streaming

# 7 Installation options

## 7.1 Community shared cloud, dedicated cloud, hybrid, on-premise?

# 8 Platform administration

## 8.1 User registration (Onboarding)

## 8.2 Define a new Network

## 8.3 Assign users to the Network

## 8.4 Pre-provisioning or auto provisioning

## 8.5 Add a new Thing

## 8.6 Add a new Device (Sensor/Actuator)

## 8.7 Disable a Network, a Thing or a Device

## 8.8 8.6 

# 9 Platform monitoring

# 10 Continuous delivery

## 10.1 Jenkins Dashboard

Jenkins is the Continuous Delivery tool of the Sensoworks platform, which carries out the continuous delivery pipeline specified in the Jenkinsfile file present in the project codebase.

Jenkins exposes a dashboard which can be accessed through the URL address specified in the platform environment. The dashboard summarizes the details of the last pipeline executions and allows configuring Jenkins behaviour (i.e. how the pipeline is triggered).

(((Drawing skipped)))

(((Drawing skipped)))

# 11 Addendum & notes

## 11.1 Catalog of IoT projects

* Tunnel structure monitoring (bridges, buildings, irrigation wells, etc.)

* Forest trees monitoring

* Agriculture fields monitoring

* Cars and/or bicycles monitoring

* Industrial machines monitoring and control (turn on, off, upgrade, restart, etc.)

* Drones monitoring

* Monitor the loss of water in the pipes

* ...

## 11.2 Things that interact in different ways

What is the Thing of the IoT world?

It would be really nice if all Things would be IoT friendly by communicating with any IoT platform using a simple communication format and protocol, like for example JSON over HTTP or MQTT.

Unfortunately things are a little more complicated and a good IoT platform should be able to deal with all kind of IoT devices.

In the next picture there are samples of interactions divided by communication type, message format and communication protocol. The scope of the picture is only to show that things can get really messy when it comes to realize a communication with a real sensor.

![image alt text](image_20.png)

* Things that can send unsolicited informations (without connection required)

    * Example

        * GPS position in binary format over MQTT

* Things that can send unsolicited informations (with connection required)

    * Example

        * Temperature in positional flat buffer over Kafka

* Things that can be queried for a single value (polling)

    * Example

        * Temperature of specific sensor in CSV over REST api

* Things that can send unsolicited informations (with connection required)

    * Example

        * Lambda values in binary format over TCP connection

# 12 Notes

* Enable/Disable a Device *

* Enable/Disable a Thing *

* Manage groups

* Run a command on a Device

    * Mute a Device

    * Mute a Thing

* Run a command on a group of Devices

* Run a command on a Thing

* Run a command on a group of Things

* Run a command on a network of Things

* Run a configuration command for the Gateway

* Run a configuration command for The Sensoworks Edge gateway

* Run a configuration command for the Thing / Devices

* Run an administration command for the Gateway

* Run an administration command for The Sensoworks Edge gateway

* Run an administration command for the Thing / Devices

* getNetworkInfo

* getThingInfo

* getDeviceInfo

* getCommandHistory (Network, Thing, Device)

* Per gruppo

    * Tutti gli oggetti che parlano MQTT

    * Tuggli i sensori della palazzina A (NTSG)

    * Tutte le luci

    * Tutte le luci di una specifica stanza

* Traffico inbound e outbound

* Comandi

    * Ping ad un oggetto

    * Force wakeup

    * Update OTA

* Keepalive

* Statistiche su Network

* Statistiche su Things

* Statistiche su Device

* Grafici realtime

* Definisci limiti

* Pre provisioning

    * Manual

    * From file

    * Automatic (default)

        * Acquire Devices and Things but do not collect data

* FreeRTOS?

* Code distribution OTA to The Sensoworks Edge gateways

## 12.1 Other ideas

* FreeRTOS?

* Code distribution OTA to The Sensoworks Edge gateways

* AI & machine learning

## 12.2 Snapshots competitors

![image alt text](image_21.png)

![image alt text](image_22.png)

![image alt text](image_23.png)

![image alt text](image_24.png)

![image alt text](image_25.png)

![image alt text](image_26.png)

