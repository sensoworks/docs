# Components

The microservices of the Sensoworks platform are shown here:

<p align="center"><img src="/docs/images/sensoworks-microservices.jpg" width="100%" height="100%"></p>

Let's now analyze the function of each individual component in detail.

## Foreman

The Foreman component is a central and core part of the Sensoworks platform and provides essential functionality through its RESTful API. It acts as a critical interface, interacting with almost every other component in the system to ensure seamless integration and communication.
One of the primary roles of the Foreman component is to interface with the Sensoworks Desk, providing both telemetry and log information about devices and user data within the system. This interaction enables efficient data retrieval and management.
In addition, the APIs exposed by the Foreman component, with appropriate security measures, allow external interfaces to connect and access the information they need. This capability extends the functionality of our IoT system, making it versatile and adaptable to various external requirements.

## DataGate

The Datagate component serves as the primary entry point for data into our platform. It supports communications via HTTP/S, MQTT, and Kafka, making it versatile and adaptable to various data transmission protocols.
Initially designed to receive JSON data from Sensoworks Fog, the Datagate component is equally capable of handling data from various other sources. This versatility ensures that the platform can seamlessly integrate with a wide range of data providers. Upon receiving data, the Datagate component adapt the incoming data to match the platform’s standardized format, ensuring consistency and compatibility across all system modules. By doing so, Datagate guarantees that the data is ready for efficient processing and analysis, maintaining the integrity and reliability of the information within the platform. Additionally, this component handles data decoupling via Kafka to prevent bottlenecks, ensuring a smooth and uninterrupted data flow. 

## DataPump

The Datapump component plays a crucial role in our data management infrastructure by dequeuing data placed on Kafka by the Datagate and directing it to the desired data lake. This component is designed to ensure efficient data transfer and storage across various supported storage solutions. Among the storage options supported by the Datapump are MongoDB, MySQL, S3, and ClickHouse. This flexibility allows the system to leverage the strengths of different storage technologies, optimizing for performance, scalability, and specific use cases. By seamlessly integrating with multiple storage backends, the Datapump component ensures that data flows efficiently from ingestion to storage, maintaining the integrity and accessibility of the data across the platform. This functionality is essential for enabling robust data analysis and retrieval processes.


## Desk

The Desk component serves as the front end of our platform, providing users with an intuitive interface to interact with the system based on their permissions. It is designed to offer a comprehensive suite of functionalities, ensuring users can efficiently manage and analyze their data.
Users can visualize data and analyses, initiate new analyses, and manage user accounts, as well as the infrastructure related to networks, things, and devices. The Desk component ensures that all these tasks are accessible through a user-friendly interface.
Additionally, the Desk component offers the capability to create customized dashboards directly within the platform or through Grafana. This feature enhances the user experience by allowing tailored data visualization and monitoring solutions that meet specific needs and preferences.
With its robust and versatile interface, the Desk component is central to the user experience, enabling effective data management, analysis, and infrastructure control.


## Storage

The Storage component is integral to interfacing with the data lake and providing data for specialized analyses within the platform. This component ensures efficient data retrieval and storage, facilitating the smooth transfer of large datasets between the data lake and the platform. Designed to handle large volumes of data, the Storage component optimizes access to stored information, ensuring that analytical tools and algorithms can function effectively. This capability is essential for performing in-depth analyses, such as Operational Modal Analysis (OMA), which require extensive and accurate data inputs. 
The Storage component’s role in managing and providing access to data from the data lake is crucial for enabling the platform to perform high-level analyses and derive actionable insights, improving the overall functionality and intelligence of the system.


## Integrations

The Integrations component is designed to streamline the authentication and management of user accounts on third-party services such as Grafana and ClickHouse. It provides an automated and transparent experience for users, simplifying the integration process.
With the Integrations component, users can seamlessly authenticate, create, and modify accounts on supported third-party services without manual intervention. This automation ensures that user management is efficient and consistent, reducing the administrative burden and potential for errors. By offering a smooth and user-friendly interface for third-party service integration, the Integrations component enhances the overall usability and efficiency of the platform, allowing users to focus on their core tasks without worrying about underlying integration complexities.


## Openvpn-server

The OpenVPN-Server component enables secure connections between external elements and the infrastructure. It provides a reliable and encrypted communication channel, ensuring that external devices and systems can interface with the platform safely. By utilizing the OpenVPN-Server component, the infrastructure can securely extend its reach to include external devices, allowing for seamless and protected data exchange. This component is crucial for maintaining the integrity and confidentiality of communications, especially when interacting with external networks. The OpenVPN-Server’s robust security measures ensure that all connections are encrypted and authenticated, providing peace of mind and compliance with security standards.


## Proxy

The Proxy component serves as an intermediary between external clients and the platform, facilitating secure and efficient communication. It is designed to handle incoming requests, forward them to the appropriate internal services, and return the responses to the clients.
By acting as a gateway, the Proxy component enhances security by isolating internal services from direct external access. It can also perform request filtering, which help to optimize performance and manage traffic effectively. Additionally, the Proxy component can enforce access control policies, ensuring that only authorized users and devices can interact with the platform. This adds an extra layer of security and helps to maintain the integrity of the system.

## CA

The CA (Certificate Authority) component is responsible for managing certificates between external devices and the platform. This component ensures secure communications and authentication, even in situations where the connection is inactive or unstable.
By overseeing the issuance, renewal, and revocation of certificates, the CA component provides a robust security framework that verifies the identity of external devices and the platform. This process is essential for maintaining trust and integrity within the IoT ecosystem. 
Additionally, the CA component is designed to operate efficiently in environments with intermittent or unreliable connectivity, ensuring that secure operations can continue without interruption. This capability is critical for scenarios where continuous connectivity cannot be guaranteed. The CA component’s role in managing certificates is vital for the secure and reliable operation of the platform, safeguarding communications and maintaining a high level of security.


## OMA-Api

The OMA-Api component has all the API needed for the Frontend (Desk) to properly manage the OMA analysis runs in the OMA section. Every interaction between the user and the OMAs has with the OMA section needs to pass through this component. This is true even for viewing the analysis results.

## OMA-Worker

The OMA-Worker component is a specialized module designed to perform Operational Modal Analysis (OMA). This component continuously polls a collection to see if there are new runs to do. Normally, this collection is the MongoDB database. Possible values for the run types are: PREPROCESSING, FDD and SSI.

After a payload is found in the collection, the Worker will take the run request and execute the requested analysis. After the run is done, if there are no errors, the results will be saved inside the multiple collections in MongoDB.


## Edge-Broker

The Edge-Broker component acts as a crucial intermediary between various instances of Flows and the platform. Its primary purpose is to serve as the central point for information exchange between edge devices and the platform. 

## Flows

The Sensoworks-Flow component is an interface designed to facilitate the creation, modification, and visualization of configurations for fog and edge devices. This component plays a vital role in managing the distributed computing resources within the IoT infrastructure.
Through Sensoworks-Flow, users can easily set up and adjust the configurations of their fog and edge devices, ensuring they operate optimally and meet specific requirements. Additionally, this interface provides the capability to send control commands, allowing users to manage and direct device operations remotely. By offering a comprehensive and user-friendly interface for configuration management and control, the Sensoworks-Flow component enhances the efficiency and effectiveness of managing fog and edge computing environments. This functionality is essential for maintaining a well-orchestrated and responsive IoT system.


