---
layout: default
title: on-premise
nav_order: 422
description: "Fog installation on-premise"
parent: Fog installation
grand_parent: Fog gateway
---

The fog gateway can be installed

- Pure python
- Dockerized standalone
- Dockerized with edgex

# Pure python

Pre-requisites

- Python has to be installed into your system. If not, follow the instuctions from the main Python website: [python](https://www.python.org/)
- Install pip (the package installer for Python) following the instructions from https://pip.pypa.io/en/stable/

Once Python is installed, follow these instructions:

```
# Move to the directory you want to install the fog gateway
# cd ...

# Download the fog gateway
git clone https://github.com/sensoworks/sensoworks-fog-gateway.git

# Move into the fog gateway home
cd sensoworks-fog-gateway

# Install the requirements
$ pip install -r requirements.txt
```

DONE :-)

Now you are ready to run the Senworks Fog

The Sensoworks 



