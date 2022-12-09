---
layout: default
title: Edge architecture
nav_order: 31
description: "Edge architecture"
parent: Edge gateway
---

In the IoT world, two terms have been coined to describe what can happen near or on the "Things" that you want to interact with. These two terms are Edge and Fog computing.

Shortly:
- Edge is closer to the object the platform needs to interact with
- Edge computing can happen without an internet connection or have a limited connection just to send the result of the computing (reading, computations, etc.)
- Example of Edge computing can be:
  - A smart wearable device that monitor health parameters, that can communicate to the cloud using the bluethoot connection to a mobile phone
  - An Arduino based solution developed in C software, with a power back an internet connectivity, monitoring temperature, air quality, noise
  - A Python program running in an industrial PC, receiving information from sensors nearby, single or multiple sensors, connected via Bluethoot or else
- Fog is still a component running on the Edge, but usually interacts or need additional communication with the cloud to work properly. This interaction can be limited to configuring the Fog gateway

<p align="center"><img src="/docs/assets/images/sensoworks-edge-fog-architecture.jpeg" width="100%" height="100%"></p>

Lets start with some definitions of Edge and Fog computing:

> **Wikipedia**: **[Edge computing](https://en.wikipedia.org/wiki/Edge_computing)** is a Distributed computing paradigm that brings Computation and Data storage closer to the sources of data. This is expected to improve response times and save bandwidth (computing). Edge computing is an architecture rather than a specific technology, and a Logical topology - and location-sensitive form of distributed computing. The origins of edge computing lie in content delivery network that were created in the late 1990s to serve web and video content from edge server (computing) that were deployed close to users. In the early 2000s, these networks evolved to host applications and application components on edge servers, resulting in the first commercial edge computing services that hosted applications such as dealer locators, shopping carts, real-time data aggregators, and ad insertion engines.

> **Wikipedia**: The term "**[Fog computing](https://en.wikipedia.org/wiki/Fog_computing)**" was first developed by Cisco in 2012. Cisco Systems, ARM Holdings, Dell, Intel, Microsoft, and Princeton University, founded the OpenFog Consortium to promote interests and development in fog computing. Cisco Sr. Managing-Director Helder Antunes became the consortium's first chairman and Intel's Chief IoT Strategist Jeff Fedders became its first president. Both cloud computing and fog computing provide storage, applications, and data to end-users. However, fog computing is closer to end-users and has wider geographical distribution. 'Cloud computing' is the practice of using a network of remote servers hosted on the Internet to store, manage, and process data, rather than a local server or a personal computer. Also known as edge computing or fogging, fog computing facilitates the operation of compute, storage, and networking services between end devices and cloud computing data centers National Institute of Standards and Technology in March 2018 released a definition of fog computing adopting much of Cisco's commercial terminology as NIST Special Publication 500-325, Fog Computing Conceptual Model, that defines fog computing as a horizontal, physical or virtual resource paradigm that resides between smart end-devices and traditional cloud computing or data center. This paradigm supports vertically-isolated, latency-sensitive applications by providing ubiquitous, scalable, layered, federated, distributed computing, storage, and network connectivity. Thus, fog computing is most distinguished by distance from the edge. In the theoretical model of fog computing, fog computing nodes are physically and functionally operative between edge nodes and centralized cloud. Much of the terminology is undefined, including key architectural terms like "smart", and the distinction between fog computing from edge computing is not generally agreed.

The better understand the differences between **Edge** and **Fog computing**, consider also the descriptions from Cisco and Siemens:

> [**Cisco**](https://www.cisco.com/): Fog Computing is a paradigm that extends Cloud computing and services to the edge of the network. Similar to Cloud, Fog provides data, compute, storage, and application services to end-users. The distinguishing Fog characteristics are its proximity to end-users, its dense geographical distribution, and its support for mobility. Services are hosted at the network edge or even end devices such as set-top-boxes or access points. By doing so, Fog reduces service latency, and improves QoS, resulting in superior user-experience. Fog Computing supports emerging Internet of Everything (IoE) applications that demand real-time/predictable latency (industrial automation, transportation, networks of sensors and actuators). Thanks to its wide geographical distribution the Fog paradigm is well positioned for real time big data and real time analytics. Fog supports densely distributed data collection points, hence adding a fourth axis to the often mentioned Big Data dimensions (volume, variety, and velocity).

> [**Siemens**](https://www.siemens.com): Fog computing blends both edge and cloud computing. By doing so, it stretches the cloud to the edge of the network so that it's easier to connect IoT devices in real-time. By incorporating the benefits of both edge and cloud technology, it achieves a high-level network environment. It can connect two disparate ecosystems without losing local storage benefits. Fog computing reduces latency between devices while simultaneously reducing bandwidth requirements. It opens up exciting possibilities for several industries. Autonomous self-driving cars, smart cities, and real-time analytics are all at their best with fog computing. Its capacity to transfer data right at the edge of remote areas makes it suitable for roaming use cases as well. Fog computing is, effectively, edge computing with wheels.

Depending on the scenario of your project, the type of "things" you need to connect, the type of analisys you need to conduct and many additional factors, different versions of the Sensoworks Edge/Fog gateways solutions can be used.

| Destination | Notes |
|:---|:---|
|  Embedded computing | This is the closest to the "Thing" in Io"T" world you can get. C remains the most widely used embedded programming language. Contact Sensoworks to discuss which is the the best solution for your needs |
|  Realtime OS computing | As for embedded computing, forget about Python, Java, etc. "C" is needed in 99% of cases. Dev with Arduino?, Maduino? STMicroelectronics?, Sensoworks has pre-packaged solutions for waste management, water leak detection, multi sensors general purpose pre-packaded applicances. Contact Sensoworks for additional info and to start a new "voyage" together |
|  Tiny computers | Here we generally have a user frienly OS you can interact with. Unix is geneally the best option we propose. Solutions like Raspberry, Asus Tinker Board, Odroid and many others are available. On these systems, Sensoworks can install here all its Edge and Fog solutions: C, C++, Python  |
|  Industrial computers | There are thousands of solutions [here](https://www.google.com/search?q=industrial+pc+manufacturers). Usually these system run Unix and Sensoworks can install here all its Edge and Fog solutions: C, C++, Python |
|  Standard computers | Same as for Industrial computers, there are many |
|  Industrial applicances | When it come about industry 4.0, protocols such as OPC-UA, Modbus, Bacnet are usually necessary. For such scopes the Sensoworks solution can come embedded into industry 4.0 appliances, as for example the [InGateway902](https://www.inhandnetworks.com/products/edge-computing-gateway.html) |

Many factors can influence the choice of the Sensoworks component to use.

| Destination | Notes |
|:---|:---|
|  Electric power availability | Is AC available? Is solar power an option? |
|  Internet availability | Is there a LAN cable at the site or close? How can you reach the cloud?: GSM, Lora, wifi to a gateway, smoke signals |
|  Realtime and high frequency monitoring | These needs may highly influece the component you need to install: C, Java, Pyhon, etc. |
|  Alerting | Do you need alerting capabilities on the edge? |
|  MachineLearning capabilities | Do you need Machine Learning capabilities at the Edge? |
|  Local storage | Do you need to save data at the Edge? |
|  Complex math functions | What kind of elavoration is necessary at the Edge. Dynamic system analisys? Is the FFT involved? |
|  Digital twin capabilities | Do you also need to interact visually with your system? |
|  ... | Contact Sensoworks for additional info and to start a new "voyage" together |

Overview of the various possibilities:

<p align="center"><img src="/docs/assets/images/sensoworks-edge-scenarious.jpeg" width="75%" height="75%"></p>
