# Installation instructions

## REQUIREMENTS FOR KUBERNETES:
- 3 Kubernetes nodes.
- 16GB RAM per node.
- 4 CPU cores per node.
- 500GB of disk space (the S3 and MongoDB space must be separate).

## REQUIREMENTS FOR INSTALLATION ON KUBERNETES:
- A Docker registry for the component images. The images must be accessible to Kubernetes deployments.
- A configured storage provider for the creation of the Kubernetes storage volumes.
- A configured load balancer (level 4) for Kubernetes ingresses management.
- A MongoDB database (version >= 7.0). A manual installation or an Atlas cluster doesn’t make difference. The DB must be a replica set.
- A S3 bucket for the images and high frequency files storage (can be MinIO or any other object storage installed locally).
- A SMTP server for sending the emails.

## Installation steps

The first step for installing the Sensoworks platform is to install a Kubernetes cluster with all the necessary parts to function. The Kubernetes cluster can be on a cloud provider (Amazon AWS, Microsoft Azure, Google Cloud, etc.) or can be installed on premise. If all the requirements are met, there is no difference to the Sensoworks platform where the K8s cluster is installed. For more information about Kubernetes, you can visit the official documentation [here](https://kubernetes.io/docs/setup/).

In the example template files on this page there are example values. Be sure to change the values to suit your needs before launching them. In the templates, the AWS ALB and AWS EFS are used for the load balancer and storage classes respectively. In case of an on-premise installation you need to substitute these parts with your local load balancer and storage classes information.

Once Kubernetes is installed, the first components to be deployed must be the third parties components. These components are:
- MongoDB cluster (possibly by using Atlas)
- MySQL database
- Apache Kafka (with Zookeeper for older versions)
- An SMTP (Mailhog if missing)
- S3 bucket manager (can be MinIO)
- Grafana
- ClickHouse
- Infisical (optional)
- EMQX (optional)

The Sensoworks platform can't be installed if the third parties components aren't deployed first.

After having installed the third parties components, it is possible to start deploying the platform components. These components are:
- Foreman
- Datagate (HTTP and/or MQTT)
- Datapump
- Storage
- Edgebroker (optional)
- Integration (optional)
- FOG/Edge

All the components can be deployed by using the Kubernetes deployment file templates provided by Sensoworks. Before applying the files you just need to compile the missing information in the template and make sure you have the component Docker images inside the local registry.

## Kubernetes templates

### How to use the templates
In case of third parties components, use Helm to deploy.
Here are the example steps:
```bash
kubectl create namespace ns-sensoworks-mysql #Ensure that the proper Kubernetes cluster is set
```
Next, edit the `<component-name>-values.yaml` and install the component using `helm`.
```bash
helm repo add bitnami https://charts.bitnami.com/bitnami

helm install sensoworks-<component-name> --namespace ns-sensoworks-<component-name> -f <env>/<component-name>-values.yaml bitnami/<component> --version 0.0.0
```
In case of success, the last command will print some information to access the newly-created component/cluster.

In case of Sensoworks components, use Kubernetes files to deploy. Here are the example steps:
```bash
kubectl apply -f <component-directory>/
```

---

### Third parties components
#### MySQL
You can get the Kubernetes file template for MySQL by clicking [here](/sensoworks-docs/files/components/mysql.zip).

Ensure that the proper Kubernetes cluster is set:
```
kubectl create namespace ns-sensoworks-mysql
```
Next, 
Edit the `sensoworks-mysql-values.yaml` and install MySQL using `helm`.
```
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install sensoworks-mysql --namespace ns-sensoworks-mysql -f <env>/sensoworks-mysql-values.yaml bitnami/mysql --version 9.6.0
```
In case of success, the last command will print some information to access the newly-created MySQL cluster.

---

#### Apache Kafka
You can get the Kubernetes file template for Apache Kafka by clicking [here](/sensoworks-docs/files/components/kafka.zip).

Edit the `<env>/kafka-values.yaml` and install Kafka using `helm`

```sh
kubectl create namespace ns-sensoworks-kafka
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
helm upgrade --install sensoworks-kafka --namespace ns-sensoworks-kafka -f <env>/kafka-values.yaml bitnami/kafka --version 26.5.0
```

In case of success, the last command will print some information to
access the newly-created Kafka cluster.

For instance, it will display the DNS name and the port to access Kafka
from within the cluster:
```sensoworks-kafka.ns-sensoworks-kafka.svc.cluster.local```

The command output will also show how to create sample producer and consumer
applications within the cluster in order to test the proper deployment
of Kafka.

```shell
# Kafka testing pod
kubectl run sensoworks-kafka-client --restart='Never' --image docker.io/bitnami/kafka:3.2.1-debian-11-r16 --namespace ns-sensoworks-kafka --command -- sleep infinity
kubectl exec --tty -i sensoworks-kafka-client --namespace ns-sensoworks-kafka -- bash
```

```shell
# Kafka producer
kafka-console-producer.sh \
    --bootstrap-server sensoworks-kafka.ns-sensoworks-kafka:9092 \
    --topic test
```

```shell
# Kafka consumer
kafka-console-consumer.sh \
    --bootstrap-server sensoworks-kafka.ns-sensoworks-kafka:9092 \
    --topic test \
    --from-beginning
```

---

#### Mailhog
You can get the Kubernetes file template for Mailhog by clicking [here](/sensoworks-docs/files/components/mailhog.zip).

Ensure that the proper Kubernetes cluster is set:
```
kubectl create namespace ns-sensoworks-mailhog
```
Next, 
Edit the `mailhog-values.yaml` and install Mailhog using `helm`.
```
helm repo add codecentric https://codecentric.github.io/helm-charts
helm install sensoworks-mailhog --namespace ns-sensoworks-mailhog -f <env>/mailhog-values.yaml codecentric/mailhog --version 5.2.3
```
In case of success, the last command will print some information to access the newly-created Mailhog cluster.

---

#### Grafana
You can get the Kubernetes file template for Grafana by clicking [here](/sensoworks-docs/files/components/grafana.zip).

```sh
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
kubectl create namespace ns-sensoworks-grafana
helm upgrade --install sensoworks-grafana --namespace ns-sensoworks-grafana -f <env>/sensoworks-grafana-values.yaml grafana/grafana --version 7.3.9
```

---

#### ClickHouse
You can get the Kubernetes file template for ClickHouse by clicking [here](/sensoworks-docs/files/components/clickhouse.zip).

##### Prerequisites

If running on AWS EKS, ensure that `gp3` storage class is installed

```sh
kubectl apply -f ../../base/gp3-storage-class.yaml
```

If not running on EKS, identify the correct storage class to use with

```sh
kubectl get storageclass
```

and set it as `persistence.storageClass` in the `<env>/sensoworks-clickhouse-values.yaml`

##### Install

* Create namespace

```sh
kubectl create namespace ns-sensoworks-clickhouse
```

* Create secret

Edit the `<env>/sensoworks-clickhouse-secrets.yaml` and then create the secret

```sh
kubectl apply -n ns-sensoworks-clickhouse -f <env>/sensoworks-clickhouse-secrets.yaml
```

> **NOTE:** A secure `admin-password` can be generated with the command `base64 < /dev/urandom | head -c32`. Encode the resulting string again in base64 before pasting it into the secret.

* Install with `helm`

```sh
helm upgrade --install sensoworks-clickhouse \
    --namespace ns-sensoworks-clickhouse \
    -f <env>/sensoworks-clickhouse-values.yaml \
    oci://registry-1.docker.io/bitnamicharts/clickhouse
```

##### Changing password after install

The current admin password is retrieved with

```sh
kubectl get secret --namespace ns-sensoworks-clickhouse sensoworks-clickhouse -o jsonpath="{.data.admin-password}" | base64 -d
```

After the first install, it's not possible to change the credentials using `helm`.
To change the password, edit the secret and then restart all clickhouse statefulsets (one per shard).
For example:

```sh
kubectl -n ns-sensoworks-clickhouse edit secret sensoworks-clickhouse
kubectl -n ns-sensoworks-clickhouse rollout restart statefulset sensoworks-clickhouse-shard0
```

##### Connection

In order to connect to ClickHouse from a client running on local workstation (e.g. DBeaver), use a port forward

```sh
kubectl -n ns-sensoworks-clickhouse port-forward svc/sensoworks-clickhouse 8123:8123
```

and then connect to `localhost:8123`

##### Resize storage of StatefulSet

The following procedure can be used to expand the size of the ClickHouse volumes without data loss. 

> **NOTE:** The commands assume that ClickHouse is deployed with 1 shard and 1 replica, so that only one StatefulSet exists. In general the number of the statefulsets created by the helm chart is equal to the number of shards, and the number of pods in each statefulset is equal to the number of replicas, and each replica has its own PVC attached. If the ClickHouse deployment that you are attempting to expand has more than 1 replica and/or more than 1 shard, every actions that refers to a PVC must be executed for all PVCs, and every actions that refers to a statefulset must be executed for all statefulsets.

* Verify that StorageClass used by the StatefulSet has the attribute `allowVolumeExpansion` set to true

* Edit PVC and change the volume size in `spec.resources.requests.storage` attribute

```sh
kubectl -n ns-sensoworks-clickhouse edit pvc data-sensoworks-clickhouse-shard0-0
```

* Edit the file `<env>/sensoworks-clickhouse-values.yaml` and change `persistence.size` to the same value of the PVC

* Delete StatefulSet without deleting the pods

```sh
kubectl -n ns-sensoworks-clickhouse delete sts sensoworks-clickhouse-shard0 --cascade=orphan
```

* Upgrade helm release

```sh
helm upgrade --install sensoworks-clickhouse \
    --namespace ns-sensoworks-clickhouse \
    -f <env>/sensoworks-clickhouse-values.yaml \
    oci://registry-1.docker.io/bitnamicharts/clickhouse
```

* Restart StatefulSet to recreate the pods

```sh
kubectl -n ns-sensoworks-clickhouse rollout restart statefulset sensoworks-clickhouse-shard0
```

---

#### EMQX
You can get the Kubernetes file template for EMQX by clicking [here](/sensoworks-docs/files/components/emqx.zip).

```sh
kubectl create namespace ns-sensoworks-emqx
helm repo add emqx https://repos.emqx.io/charts
helm -n ns-sensoworks-emqx upgrade --install sensoworks-emqx -f <env>/sensoworks-emqx.yaml emqx/emqx --version 5.7.0
```

If the broker should be accessible from external clients, also create a Network Load Balancer

```sh
kubectl apply -f <env>/sensoworks-emqx-nlb.yaml
```

---

### Sensoworks components
#### Foreman
You can get the Kubernetes file template for the Foreman by clicking [here](/sensoworks-docs/files/components/foreman.zip). Remember to change and customize all the necessary data inside the files before running ```kubectl apply```.

#### Datagate

You can get the Kubernetes file template for the Datagate-HTTP by clicking [here](/sensoworks-docs/files/components/datagate-http.zip). Remember to change and customize all the necessary data inside the files before running ```kubectl apply```.

You can get the Kubernetes file template for the Datagate-MQTT by clicking [here](/sensoworks-docs/files/components/datagate-mqtt.zip). Remember to change and customize all the necessary data inside the files before running ```kubectl apply```.

#### Datapump
You can get the Kubernetes file template for the Datapump-MongoDB by clicking [here](/sensoworks-docs/files/components/datapump-mongodb.zip). Remember to change and customize all the necessary data inside the files before running ```kubectl apply```.

#### Storage
You can get the Kubernetes file template for the Storage by clicking [here](/sensoworks-docs/files/components/storage.zip). Remember to change and customize all the necessary data inside the files before running ```kubectl apply```.