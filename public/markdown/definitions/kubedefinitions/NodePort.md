# NodePort

## Definitions
A NodePort service exposes a service on a static port on each node of a cluster. This allows external clients to access a service by connecting to any node on any port, regardless of which node is hosting the service

 - A NodePort is created with a specified port range
 - Kubernetes allocates a port within this range for each node in the cluster
 - Traffic is directed to the service's ClusterIP, which is then forwarded to the appropriate pod by kube-proxy
 - External client can access the serviec by connecting to any node's IP address and the alloated NodePort