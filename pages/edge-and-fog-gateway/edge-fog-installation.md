# Edge/Fog installation

The architecture document outlines the various components of Sensoworks Edge/Fog, each of which offers distinct features and capabilities. These components can be packaged in various configurations to meet the specific needs and requirements of your system. By thoroughly evaluating the available types and packaging options for Sensoworks Edge/Fog components, you can select the solution that aligns with your specific needs and objectives.

<p align="center"><img src="/images/sensoworks-edge-fog-versions.jpg" width="75%" height="75%"></p>

The appropriate Sensoworks Edge/Fog gateway solution for your project will depend on various factors, including the specific scenario of the project, the types of devices that need to be connected, the type of analysis required, and any additional considerations. By taking all of these factors into account, the most suitable version of the Sensoworks Edge/Fog gateway can be chosen to meet the specific needs and goals of your project.

| Destination | Notes |
|:---|:---|
| Embedded computing | This is the closest to the "Thing" in Io"T" world you can get. C remains the most widely used embedded programming language. Contact Sensoworks to discuss which is the best solution for your needs |
| Realtime OS computing | As for embedded computing, forget about Python, Java, etc. "C" is needed in 99% of cases. Dev with Arduino?, Maduino? STMicroelectronics?, Sensoworks has pre-packaged solutions for waste management, water leak detection, multi sensors general purpose pre-packaded applicances. For more information on how to collaborate with Sensoworks, please do not hesitate to contact us. Please reach out to us to begin this exciting journey together. |
| Tiny computers | Here we generally have a user frienly OS you can interact with. Unix is geneally the best option we propose. Solutions like Raspberry, Asus Tinker Board, Odroid and many others are available. On these systems, Sensoworks can install here all its Edge and Fog solutions: C, C++, Python |
| Industrial computers | There are thousands of solutions [here](https://www.google.com/search?q=industrial+pc+manufacturers). Usually these system run Unix and Sensoworks can install here all its Edge and Fog solutions: C, C++, Python |
| Standard computers | Same as for Industrial computers, there are many |
| Industrial applicances | When it come about industry 4.0, protocols such as OPC-UA, Modbus, Bacnet are usually necessary. For such scopes the Sensoworks solution can come embedded into industry 4.0 appliances, as for example the [InGateway902](https://www.inhandnetworks.com/products/edge-computing-gateway.html) |

Many factors can influence the choice of the Sensoworks gateway to use.

| Destination | Notes |
|:---|:---|
| Electric power availability | Is AC available? Is solar power an option? |
| Internet availability | Is there a LAN cable at the site or close? How can you reach the cloud?: GSM, Lora, wifi to a gateway, smoke signals |
| Realtime and high frequency monitoring | These needs may highly influece the component you need to install: C, Java, Pyhon, etc. |
| Alerting | Do you need alerting capabilities on the edge? |
| MachineLearning capabilities | Do you need Machine Learning capabilities at the edge? |
| Local storage | Do you need to save data at the edge? |
| Complex math functions | What kind of elavoration is necessary at the edge. Dynamic system analisys? Is the FFT involved? |
| Digital twin capabilities | Do you also need to interact visually with your system? |
| ... | Contact Sensoworks for any additional info |

Overview of the various possibilities:

<p align="center"><img src="/images/sensoworks-edge-scenarious.jpg" width="75%" height="75%"></p>

In an IoT system, edges and fog gateways are two different types of components that can be used to collect, process, and transmit data. Edges refer to devices that are located at the very edge of the network, closest to the sensors and devices that are generating data. These devices are typically low-power and may be used to perform basic processing and analysis of data, as well as to transmit data to the cloud or other central locations.

Fog gateways, on the other hand, are devices that are located further up the network hierarchy, closer to the cloud or other central systems. These devices are typically more powerful than edges and are capable of performing more complex processing and analysis tasks. They may also be used to store data locally and serve as a backup in case of network issues or outages.

In many cases, edges and fog gateways can be combined to better meet the business and technical needs of an IoT system. For example, edges might be used to collect data from sensors and transmit it to fog gateways, which can then perform more advanced processing and analysis tasks before transmitting the data to the cloud or other central systems. By using both edges and fog gateways, businesses can take advantage of the strengths of each component to create a more efficient and effective IoT system.

<p align="center"><img src="/images/sensoworks-edge-fog-composition.jpg" width="75%" height="75%"></p>
