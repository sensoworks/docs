# Platform architecture

Sensoworks is a scalable IoT platform built mainly in Java that can be deployed, depending on the client’s needs, on-premise, in the cloud, or deployed in a hybrid environment. It has been designed since the beginning to be very flexible and adaptive in collecting data from heterogeneous sources, and so be able to be used for different scenarios and in different fields of application.

### Platform Components

The microservices architecture of Sensoworks consists of various groups of components, each performing specific functions essential for the collection, analysis, and visualization of IoT data. Below is a more generalized explanation of these component groups:

1. **Data Ingestion and Storage**: This group of components is responsible for introducing data into the platform. Generally, data is ingested from Sensoworks' Edge/Fog components but can also be compatible with other systems. These components ensure the data is deposited into the DataLake, offering high compatibility with various storage options, including MongoDB, S3, and Clickhouse .

2. **Graphical Interface**: This part of the platform provides configurable and customizable dashboards that allow users to manage devices and users within the platform. It supports the visualization of data through various graphical representations, enhancing user interaction and decision-making processes.

3. **Analytics**: Components dedicated to performing specific data analyses fall into this category. These components utilize advanced algorithms and machine learning to analyze data, detect anomalies, and generate insights. This group ensures that the platform can provide meaningful and actionable information from the collected data.

4. **Security and Authentication**: Ensuring the platform's security, these components handle authentication and authorization of users and devices. They manage the secure access and permissions necessary to protect the integrity and confidentiality of the data and the platform itself.

5. **API Exposure and Integration**: These components expose APIs that allow communication with the platform's elements and integration with external systems. They facilitate data acquisition and provision, enabling seamless interoperability with third-party systems and extending the platform's capabilities.

By categorizing the platform's components into these functional groups, Sensoworks ensures a robust, flexible, and scalable solution for IoT data management and analysis, meeting diverse needs across various applications.

### Integration with Open Source Software and Third-Party Systems

Sensoworks integrates third-party open source software to enhance its capabilities. It uses technologies like Kubernetes for container orchestration and MongoDB for big data management. The platform can integrate with external services via its APIs, allowing interoperability and expanded functionalities with existing systems.





<p align="center"><img src="/sensoworks-docs/images/sensoworks-mla.jpg" width="100%" height="100%"></p>


<p align="center"><img src="/sensoworks-docs/images/sensoworks-overview-modules.jpg" width="100%" height="100%"></p>



<p align="center"><img src="/sensoworks-docs/images/sensoworks-mongodb-data-isolation.jpg" width="30%" height="30%"></p>

<p align="center"><img src="/sensoworks-docs/images/sensoworks-kubernetes-availability-zones.png" width="75%" height="75%"></p>


<p align="center"><img src="/sensoworks-docs/images/sensoworks-ha-lb-api-gateway.jpg" width="75%" height="75%"></p>

