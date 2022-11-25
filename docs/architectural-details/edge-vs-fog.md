---
layout: default
title: Fog vs Edge
nav_order: 51
description: "Fog vs Edge"
parent: Architectural details
---

Lets start with some definitions of Edge and Fog computing:

> **Wikipedia**: **[Edge computing](https://en.wikipedia.org/wiki/Edge_computing)** is a Distributed computing paradigm that brings Computation and Data storage closer to the sources of data. This is expected to improve response times and save Bandwidth (computing). Edge computing is an architecture rather than a specific technology, and a Logical topology - and location-sensitive form of distributed computing. The origins of edge computing lie in Content delivery network that were created in the late 1990s to serve web and video content from edge Server (computing) that were deployed close to users. In the early 2000s, these networks evolved to host applications and application components on edge servers, resulting in the first commercial edge computing services that hosted applications such as dealer locators, shopping carts, real-time data aggregators, and ad insertion engines.

> **Wikipedia**: The term "**[Fog computing](https://en.wikipedia.org/wiki/Fog_computing)**" was first developed by Cisco in 2012. Cisco Systems, ARM Holdings, Dell, Intel, Microsoft, and Princeton University, founded the penFog Consortium to promote interests and development in fog computing. Cisco Sr. Managing-Director Helder Antunes became the consortium's first chairman and Intel's Chief IoT Strategist Jeff Fedders became its first president. Both cloud computing and fog computing provide storage, applications, and data to end-users. However, fog computing is closer to end-users and has wider geographical distribution. 'Cloud computing' is the practice of using a network of remote servers hosted on the Internet to store, manage, and process data, rather than a local server or a personal computer. Also known as edge computing or fogging, fog computing facilitates the operation of compute, storage, and networking services between end devices and cloud computing data centers National Institute of Standards and Technology in March 2018 released a definition of fog computing adopting much of Cisco's commercial terminology as NIST Special Publication 500-325, Fog Computing Conceptual Model, that defines fog computing as a horizontal, physical or virtual resource paradigm that resides between smart end-devices and traditional cloud computing or data center. This paradigm supports vertically-isolated, latency-sensitive applications by providing ubiquitous, scalable, layered, federated, distributed computing, storage, and network connectivity. Thus, fog computing is most distinguished by distance from the edge. In the theoretical model of fog computing, fog computing nodes are physically and functionally operative between edge nodes and centralized cloud. Much of the terminology is undefined, including key architectural terms like "smart", and the distinction between fog computing from edge computing is not generally agreed.

The better understand the differences between Edge and Fog computing, consider al the voices of Cisco and Siemens talking about Fog and Edge computing:

> **Cisco**: Fog Computing is a paradigm that extends Cloud computing and services to the edge of the network. Similar to Cloud, Fog provides data, compute, storage, and application services to end-users. The distinguishing Fog characteristics are its proximity to end-users, its dense geographical distribution, and its support for mobility. Services are hosted at the network edge or even end devices such as set-top-boxes or access points. By doing so, Fog reduces service latency, and improves QoS, resulting in superior user-experience. Fog Computing supports emerging Internet of Everything (IoE) applications that demand real-time/predictable latency (industrial automation, transportation, networks of sensors and actuators). Thanks to its wide geographical distribution the Fog paradigm is well positioned for real time big data and real time analytics. Fog supports densely distributed data collection points, hence adding a fourth axis to the often mentioned Big Data dimensions (volume, variety, and velocity).

> **Siemens**: Fog computing blends both edge and cloud computing. By doing so, it stretches the cloud to the edge of the network so that it's easier to connect IoT devices in real-time. By incorporating the benefits of both edge and cloud technology, it achieves a high-level network environment. It can connect two disparate ecosystems without losing local storage benefits. Fog computing reduces latency between devices while simultaneously reducing bandwidth requirements. It opens up exciting possibilities for several industries. Autonomous self-driving cars, smart cities, and real-time analytics are all at their best with fog computing. Its capacity to transfer data right at the edge of remote areas makes it suitable for roaming use cases as well. Fog computing is, effectively, edge computing with wheels.

Sensoworks Edge and Fog high level architecture:

![](/docs/assets/images/sensoworks-edge-fog-architecture.jpeg)

From a very high level point of view both the Sensoworks Edge and Fog gateways share more or less the same architecture, with some differences you can find [here](https://TBD).

Depending on the scenario of your project, the type of "things" you need to connect, the type of analisys you need to conduct and many additional factors, different versions of the Edge/Fog gateway

| Destination | Notes |
| --- | --- |
|  Embedded computing | This is the closest to the "Thing" in Io"T" you can get. Embedding programming is necessary |
|  Realtime OS computing | Forget about Python, Java, etc. "C" is needed 99% of the time |
|  Tiny computers | Raspberry |
|  Industrial computers | xxx |
|  Standard computers | xxx |
|  Industrial applicances | xxx |

Many factors can influence the choice of the Sensoworks component to use:

| Destination | Notes |
| --- | --- |
|  Electric power availability | Is AC available? Is solar power an option? |
|  Internet availability | Is there a LAN cable at the site or close? Do you need **GSM**, **Lora**, **Smoke signals** |
|  Realtime and high frequency monitoring | These needs may highly |
|  Alerting | Do you need alerting capabilities on the edge? |

Sensoworks has different

